+++
title = "Hexo Notes"
date = "2015-05-22 12:10:48"
tags = ["hexo"]
+++
# How to Enable TOC
## Create `toc.ejs`
add following content at `yourTheme/layout/widget/toc.ejs`


```html
<% var content = page.content;
if (is_post() && content) { %>

    <div class="widget-wrap">
        <h3 class="widget-title">Table of Contents</h3>
        <div class="widget">
            <%- toc(content) %>
        </div>
    </div>
<% } %>
```


<!--more-->

## Create `toc.styl`
add following content at `yourTheme/source/css/_partial/toc.styl`
then add `@import "_partial/toc"` to `yourTheme/source/css/style.styl`


```text
.toc
    li
      list-style: none
```


## finally

```text
# Sidebar
widgets:
- toc
```


# Add recent_update to sidebar

add following content at `yourTheme/layout/widget/recent_update.ejs`


```ejs
<% if (site.posts.length){ %>
  <div class="widget-wrap">
    <h3 class="widget-title">Recent Updates</h3>
    <div class="widget">
      <ul id="recent-post">
        <% site.posts.sort({'updated': -1, 'date': -1}).limit(8).each(function(post){ %>
          <li>
            <a href="<%- url_for(post.path) %>"><%= post.title || '(no title)' %></a>
            <small> - <%= post.updated.format("MMM D") %></small>
          </li>
        <% }) %>
      </ul>
    </div>
  </div>
<% } %>
```


## finally

```text
# Sidebar
widgets:
- recent_update
```


# Preventing crash with github/repo
If you want to change the permalink to title only but afraid the title will crash your repo `gh-pages`, you can try to use the following method
Go to `/_config.yml`
## in url session


```yaml
# URL
# permalink: :year/:month/:day/:title/
permalink: blog/:title/

# Deployment
deploy:
  type: git
  repo: https://github.com/<user>/<user>.github.io
  branch: master
```


then all post link will become `http://<user>.github.io/blog/name_of_your_post` and the pathname of your site is still `http://<user>.github.io`
