$().ready(() => {
    let inputs = ['name', 'phone', 'email', 'message'];
    $('#phone').on('input',()=>$('.contact-phone-error').hide());

});