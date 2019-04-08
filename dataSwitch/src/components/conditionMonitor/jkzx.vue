<template>
  <div class="main">
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    <div id="myPie" :style="{width: '48%', height: '300px',display:'inline-block'}"></div>
    <div id="myBar" :style="{width: '48%', height: '300px',display:'inline-block'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    },
    mounted(){
      this.drawLine();
      this.drawPie();
      this.drawBar();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption( {
          title : {
            text: '监控中心',
            subtext: '纯属虚构'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['服务','数据库']
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                formatter: '{value}'
              }
            }
          ],
          series : [
            {
              name:'服务',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'数据库',
              type:'line',
              data:[0, 2, 5, 3, 2, 8, 6],
              markPoint : {
                data : [
                  {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]
        });
      },
      drawPie(){
        // 基于准备好的dom，初始化echarts实例
        let myPie = this.$echarts.init(document.getElementById('myPie'))
        // 绘制图表
        myPie.setOption( {
          title : {
            text: '数据监控',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient : 'vertical',
            x : 'left',
            data:['服务','数据源','服务器','接收','发送']
          },

          calculable : true,
          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'服务'},
                {value:310, name:'数据源'},
                {value:234, name:'服务器'},
                {value:135, name:'接收'},
                {value:1548, name:'发送'}
              ]
            }
          ]
        });
      },
      drawBar(){
        // 基于准备好的dom，初始化echarts实例
        let myBar = this.$echarts.init(document.getElementById('myBar'))
        var placeHoledStyle = {
          normal:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
          },
          emphasis:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
          }
        };
        var dataStyle = {
          normal: {
            label : {
              show: true,
              position: 'insideLeft',
              formatter: '{c}%'
            }
          }
        };
        myBar.setOption({
          title: {
            text: '城市访问量',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
          },
          legend: {
            y: 55,
            itemGap : document.getElementById('myBar').offsetWidth / 8,
            data:['GML', 'PYP','WTC', 'ZTW']
          },
          grid: {
            y: 80,
            y2: 30
          },
          xAxis : [
            {
              type : 'value',
              position: 'top',
              splitLine: {show: false},
              axisLabel: {show: false}
            }
          ],
          yAxis : [
            {
              type : 'category',
              splitLine: {show: false},
              data : ['重庆', '天津', '上海', '北京']
            }
          ],
          series : [
            {
              name:'GML',
              type:'bar',
              stack: '总量',
              itemStyle : dataStyle,
              data:[38, 50, 33, 72]
            },
            {
              name:'GML',
              type:'bar',
              stack: '总量',
              itemStyle: placeHoledStyle,
              data:[62, 50, 67, 28]
            },
            {
              name:'PYP',
              type:'bar',
              stack: '总量',
              itemStyle : dataStyle,
              data:[61, 41, 42, 30]
            },
            {
              name:'PYP',
              type:'bar',
              stack: '总量',
              itemStyle: placeHoledStyle,
              data:[39, 59, 58, 70]
            },
            {
              name:'WTC',
              type:'bar',
              stack: '总量',
              itemStyle : dataStyle,
              data:[37, 35, 44, 60]
            },
            {
              name:'WTC',
              type:'bar',
              stack: '总量',
              itemStyle: placeHoledStyle,
              data:[63, 65, 56, 40]
            },
            {
              name:'ZTW',
              type:'bar',
              stack: '总量',
              itemStyle : dataStyle,
              data:[71, 50, 31, 39]
            },
            {
              name:'ZTW',
              type:'bar',
              stack: '总量',
              itemStyle: placeHoledStyle,
              data:[29, 50, 69, 61]
            }
          ]
        });

      }
    }
  }
</script>

<style scoped>

</style>
