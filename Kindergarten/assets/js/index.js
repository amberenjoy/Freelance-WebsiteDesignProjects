/*
 * @Author: zhangpengqiao
 * @Date:   2018-04-26 19:59:19
 * @Last Modified by:   zhangpengqiao
 * @Last Modified time: 2018-04-29 19:46:31
 */
$(document).ready(function() {

    $(".slider-indicator span").on('click', function(event) {
        event.preventDefault();
        var direction=$(this).attr("id");
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        if(direction==="prev"){
            $(".slider-area").animate({
                "marginLeft": "0"
            });
        }else{
           $(".slider-area").animate({
            "marginLeft": "-100%"
        }); 
        }
        
    });
    $('#calendar').fullCalendar({
        // height: 'parent',
        googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

        events: {
            googleCalendarId: 'katogcholing.com_f7lv84tnvqojhe8vnv778gc9qo@group.calendar.google.com',
            //className: 'gcal-event' // an option!
            backgroundColor: '#2E609B',
            //color: '#1E508B',   // an option!
            textColor: '#f1f1f1', // an option!
            borderColor: '#fff'
        },
        timeFormat: 'h(:mm)t',
        timezone: 'Asia/Hong_Kong',

        // US Holidays
        // events: 'en.usa#holiday@group.v.calendar.google.com',
        header: {
            left: 'title',
            center: '',
            right: 'today prev,next month,agendaWeek,agendaDay, listWeek' //basicWeek,basicDay,
        },
        views: {
            listWeek: {
                buttonText: '日程'
            }
        }

    });
    $('.js-toggle-menu').click(function(e){
        $('.banner').toggleClass('dispear');
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');

    });

});