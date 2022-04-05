$().ready(() => {
    let inputs = ['name', 'phone', 'email', 'message'];
    for (let elementId of inputs) {
        $(`#${elementId}`).on('input', () => $(`.contact-${elementId}-error`).animate(
            {opacity:"0%"},
            700
        ));
    }

    $('#contacter').on('submit',
        e => {
            let hasErrors = false;

            let formValidators = {
                name: /^.{1,100}$/,
                phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: /^.{1,255}$/,
            };

            for (let key in formValidators) {
                let acceptable = formValidators[key].test(
                    // Test n' Trim! (User shouldn't be able to submit spaces as a name.)
                    $(`#${key}`).val($(`#${key}`).val().trim()).val()
                );
                $(`.contact-${key}-error`).animate(
                    {opacity:`${acceptable ? '0' : '100'}%`},
                    500
                );
                //css({ 'display': acceptable ? 'none' : 'inline' });
                if (!acceptable && !hasErrors) {
                    document.getElementById(`${key}`).focus();
                }
                hasErrors ||= !acceptable;
            }

            if(hasErrors){
                e.preventDefault();
            }
        }

    )
});