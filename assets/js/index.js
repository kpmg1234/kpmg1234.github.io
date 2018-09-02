var zoomIn = true;
var auditColor = '#0191d8';
var taxColor = '#bc1f4a';
var advisoryColor = '#eaaa00';
var centralsrvColor = '#c3007b';

$(document).ready(function () {
    // Dragable
    $('#map-office').draggable();
    $('.avatar-office').draggable();
    // click map office zoomin
    $('#map-office').click(function () {
        if (zoomIn) zoomin();
        else zoomout();
    })
    // setHeightElement('#myTabContent');
    // setHeightElement('#map');
    $(window).resize(function () {
        setHeightElement('#myTabContent');
        setHeightElement('#map');
    })
    //set Background profile
    $('.menu .item').click(function () {
        setTimeout(function () {
            setBackgroundProfile();
        }, 100);
    })

  //set width progress bar
  setWidthProgressBar();
  setColorProfile('.favarite-title','color');

    // set border list profile
    setColorProfile('.border-profile','border-color');
    setColorProfile('.number-percent','color');

});
// map
function mapAction() {
  $('#map-office').draggable();
  $('.avatar-office').draggable();
  // click map office zoomin
  $('#map-office').click(function () {
    if (zoomIn) {
      zoomin();
    } else {
      zoomout();
    }
  });
}

// set icon profile color
function setColorProfile(obj,css) {
    $(obj).each(function () {
        var type = $(this).data('profile');
        switch (type) {
            case 'audit': {
                $(this).css(css, auditColor);
                break;
            }
            case 'tax': {
                $(this).css(css, taxColor);
                break;
            }
            case 'advisory': {
                $(this).css(css, advisoryColor);
                break;
            }
            case 'centralsrv': {
                $(this).css(css, centralsrvColor);
                break;
            }
        }
    })
}


function setWidthProgressBar() {
    var father = $('.each-favorite').each(function () {
        var perCent = $(this).children('.progress-bar').data('percent');
        $(this).children('.progress-bar').css('width', perCent);
        $(this).children('.number-percent').text(' ' + perCent + ' %');
    })
}

function setHeightElement(ele) {
    // set height for tab-content
    var height = $(window).height() - $(ele).offset().top - 20;
    $(ele).css('height', height);
}
// set background profile

function zoomin() {
    zoomIn = true;
    var myImg = $("#map-office");
    var currWidth = myImg.width()
    if (currWidth == 2500) return false;
    else {
        myImg.css("width", (currWidth + 100));
    }
}

function zoomout() {
    zoomIn = false;
    var myImg = $("#map-office");
    var currWidth = myImg.width()
    if (currWidth == 100) return false;
    else {
        myImg.css("width", (currWidth - 100));
    }
}

//side bar
function openNav(ele) {
    $(ele).css('right', '0');
}
function closeNav(ele) {
    $(ele).css('right', '-250px');
}
function openChatBox(ele){
    $(ele).css('right','20px');
}
function closeChatBox(ele) {
    $(ele).css('right', '-355px');
}

//close form create
function closeFormCreate(){
    $('#close-create-rule').click();
}
