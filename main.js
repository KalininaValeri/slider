/**
 * Created by lera on 2/12/16.
 */
$(function() {
    $('#slider').cycle({
        pagerTemplate: '<a href="#" class="switch_element"></a>',
        pagerActiveClass: 'active',
        fx: 'shuffle',
        speed: 100,
        timeout: 10000,
        pager: '#switch',
        slides: '.slide'
    });
});