$(document).ready(function () {


  // Set Title Page
  $('.nav-item').click(function () {
    var tt = $(this).children('.nav-link').data('title');
    $('#titlePage').text(tt);
  });

  // user setting
  function table_user(){
    $('#table_user').after('<div id="nav_user"></div>');
    var rowsShown = 9;
    var rowsTotal = $('#table_user tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('#nav_user').append('<a href="#" id="page'+i+'" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#table_user tbody tr').hide();
    $('#table_user tbody tr').slice(0, rowsShown).show();
    $('#nav_user a:first').addClass('active');

    var array_table =[];
    $('#nav_user a').each(function (a) {
      array_table.push(a)
    });
    var i = 0;
    var j=1;
    $('#pagin_user').text('Page '+1+' of '+array_table.length+'');
    $("#prev_user").click(function () {
      j--;
      console.log(i)
      if(j<1){
        j=1;
        $('#pagin_user').text('Page '+j+' of '+array_table.length+'');
        $('.ic_prev').removeClass("prev_hover")
      }else{
        i--;
        console.log(i)
        $('#nav_user a').removeClass('active');
        $('#page'+i).addClass('active');
        var currPage = $('#page'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_user tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_user').text('Page '+j+' of '+ array_table.length+'');
        $('.ic_next').addClass('next_hover');
        if(j==1){
          $('.ic_prev').removeClass("prev_hover")
        }
      }
    });

    $("#next_user").click(function () {

      if(j>=array_table.length){
        $('#pagin_user').text('Page '+j+' of '+array_table.length+'')
      }else{
        ++j;
        i++;
        $('#nav_user a').removeClass('active');
        $('#page'+i).addClass('active');
        var currPage = $('#page'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_user tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_user').text('Page '+j+' of '+array_table.length+'')
        $('.ic_prev').addClass("prev_hover");
        if(j>=array_table.length){
          $('.ic_next').removeClass('next_hover');
        }
      }
    });
    $('#live-tab').click(function () {
      j=1;
      i=0;
      $('#nav_user a').removeClass('active');
      $('#page'+i).addClass('active');
      var currPage = $('#page'+i).attr('rel');
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;
      $('#table tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
      css('display','table-row').animate({opacity:1}, 300);
      $('#pagin_user').text('Page '+j+' of '+array_table.length+'')
      $('.ic_prev').removeClass("prev_hover")
    })
  }
  table_user();
  //end user setting

  // zone setting
  function table_zone(){
    $('#table_zone').after('<div id="nav_zone"></div>');
    var rowsShown = 9;
    var rowsTotal = $('#table_zone tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('#nav_zone').append('<a href="#" id="page_zone'+i+'" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#table_zone tbody tr').hide();
    $('#table_zone tbody tr').slice(0, rowsShown).show();
    $('#nav_zone a:first').addClass('active');

    var array_table =[];
    $('#nav_zone a').each(function (a) {
      array_table.push(a)
    });
    var i = 0;
    var j=1;
    $('#pagin_zone').text('Page '+1+' of '+array_table.length+'');
    $("#prev_zone").click(function () {
      j--;
      if(j<1){
        j=1;
        $('#pagin_zone').text('Page '+j+' of '+array_table.length+'');
        $('.ic_prev').removeClass("prev_hover")
      }else{
        i--;
        $('#nav_zone a').removeClass('active');
        $('#page_zone'+i).addClass('active');
        var currPage = $('#page_zone'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_zone tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_zone').text('Page '+j+' of '+ array_table.length+'');
        $('.ic_next').addClass('next_hover');
        if(j==1){
          $('.ic_prev').removeClass("prev_hover")
        }
      }
    });

    $("#next_zone").click(function () {

      if(j>=array_table.length){
        $('#pagin_zone').text('Page '+j+' of '+array_table.length+'')
      }else{
        ++j;
        i++;
        $('#nav_zone a').removeClass('active');
        $('#page_zone'+i).addClass('active');
        var currPage = $('#page_zone'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_zone tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_zone').text('Page '+j+' of '+array_table.length+'')
        $('.ic_prev').addClass("prev_hover");
        if(j>=array_table.length){
          $('.ic_next').removeClass('next_hover');
        }
      }
    });
    $('#zone-tab').click(function () {
      j=1;
      i=0;
      $('#nav_zone a').removeClass('active');
      $('#page_zone'+i).addClass('active');
      var currPage = $('#page_zone'+i).attr('rel');
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;
      $('#table_zone tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
      css('display','table-row').animate({opacity:1}, 300);
      $('#pagin_zone').text('Page '+j+' of '+array_table.length+'');
      $('.ic_next').removeClass('next_hover');
    })
  }
  table_zone()


  // end zone setting

  // yitu setting
  function table_yitu(){
    $('#table_yitu').after('<div id="nav_yitu"></div>');
    var rowsShown = 9;
    var rowsTotal = $('#table_yitu tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
      var pageNum = i + 1;
      $('#nav_yitu').append('<a href="#" id="page_yitu'+i+'" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#table_yitu tbody tr').hide();
    $('#table_yitu tbody tr').slice(0, rowsShown).show();
    $('#nav_yitu a:first').addClass('active');

    var array_table =[];
    $('#nav_yitu a').each(function (a) {
      array_table.push(a)
    });
    var i = 0;
    var j=1;
    $('#pagin_yitu').text('Page '+1+' of '+array_table.length+'');
    $("#prev_yitu").click(function () {
      j--;
      console.log(i)
      if(j<1){
        j=1;
        $('#pagin_yitu').text('Page '+j+' of '+array_table.length+'');
        $('.ic_prev').removeClass("prev_hover")
      }else{
        i--;
        console.log(i)
        $('#nav_yitu a').removeClass('active');
        $('#page_yitu'+i).addClass('active');
        var currPage = $('#page_yitu'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_yitu tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_yitu').text('Page '+j+' of '+ array_table.length+'');
        $('.ic_next').addClass('next_hover');
        if(j==1){
          $('.ic_prev').removeClass("prev_hover")
        }
      }
    });

    $("#next_yitu").click(function () {

      if(j>=array_table.length){
        $('#pagin_yitu').text('Page '+j+' of '+array_table.length+'')
      }else{
        ++j;
        i++;
        $('#nav_yitu a').removeClass('active');
        $('#page_yitu'+i).addClass('active');
        var currPage = $('#page_yitu'+i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table_yitu tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 300);
        $('#pagin_yitu').text('Page '+j+' of '+array_table.length+'')
        $('.ic_prev').addClass("prev_hover");
        if(j>=array_table.length){
          $('.ic_next').removeClass('next_hover');
        }
      }
    });
    $('#yitu-tab').click(function () {
      j=1;
      i=0;
      $('#nav_yitu a').removeClass('active');
      $('#page_yitu'+i).addClass('active');
      var currPage = $('#page_yitu'+i).attr('rel');
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;
      $('#table_yitu tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
      css('display','table-row').animate({opacity:1}, 300);
      $('#pagin_yitu').text('Page '+j+' of '+array_table.length+'');
      $('.ic_next').removeClass('next_hover');
    })
  }
  table_yitu()
  // end yitu setting

  // end zone setting
  // $('.ic_prev').click(function () {
  //   event.preventDefault();
  //   // Getting the height of the document
  //   var n = $('#live').height();
  //   $('html, body').animate({ scrollTop: n }, 50);
  //
  // })

  $('#select_all').click(function () {
    var test= $('.check-permission').prop('checked');

    if(test==false){
      $(".check-permission").prop('checked', true);
    }else{
      $(".check-permission").prop('checked', false);
    }


  })

  $.ajax({
    url: "http://kpmg.dev-altamedia.com/api/tag/all",
    type: 'GET',

    success: function (data) {
      var html = '';
      $.each(data.data, function (key, value) {
        html += "<option value='" + value.id + "'>" + value.name + "</option>";
      });
      $(".myTags").html(html)
      $('.myTags').select2();
    }
  });


  function validateSelectBox(obj) {
    var options = obj.children;
    // Bi?n luu tr? các chuyên m?c da ch?n
    var html = '';
    var array_val = [];
    var array_id = [];
    // l?p qua t?ng option và ki?m tra thu?c tính selected
    for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        $('#plus_score').css('display','block');
        var a = $('#slider_id' + options[i].value).val();
        array_val.push(a);
        var b = options[i].value;
        array_id.push(b);
        // html += '<li>'+'<span class="col-sm-3">'+options[i].text+'</span>'+'<input class="slider col-sm-5" id="slider_id'+options[i].value+'" type="range" style="padding: 0px" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="0">'+'<span class="slider_val" id="slide_val'+options[i].value+'" style="margin-left: 20px">'+'0'+'</span>'+'<i>'+'%'+'</i>'+'</li>';
        html += '<li><div class="row ml-2"><span class="col-sm-3">' + options[i].text + '</span><div class="input-group col-sm-4"><input class="form-control" id="slider_id' + options[i].value + '" type="text" onKeyPress="return isNumberKey(event)"><span class="input-group-addon" style="margin-left: 20px">' + 'score' + '</span></div></div></li>';
      }
    }
    $('#result').html(html);
    var val_tag= $('#favorite').val();
    if(val_tag ==''){
      $('#plus_score').css('display','none');
    }
    for (var j = 0; j < options.length; j++) {
      if (array_val[j] == "" || array_val[j] == undefined) {
        $('#slider_id' + array_id[j]).val("50");
      } else {

        $('#slider_id' + array_id[j]).val(array_val[j]);
      }

    }}

  function isNumberKey(evt)
  {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

  $('.show_collapse').click(function () {
    var a = $(this).find(' i').attr("class");
    if(a == "fa fa-plus"){
      $(this).find(' i').attr("class","fa fa-minus")
    }else{
      $(this).find(' i').attr("class","fa fa-plus")
    }

  })

});
