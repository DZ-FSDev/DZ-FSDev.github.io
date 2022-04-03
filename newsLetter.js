$().ready(() => {
    $('#newsLetterSubmit').on('click', e => {
        // #newsLetterForm
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test($('#newsLetterForm').val())) {
            $('#newsLetterLabel').text('Thank you for subscribing!');
            $('#newsLetterForm').val('');
        } else {
            $('#newsLetterLabel').text('Email address is invalid.');
        }

        // Sorry, not taking any subscriptions at the moment :)
        e.preventDefault();
    });

    $('#newsLetterForm').on('input',
        e => {
            $('#newsLetterLabel').text('Email address');
        }
    );
});