$().ready(() => {
    $('#newsLetterSubmit').on('click', e => {
        // #newsLetterForm
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test($('#newsLetterForm').val())){
            $('#newsLetterLabel').text('Thank you for subscribing!');
        }else{
            $('#newsLetterLabel').text('Email address is invalid.');
        }
        
        // Sorry, not taking any subscriptions at the moment :)
        e.preventDefault();
    })
});