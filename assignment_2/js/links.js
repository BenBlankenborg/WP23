function fadeLinks() {
    $('#wikilinks').fadeToggle()
};

function validateLink () {
    linkName = $('#linkName').val()
    url = $('#url').val()
    if(linkName.length == 0) {
        $('#linkName').addClass("is-invalid")
    }
    if(url.length == 0 || !(url.match("((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\." +
        "[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"))) {
        $('#url').addClass("is-invalid")
    }
    else addLink(linkName, url)
};

function addLink(ln, u) {
    $('#wikiLinks').append('<li><a href=' + u + '>' + ln + '</a></li>');
};

function deleteMode() {
    $(document).click( function() {
        if($(this) == $('#delete')) {
            return false
        } else
            $(this).remove();
    })
};

$(function() {
    $('#fade').click(fadeLinks)
    $('#addToList').click(validateLink)
    $('#delete').click(deleteMode)
});