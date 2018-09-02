function feedFunction(data) {
  $('#plus_img').click(function(){
    $('#add_img').click();
  })
  var len = data.length;
  var events = [];
  for (i = 0; i < len; i++) {
    events.push({
      id : data[i].id,
      title: data[i].title,
      start: data[i].date_start,
      end: data[i].date_end,
      imageurl: data[i].file,
      description: data[i].description
    });
  }
  var array_id = [];
  $(function () {
    /* initialize the external events
     -----------------------------------------------------------------*/
    function init_events(ele) {
      ele.each(function () {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex: 1070,
          revert: true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        })

      })
    }

    init_events($('#external-events div.external-event'))

    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)

    var date = new Date()
    var d = date.getDate(),
      m = date.getMonth(),
      y = date.getFullYear()
    $('#calendar').fullCalendar({

      header: {
        left: 'prev title next',
        right: 'month'
      },
      buttonText: {
        month: 'MONTH',
      },
      //Random default events
      events: events,
      eventRender: function (event, eventElement) {
        // return $('<div class="content_event"><img style="float: right;height: 16px" src="./../images/icon/close.png" class="remove_event"><span class="time">'+event.start.format('hh:mma')+'-'+event.end.format('hh:mma')+'</span>' +
        //     '<div class="img_event"><img src=" '+ event.imageurl +'" width='+50+' height='+40+'></div>' +
        //     '<div class="content"><div style="font-weight: bold"><span>'+event.title+'</span></div><div><span>'+event.description+'</span></div></div>' +
        //     '</div>');
        // if (event.imageurl) {
        //     eventElement.find("div.fc-event-container").prepend("<img src='" + event.imageurl +"' width='30' height='30'>");
        // }
        eventElement.append('<div class="content_event"><img style="float: right;height: 16px" src="assets/images/icon/close.png" class="remove_event"  data-id="'+event.id+'"><span class="time">' + event.start.format('HH:mma') + '-' + event.end.format('HH:mm  ') + '</span>' +
          '<div class="img_event mr-3"><img src="' + event.imageurl + '" width=' + 50 + ' height=' + 40 + '></div>' +
          '<div class="content"><div style="font-weight: bold"><span>' + event.title + '</span></div><div><span>' + event.description + '</span></div></div>' +
          '</div>');
        // eventElement.find(".remove_event").click(function () {
        //   swal("You want to delete this event!")
        //     .then((value) => {
        //       $('#calendar').fullCalendar('removeEvents', event._id);
        //       swal("Comlete!", 'Comlete!', 'success')
        //     });
        //
        // });
      },

      // editable: true,
      // droppable: true, // this allows things to be dropped onto the calendar !!!
      // drop: function (date, allDay) { // this function is called when something is dropped
      //
      //   // retrieve the dropped element's stored Event Object
      //   var originalEventObject = $(this).data('eventObject')
      //
      //   // we need to copy it, so that multiple events don't have a reference to the same object
      //   var copiedEventObject = $.extend({}, originalEventObject)
      //
      //   // assign it the date that was reported
      //   copiedEventObject.start = date
      //   copiedEventObject.allDay = allDay
      //   copiedEventObject.backgroundColor = $(this).css('background-color')
      //   copiedEventObject.borderColor = $(this).css('border-color')
      //
      //   // render the event on the calendar
      //   // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
      //   $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)
      //
      //   // is the "remove after drop" checkbox checked?
      //   if ($('#drop-remove').is(':checked')) {
      //     // if so, remove the element from the "Draggable Events" list
      //     $(this).remove()
      //   }
      //
      // }
    })

      // [
      // {
      //   title          : '1$ Housepour',
      //   start          : moment('2018-07-30').format('YYYY-MM-DD') + ' 08:00',
      //   end            : moment('2018-08-03').format('YYYY-MM-DD') + ' 22:00',
      //   imageurl: 'assets/images/beer.jpeg',
      //   description: 'Enjoy your $1 drink with the Live Streaming of football match'
      // },
      //   {
      //     title          : '1-for-1 Coffee',
      //     start          : moment('2018-07-30').format('YYYY-MM-DD') + ' 08:00',
      //     end            : moment('2018-08-01').format('YYYY-MM-DD') + ' 22:00',
      //     imageurl: 'assets/images/coffee.jpg',
      //     description: 'Enjoy artisan coffee on a busy day'
      //   },
      //   {
      //     title          : '1$ Housepour',
      //     start          : moment('2018-08-06').format('YYYY-MM-DD') + ' 08:00',
      //     end            : moment('2018-08-06').format('YYYY-MM-DD') + ' 22:00',
      //     imageurl: 'assets/images/beer.jpeg',
      //     description: 'Enjoy your $1 drink with the Live Streaming of football ...'
      //   },
      // ]
    $('.fc-left').append('<button type="button" data-toggle="modal" data-target="#modal-addfeed" class="button_addfeed fc-addFeed-button fc-button fc-state-default fc-corner-left fc-corner-right" >ADD FEED</button>');
    $('.fc-right').append('<button type="button" class="button_list fc-list-button fc-button fc-state-default fc-corner-right">LIST</button>')


  })
  $(document).ready(function () {
    $('.datepicker').datetimepicker({
      format:'YYYY-MM-DD HH:mm'
    });

    function css() {
      $('.recurrence').css('color', '#c3bfbf').css('background-color', '#dedbdb');
    }

    $('.recurrence').each(function (a) {
      var array = [];
      array.push(a);
      $(this).click(function () {
        css();
        $('#choose' + a).css("color", "black").css('background-color', '#ebe7e7ad')
      })
    });
    $('#add_feed').click(function () {
      var title = $('#title').val();
      var description = $('#description').val();
      var start_day = $('#start_day').val();
      var end_day = $('#end_day').val();
      var img = $('.blah0').attr('src');

      $('#calendar').fullCalendar('renderEvent', {
        title: title,
        start: moment(start_day).format('YYYY-MM-DD') + ' 08:00',
        end: moment(end_day).format('YYYY-MM-DD') + ' 22:00',
        imageurl: img,
        description: description
      });


    });
    var array = [];
    $('.button_list').click(function () {
      $('.fc-view-container').css('display', 'none');
      $('.fc-month-button').removeClass("fc-state-active");
      $('button.fc-prev-button').css('display', 'none');
      $('.fc-left h2').addClass('invisible')
      $('button.fc-next-button').css('display', 'none');
      $(this).addClass('fc-state-active');
      $('.card_list').css('display', 'block');
      var a = $('.fc-left h2').text();
      array = [];
      array.push(a);
      $('.fc-left h2').text('August 2018');
    });
    $('.fc-month-button').click(function () {
      $('.card_list').css('display', 'none');
      $('.fc-view-container').css('display', 'block');
      $('button.fc-prev-button').css('display', 'block');
      $('button.fc-next-button').css('display', 'block');
      $('.fc-left h2').css('display', 'block');
      $('.fc-month-button').addClass("fc-state-active");
      $('.button_list').removeClass("fc-state-active");
      $('.fc-left h2').text(array[0]);
    });
    // $('.item_card').each(function (b) {
    //     $(this).click(function () {
    //         $(this).remove();
    //     })
    // })
    $('.remove_item').each(function (a) {
      $(this).click(function () {
        $(this).parents('.item_card').remove();
      })
    });
  })


}


var url = window.location.pathname;
var id = url.substring(url.lastIndexOf('/') + 1);
var formData = new FormData();

// arrImg.push($('.item').length);
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()
    reader.onload = function (e) {
      $('.blah0')
        .attr('src', e.target.result)
        .width(356)
        .height(208);
      $('.plus_img').css('display', 'none');
      $('#btn_addimg').css('display', 'none');
    };
    reader.readAsDataURL(input.files[0]);
    formData.append('file[]', input.files[0]);
  }
  if (input.files.length === 0) {
    $('.blah0').attr('src', "").removeAttr('style');
    $('.plus_img').css('display', 'inline-block');
    $('#btn_addimg').css('display', 'block');
  }
}

