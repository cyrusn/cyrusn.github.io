var lunrIndex, pagesIndex;

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Initialize lunrjs using our generated index file
function initLunr(cb) {
    if (!endsWith(baseurl,"/")){
        baseurl = baseurl+'/'
    };

    // First retrieve the index file
    $.getJSON(baseurl +"index.json")
        .done(function(index) {
            pagesIndex =   index;
            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = new lunr.Index
            lunrIndex.ref("uri");
            lunrIndex.field('title', {
                boost: 15
            });
            lunrIndex.field('tags', {
                boost: 10
            });

            lunrIndex.field("content", {
                boost: 5
            });

            // Feed lunr with each file and let lunr actually index them
            pagesIndex.forEach(function(page) {
                lunrIndex.add(page);
            });
            lunrIndex.pipeline.remove(lunrIndex.stemmer)
        })
        .done(cb)
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index flie:", err);
        });

}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    // Find the item in our index corresponding to the lunr one to have more info
    return lunrIndex.search(query).map(function(result) {
            return pagesIndex.filter(function(page) {
                return page.uri === result.ref;
            })[0];
        });
}

// Let's get started
initLunr(function() {
  document.getElementById("search-by").focus();
});
$( document ).ready(function() {
    var horseyList = horsey($("#search-by").get(0), {
        suggestions: function (value, done) {
            var query = $("#search-by").val();
            var results = search(query);
            done(results);
        },
          filter: function (q, suggestion) {
              return true;
          },
        set: function (value) {
            location.href = value.uri;
        },
        render: function (li, suggestion) {
            var uri = suggestion.uri.substring(1,suggestion.uri.length);

            suggestion.href = baseurl + uri;

            var query = $("#search-by").val().toLowerCase();

            // suggestion.context = text;

            var image = '<h4 style="margin: 0;">' + suggestion.title + '</h4>'
            var linkIcon = '<span class="glyphicon glyphicon-link"></span> '
            var parser = document.createElement('a')
            parser.href = suggestion.uri
            image += '<div style="font-size:12px">' + linkIcon +  (parser.pathname || '') +'</div>';

            if (suggestion.content) {
              var numWords = 3;
              var text = suggestion.content.toLowerCase().match("(?:\\s?(?:[\\w]+)\\s?){0,"+numWords+"}"+query+"(?:\\s?(?:[\\w]+)\\s?){0,"+numWords+"}");
            }

            if (text) {
              var contentIcon = '<span class="glyphicon glyphicon-file"></span> '
              image += '<div style="font-size:12px; font-style: italic"> ' + contentIcon + '... ' + (text || '') + ' ...' + '</div>';
            }

            li.innerHTML = image;
        },
        highlighter: true
    });
    horseyList.refreshPosition();
});
