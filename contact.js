$().ready(() => {
    let inputs = ['name', 'phone', 'email', 'message'];
    for (let elementId of inputs) {
        $(`#${elementId}`).on('input', () => $(`.contact-${elementId}-error`).hide());
    }

    $('#contacter').on('submit',
        () => {
            let formValidators = {
                name: /^.{1,100}$/,
                phone: /^.{1,100}$/,
                email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: /^.{1,255}$/,
            };

            for (let key in formValidators) {
                let acceptable = formValidators[key].test(
                    // Test n' Trim! (User shouldn't be able to submit spaces as a name.)
                    $(`#${key}`).val($(`#${key}`).val().trim()).val()
                );
                $(`.contact-${key}-error`).css({ 'display': acceptable ? 'none' : 'inline' });
                if (!acceptable && !hasErrors) {
                    document.getElementById(`${key}`).focus();
                }
                $hasErrors ||= !$acceptable;
            }


        }

    )
});