function checkName(){
    let name_input = $('#name');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

$(function() {
// Check name
    $('#name').keyup(function () {
        checkName();
    });
// Check age
    $('#age').keyup(function () {
        checkAge();
    });
// Check mail address
    $('#mail').keyup(function () {
        checkMail();
    });
// Check residence
    $('#place').keyup(function () {
        checkResidence();
    });
// Check all fields on submit
    $('#submit').click(function () {
        if (checkName() && checkAge() && checkMail() && checkResidence()){
            $('form').submit()
        }
    })
});