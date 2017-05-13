// press 'h' key to go to homepage
console.log('loading keypress.js')
document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (window.location.pathname == '/') return;

    if (charCode == 104) {
        window.location.href = '/'
    }
};
