function drawChart(dl){
  // CHART 1
  $('#datepicker').datepicker({
    autoclose: true
  });

  function show_dp() {
    $("#datepicker").datepicker('show');
  }

  $('.carousel').carousel({
    interval: 0
  });
  EXPORT_WIDTH = 1000;

  Highcharts.chart('container', {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 500,
        scrollPositionX: 1
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Wind speed (m/s)'
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },
    tooltip: {
      valueSuffix: ' m/s'
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2018, 2, 15, 0, 0, 0)
      }
    },
    series: [{
      name: ' ',
      lineColor: 'red',
      marker: {
        fillColor: 'white',
        lineWidth: 2,
        lineColor: 'red'
      },
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
        9.5
      ]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
  $(document).on('click','#abc',function () {
    save_chart($('#container').highcharts(), 'chart');
  });

// CHART 2
  $('#datepicker2').datepicker({
    autoclose: true,
    format: "MM",
    startView: "months",
    minViewMode: "months"
  });
  function show_dp2() {
    $("#datepicker2").datepicker('show');
  }
  $.ajax({
    url: 'http://192.168.10.41/api/statitic',
    type: 'POST',
    data: {
      "month":8,
      "year":2018,
      "function":["Audit","Tax","Central Services"]
    },
    success: function(data){
      Highcharts.chart('container2', {
        chart: {
          type: 'column'
        },
        title: {
          text: ' '
        },
        xAxis: {
          categories: data.created
        },
        yAxis: {
          min: 0,
          title: {
            text: ' '
          }
        },
        tooltip: {
          useHTML: true,
          headerFormat: '<b>{point.key}<br></b>',
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
          shared: true
        },
        plotOptions: {
          column: {
            stacking: 'normal'
          }
        }, legend: {
          reversed: true
        },
        series: data.data
      });
    }
  });



// CHART 3
  $('#datepicker3').datepicker({
    autoclose: true,
    format: "MM",
    startView: "months",
    minViewMode: "months"
  });

  function show_dp3() {
    $("#datepicker3").datepicker('show');
  }

  $('#abc3').click(function () {
    save_chart($('#container3').highcharts(), 'chart');
  });
  Highcharts.chart('container3', {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4',
        'Week 5'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'EVENT',
        color: '#522304',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

      }, {
        name: 'BAR',
        color: '#a5673f',
        data: [49.9, 71.5, 106.4, 129.2, 144.0]

      }, {
        name: 'CAFE',
        color: '#a9836a',
        data: [83.6, 78.8, 98.5, 93.4, 106.0]

      }, {
        name: 'COLLABORATION',
        color: '#daab8d',
        data: [48.9, 38.8, 39.3, 41.4, 47.0]

      }, {
        name: 'GRABGO',
        color: '#868484',
        data: [42.4, 33.2, 34.5, 39.7, 52.6]
      }, {
        name: 'FUN',
        color: '#313130',
        data: [42.4, 33.2, 34.5, 39.7, 52.6]
      }]
  });

}


function save_chart(chart, filename) {
  var render_width = EXPORT_WIDTH;
  var render_height = render_width * chart.chartHeight / chart.chartWidth
  var svg = chart.getSVG({
    exporting: {
      sourceWidth: chart.chartWidth,
      sourceHeight: chart.chartHeight
    }
  });
  var canvas = document.createElement('canvas');
  canvas.height = render_height;
  canvas.width = render_width;
  var image = new Image;
  image.onload = function () {
    canvas.getContext('2d').drawImage(this, 0, 0, render_width, render_height);
    var data = canvas.toDataURL("image/png")
    download(data, filename + '.png');
  };
  image.src = 'data:image/svg+xml;base64,' + window.btoa(svg);
}

function download(data, filename) {
  var a = document.createElement('a');
  a.download = filename;
  a.href = data
  document.body.appendChild(a);
  a.click();
  a.remove();
}
