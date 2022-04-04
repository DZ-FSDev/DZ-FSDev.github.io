$().ready(() => {
    let inputs = ['name', 'phone', 'email', 'message'];
    for (let elementId of inputs) {
        $(`#${elementId}`).on('input', () => $(`.contact-${elementId}-error`).hide());
    }

    $('#contacter').on('submit',
        ()=>console.log('hi')
    )
});