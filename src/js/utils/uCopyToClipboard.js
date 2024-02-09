function myFunction(selector) {
    var copyText = document.getElementById(selector);
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
}
