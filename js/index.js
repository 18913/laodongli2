// 人口增长率与国内生产总值
var lineYear = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var lineOneData = [3.2, 3.4, 3.5, 3.7, 4.02, 4.19, 4.34, 4.56, 4.80,4.98];
  var lineThreeData = [9.7, 10.1, 10.5, 10.8, 11.4, 11.9, 12.6, 13.5, 14.2, 14.9];
  var lineTwoData = [136072, 136782, 137462, 138271, 139008, 139538, 140005, 141212, 141260, 141175];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["全国人口数量（万人）","人口老龄化（%）","农村劳动力（%）"],
      right: 1,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: lineYear,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12)
        },
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),

        },
      },
      {
        type: "value",
        position: "right",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),
        },
        formatter: function (value) {
          return value + '%'
        }
      },

    ],
    series: [
      {
        name: "农村劳动力（%）",
        type: "line",
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#f65ed0",
          borderColor: "#f65ed0",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },
        data: lineOneData,
      },
      {
        name: "人口老龄化（%）",
        type: "line",
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#6c50f3",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },
        data: lineThreeData,
      },
      {
        name: "全国人口数量（万人）",
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: lineTwoData,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var barData1 = [12.6, 71.5, 32.3, 21.7, 21.7, 25.6, 58.5, 54.3,85.8, 12.9]
  var barData2 = [13220, 14491, 15712, 17111, 18322, 19853, 21559, 21210, 24100, 25124]
  var barData3 = [8.2, 31.0, 26.6, 12.1, 14.3, 19.4, 29.2, 24.2, 43.8, 6.2]
  yData = [10010078, 484018, 360104, 31018, 10105];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["劳动力（万人）","收入（万元）","支出（万元）"],
      right: 1,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: lineYear,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12)
        },
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),

        },
      },
      {
        type: "value",
        position: "right",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),
        },
        formatter: function (value) {
          return value + '%'
        }
      },

    ],
    series: [
      {
        name: "收入（万元）",
        type: "line",
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#f65ed0",
          borderColor: "#f65ed0",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },
        data: barData1,
      },
      {
        name: "支出（万元）",
        type: "line",
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#6c50f3",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
              10,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },
        data: barData3,
      },
      {
        name: "劳动力（万人）",
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: barData2,
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 折线图定制
(function () {

  var myChart = echarts.init(document.getElementById('echart5'));

  const scatterOption = (  option = {
    legend: {
      orient: 'vertical',
      itemWidth: 10,
      itemHeight: 10,
      textStyle:{
        color:'rgba(255,255,255,.5)'
      },
      top:'20%',
      right:30,
      data:['城镇人口','乡村人口']
    },
    color: ['#10d8ec','#82e321'],
    tooltip : {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },

    calculable : true,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 92071, name: '城镇人口' },
          { value: 49104, name: '乡村人口' },

        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  const barOption = (  option = {
    legend: {
      orient: 'vertical',
      itemWidth: 10,
      itemHeight: 10,
      textStyle:{
        color:'rgba(255,255,255,.5)'
      },
      top:'20%',
      right:30,
      data:['男性人数','女性人数']
    },
    color: ['#5ae755','#f68fb8'],
    tooltip : {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },

    calculable : true,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 72206, name: '男性人数' },
          { value: 68969, name: '女性人数' },

        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  let currentOption = scatterOption;
  myChart.setOption(scatterOption);
  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
  }, 3000);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();







(function () {  
  var myChart = echarts.init(document.getElementById('echart6'));  
  var lineTwoData = [178572, 139752, 112342, 178761, 112358, 139538, 168745, 98753, 85795, 75684];  
  var option = {  
    tooltip: {  
      trigger: "axis",  
      axisPointer: {  
        type: "shadow",  
      },  
    },  
    grid: {  
      left: "0",  
      right: "4%",  
      bottom: "0%",  
      top: "14%",  
      containLabel: true,  
    },  
    legend: {  
      data: ["全国人口数量（万人）"], // 已移除其他两项  
      right: 1,  
      top: 0,  
      textStyle: {  
        color: "#fff",  
      },  
    },  
    xAxis: {  
      type: "category",  
      // 假设 lineYear 已在外部定义  
      data: lineYear,  
      axisLine: {  
        lineStyle: {  
          color: "rgba(255,255,255,0.1)",  
        },  
      },  
      axisLabel: {  
        interval: 0,  
        textStyle: {  
          color: "rgba(255,255,255,.8)",  
          // 假设 transformFontSize 是一个已定义的函数  
          fontSize: transformFontSize(12)  
        },  
      },  
    },  
    yAxis: [  
      {  
        type: "value",  
        axisLine: {  
          show: false,  
        },  
        splitLine: {  
          show: true,  
          lineStyle: {  
            color: "rgba(255,255,255,0.1)",  
          },  
        },  
        axisLabel: {  
          color: "rgba(255,255,255,.8)",  
          fontSize: transformFontSize(12),  
        },  
      }  
      // 已移除第二个 yAxis 配置，因为它专用于折线图  
    ],  
    series: [  
      {  
        name: "全国人口数量（万人）",  
        type: "bar",  
        barWidth: "20%",  
        itemStyle: {  
          normal: {  
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [  
              {  
                offset: 0,  
                color: "#248ff7",  
              },  
              {  
                offset: 1,  
                color: "#6851f1",  
              },  
            ]),  
            barBorderRadius: 11,  
          },  
        },  
        data: lineTwoData,  
      }  
      // 已移除关于人口老龄化和农村劳动力的折线图配置  
    ],  
  };  
  
  myChart.setOption(option);  
  window.addEventListener("resize", function () {  
    myChart.resize();  
  });  
})();






(function () {
  var speed = 50;
  var list = document.getElementById('list');
  var list2 = document.getElementById('list2');
  var rule = document.getElementById('rule');
  list2.innerHTML = list.innerHTML;
  function Marquee() {
    if (list2.offsetTop - rule.scrollTop <= 0)
      rule.scrollTop -= list.offsetHeight;
    else {
      rule.scrollTop++;
    }
  }
  var MyMar = setInterval(Marquee, speed);
  rule.addEventListener('mouseover', function () {
    clearInterval(MyMar)
  });
  rule.addEventListener('mouseout', function () {
    MyMar = setInterval(Marquee, speed)
  });
})();

function transformFontSize(px) {
  let clientWidth = window.innerWidth || document.body.clientWidth
  if (!clientWidth) {
    return 0
  }
  let fontSize = clientWidth / 1920
  return px * fontSize
}

(function () {
  var myChart = echarts.init(document.getElementById('echart6'));
  var lineTwoData = [164895, 175692, 153687, 146587, 135879, 128965, 116587, 98753, 75684, 65795];
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["全国农村人口数量（万人）"], // 已移除其他两项
      right: 1,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      // 假设 lineYear 已在外部定义
      data: lineYear,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255,255,255,.8)",
          // 假设 transformFontSize 是一个已定义的函数
          fontSize: transformFontSize(12)
        },
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),
        },
      }
      // 已移除第二个 yAxis 配置，因为它专用于折线图
    ],
    series: [
      {
        name: "全国农村人口数量（万人）",
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: lineTwoData,
      }
      // 已移除关于人口老龄化和农村劳动力的折线图配置
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

(function () {
  var myChart = echarts.init(document.getElementById('echart7'));
  var option = {
    series: [
      {
        type: 'funnel',
        left: 'center',
        top: 'center',
        width: '80%',
        height: '80%',
        right: null,
        bottom: null,
        data: [
          { name: '人口增长', value: 189250  },
          { name: '人口老龄化', value: 78248 },
          { name: '出生率', value: 52486 },
          { name: '死亡率', value: 12453 },
          { name: '平均寿命', value: 75 }
        ]
      }
    ]
  };

  // 使用配置项显示图表
  myChart.setOption(option);
})();

// 新增样式美化
var container = document.querySelector('.container');
container.style.backgroundColor = '#f0f0f0';
container.style.padding = '20px';

var title = document.querySelector('h2');
title.style.color = '#333';
title.style.fontSize = '24px';
title.style.textAlign = 'center';

var chart = document.getElementById('echart7');
chart.style.width = '100%';
chart.style.height = '400px';
chart.style.margin = '0 auto';







(function () {
  var speed = 50;
  var list = document.getElementById('list');
  var list2 = document.getElementById('list2');
  var rule = document.getElementById('rule');
  list2.innerHTML = list.innerHTML;
  function Marquee() {
    if (list2.offsetTop - rule.scrollTop <= 0)
      rule.scrollTop -= list.offsetHeight;
    else {
      rule.scrollTop++;
    }
  }
  var MyMar = setInterval(Marquee, speed);
  rule.addEventListener('mouseover', function () {
    clearInterval(MyMar)
  });
  rule.addEventListener('mouseout', function () {
    MyMar = setInterval(Marquee, speed)
  });
})();

function transformFontSize(px) {
  let clientWidth = window.innerWidth || document.body.clientWidth
  if (!clientWidth) {
    return 0
  }
  let fontSize = clientWidth / 1920
  return px * fontSize
}
