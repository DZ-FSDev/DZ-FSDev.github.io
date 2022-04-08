$().ready(() => {
    $('.popover-dismiss-btn').popover({
        container: 'body',
        trigger: 'focus',
        customClass: 'bg-smoke-success text-success'
    })
});

/*
new bootstrap.Popover(document.querySelector('#popover-dismiss-2021'), {
    container: 'body',
    trigger: 'focus',
    customClass: 'bg-smoke-success text-success'
});

new bootstrap.Popover(document.querySelector('#popover-dismiss-2022'), {
    container: 'body',
    trigger: 'focus',
    customClass: 'bg-smoke-success text-success'
});
*/