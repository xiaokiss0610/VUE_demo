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
          label="信息发送单位"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="待发送"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="IP"
          label="已发送"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="code"
          label="已接收"
          align="center">
        </el-table-column>
        <el-table-column
          prop="code1"
          label="已处理"
          align="center">
        </el-table-column>
        <el-table-column
          prop="code2"
          label="已入库"
          align="center">
        </el-table-column>
        <el-table-column
          prop="code3"
          label="待入库"
          align="center">
        </el-table-column>
        <el-table-column
          prop="fwName"
          label="待处理"
          align="center">
        </el-table-column>
        <el-table-column
          label="网络连接"
          align="center"
          width="120">
          <template slot-scope="scope">
            <i class="el-icon-wtcms-fabu" style="color: green;"></i> 正常
          </template>
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
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
        },{
          orgName: '江西省公路路政管理总队',
          type: '90',
          IP: '90',
          code: '80 ',
          code1: '80 ',
          code2: '80 ',
          code3: '80 ',
          fwName: '9'
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
        myChart.setOption({
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['服务', '发送', '接收']
          },
          calculable : true,
          xAxis : [
            {
              type : 'value'
            }
          ],
          yAxis : [
            {
              type : 'category',
              axisTick : {show: false},
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          series : [
            {
              name:'服务',
              type:'bar',
              itemStyle : { normal: {label : {show: true, position: 'inside'}}},
              data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
              name:'接收',
              type:'bar',
              stack: '总量',
              barWidth : 5,
              itemStyle: {normal: {
                  label : {show: true}
                }},
              data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
              name:'发送',
              type:'bar',
              stack: '总量',
              itemStyle: {normal: {
                  label : {show: true, position: 'left'}
                }},
              data:[-120, -132, -101, -134, -190, -230, -210]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
