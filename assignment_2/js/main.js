function validateForm(){
    var input = {
        name: $('#name').val(),
        age: $('#age').val(),
        city: $('#city').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
    }
    var valid = true
    $('input').each(
        function () {
            inp = $(this).val();
            if (inp.length == 0) {
                $('#form-alert').text("Not all fields are filled in!");
                $('#form-alert').show();
                return valid = false;
            }
        })
    if(valid==false) {
        return false;
    }
    if(!(input.name.match('^[a-zA-Z]+$')) || !(input.city.match('^[a-zA-Z]+$'))) {
        $('#form-alert').text("Name and city can only contain letters, no numbers, spaces, or special" +
            " characters!");
        $('#form-alert').show()
        return false;
    }
    if(!(input.phone.match('^[0-9]+$')) || !(input.age.match('^[0-9]+$'))) {
        $('#form-alert').text("Both phone number and age can only contain numbers, and no spaces!");
        $('#form-alert').show();
        return false;
    }
    if(!(input.email.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))) {
        $('#form-alert').text("Email adress is invalid")
        $('#form-alert').show()
        return false
    }
    else {
        writeFormData(input)
    }
}

function writeFormData(input){
    $('tr:first-child > td').text(input.name)
    $('tr:nth-child(2) > td').text(input.age)
    $('tr:nth-child(3) > td').text(input.city)
    $('tr:nth-child(4) > td').text(input.email)
    $('tr:last-child > td').text(input.phone)
    $('#form-content').show()
    $('#form-alert').hide()
}

function eraseValues() {
    $('input').each(
        function () {
            $(this).val('')
        })
    $('#form-content').hide()
    $('#form-alert').hide()
}

function showLinks() {
    $('#links').show()
    $('#contact').hide()
    $('#link-tab').addClass('active')
    $('#contact-tab').removeClass('active')
}

function showContact() {
    $('#links').hide()
    $('#contact').show()
    $('#contact-tab').addClass('active')
    $('#link-tab').removeClass('active')
}

$(function() {
    $("#submit").click(validateForm)
    $('#erase').click(eraseValues)
    $('#link-tab').click(showLinks)
    $('#contact-tab').click(showContact)
});
