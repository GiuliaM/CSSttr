function $(sel) {
    return document.querySelector(sel);
}

var dialog = $('#news');
var main = $('main');
var header = $('header')

$('#newsDiv').onclick = function() {

    dialog.setAttribute('open', '');

    main.classList.add('de-emphasized');
    header.classList.add('de-emphasized');
    console.log("dit werkt");
}

dialog.onclick = function() {
    if (dialog.close) {
        dialog.close();
    }
    else {
        dialog.removeAttribute('open');
    }

    main.classList.remove('de-emphasized');
    header.classList.remove('de-emphasized');
}
