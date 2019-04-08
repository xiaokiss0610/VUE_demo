<template>
  <div class="main">
    <el-scrollbar class="scroll-area">
      <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
      <el-table
        :data="tableData"
        v-loading.body="loading"
        tooltip-effect="dark"
        style="width: 100%;"
        border
      >
        <el-table-column
          type="selection"
          width="35">
        </el-table-column>
        <el-table-column
          prop="orgName"
          label="问题标识"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="问题原因"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="IP"
          label="处理方式"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="code"
          label="处理人"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fwName"
          label="处理时间"
          align="center">
        </el-table-column>
      </el-table>
      <!--列表底部工具条和分页符-->
      <el-pagination background
                     :current-page="currentPage"
                     :page-sizes="[10, 50, 100]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
      <!--列表底部工具条和分页符-->
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        tableData: [{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        },{
          orgName: 'ERROE01110223',
          type: '数据错误',
          IP: '重新发送数据',
          code: '张三',
          fwName: '2018-12-17 10:20'
        }],
        //显示加载中样式
        loading: false,
        //搜索表单
        searchForm: {
          orgName: '',
          type: ''
        },
        multipleSelection: [],
        //当前页
        currentPage: 3,
        //分页大小
        pageSize: 100,
        //总记录数
        total: 800,
        //删除的弹出框
        deleteVisible: false,
        //编辑界面是否显示
        editFormVisible: false,
        editLoading: false,
        editFormRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
        //编辑界面数据
        editForm: {
          id: 0,
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          address: ''
        }
      }
    },
    mounted()
    {
      this.drawLine();
    },
    methods: {
      drawLine()
      {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption( {
          tooltip : {
            trigger: 'axis'
          },
          calculable : true,
          legend: {
            data:['数据质量','数值范围','字典范围','数据格式','身份验证','服务','数据库','元数据','其他']
          },
          xAxis : [
            {
              type : 'category',
              splitLine : {show : false},
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value',
              position: 'right'
            }
          ],
          series : [
            {
              name:'数据质量',
              type:'bar',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'数值范围',
              type:'bar',
              tooltip : {trigger: 'item'},
              stack: '广告',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'字典范围',
              type:'bar',
              tooltip : {trigger: 'item'},
              stack: '广告',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'数据格式',
              type:'bar',
              tooltip : {trigger: 'item'},
              stack: '广告',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'身份验证',
              type:'line',
              data:[862, 1018, 964, 1026, 1679, 1600, 1570]
            },

            {
              name:'身份验证细分',
              type:'pie',
              tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              center: [160,130],
              radius : [0, 50],
              itemStyle :　{
                normal : {
                  labelLine : {
                    length : 20
                  }
                }
              },
              data:[
                {value:1048, name:'服务'},
                {value:251, name:'数据库'},
                {value:147, name:'元数据'},
                {value:102, name:'其他'}
              ]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
