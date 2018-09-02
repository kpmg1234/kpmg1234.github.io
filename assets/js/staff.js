


  function paginationTableContent() {
    $('.table tbody tr').hover(function () {
      $(this).find("td:last").css("opacity", "1")
    }).on("mouseleave", function () {
      $(this).find("td:last").css("opacity", "0")
    });

   
    $('#table').after('<div id="nav"></div>');
    var rowsShown = 9;
    var rowsTotal = $('#table tbody tr').length;
    var numPages = rowsTotal / rowsShown;
    for (i = 0; i < numPages; i++) {
      var pageNum = i + 1;
      $('#nav').append('<a href="#" id="page' + i + '" rel="' + i + '">' + pageNum + '</a> ');
    }
    $('#table tbody tr').hide();
    $('#table tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');

    var array_table = [];
    $('#nav a').each(function (a) {
      array_table.push(a)
      console.log(array_table.length)
    });
    var i = 0;
    var j = 1;
    $('.pagin').text('Page ' + 1 + ' of ' + array_table.length + '');
    $(".prev").click(function () {
      j--;
      console.log(i)
      if (j < 1) {
        j = 1;
        $('.pagin').text('Page ' + j + ' of ' + array_table.length + '');
        $('.ic_prev').removeClass("prev_hover")
      } else {
        i--;
        console.log(i)
        $('#nav a').removeClass('active');
        $('#page' + i).addClass('active');
        var currPage = $('#page' + i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
        $('.pagin').text('Page ' + j + ' of ' + array_table.length + '');
        $('.ic_next').addClass('next_hover');
        if (j == 1) {
          $('.ic_prev').removeClass("prev_hover")
        }
      }
    });

    $(".next").click(function () {

      if (j >= array_table.length) {
        $('.pagin').text('Page ' + j + ' of ' + array_table.length + '')
      } else {
        ++j;
        i++;
        $('#nav a').removeClass('active');
        $('#page' + i).addClass('active');
        var currPage = $('#page' + i).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#table tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity: 1}, 300);
        $('.pagin').text('Page ' + j + ' of ' + array_table.length + '')
        $('.ic_prev').addClass("prev_hover");
        if (j >= array_table.length) {
          $('.ic_next').removeClass('next_hover');
        }
      }
    });

  }

