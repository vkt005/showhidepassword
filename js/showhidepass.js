/*@author vivek kumar tripathi
 *@email vkt005@gmail.com
 *@skype vivek.kr.tripathi 
 * @licence - opens source free license
 */
(function($) {
    $.toggleShowPassword = function(options) {
        var settings = $.extend({
            field: "#password",
            control: '',
            mode: 'button'
        }, options);
        var field = $(settings.field),
                control = $(settings.control);
        if (settings.mode === '' || settings.mode === undefined) {
            settings.mode = 'button';
        }
        if (control.length > 0) {
            control.bind('click', function() {
                if ($(this).hasClass('hp')) {
                    field.attr('type', 'text');
                    $(this).toggleClass('hp sp');
                }
                else if ($(this).hasClass('sp')) {
                    field.attr('type', 'password');
                    $(this).toggleClass('hp sp');
                } else {
                    field.attr('type', 'text');
                    $(this).addClass('sp');
                }
            });
        } else {
            field.wrap('<div class="showhidepass"></div>');
            if (settings.mode == 'button') {
                var w = field.outerWidth(),
                        wi = field.width(),
                        h = field.outerHeight(),
                        cx = $('.showhidepass');
                cx.append('<input type="button" name="showhide" value="show" class="showhide hp"/>');
                cx.css({'width': w, 'height': h});
                field.css({'width': wi - 35, 'padding-right': '45px'});
                control = $('.showhide');
                control.bind('click', function() {
                    if ($(this).hasClass('hp')) {
                        field.attr('type', 'text');
                        $(this).toggleClass('hp sp').val('Hide');
                    }
                    else if ($(this).hasClass('sp')) {
                        field.attr('type', 'password');
                        $(this).toggleClass('hp sp').val('Show');
                    }
                });
            }
            else {
                var w = field.width(),
                        h = field.height(),
                        cx = $('.showhidepass');
                cx.append('<input type="checkbox" name="showhide" class="showhidecheck" value="1"/>show password');
                cx.css({'width': w, 'height': h});
                control = $('.showhidecheck');
                control.bind('click', function() {
                    if ($(this).is(':checked')) {
                        field.attr('type', 'text');
                        $(this).toggleClass('hp sp');
                    }
                    else {
                        field.attr('type', 'password');
                        $(this).toggleClass('hp sp');
                    }
                });
            }
        }
    };
}(jQuery));