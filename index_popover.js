/**
 * Enables Popover functionality to any elements which belong to the
 * class 'popover-dismiss-btn'.
 * 
 * @author DZ-FSDev
 * @version 0.0.8
 */
$().ready(() => {
    $('.popover-dismiss-btn').popover({
        container: 'body',
        trigger: 'focus',
        customClass: 'bg-smoke-success text-success'
    })
});