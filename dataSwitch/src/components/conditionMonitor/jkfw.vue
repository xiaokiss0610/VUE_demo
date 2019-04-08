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
          label="单位名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="接收类型"
          width="200"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="IP"
          label="连接IP地址"
          width="180"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="code"
          label="连接端口号"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="fwName"
          label="服务名称"
          align="center"
          width="180">
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
          type: '接收',
          IP: '192.162.1.1',
          code: '80端口',
          fwName: 'FWMC'
        },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
          },
          {
            orgName: '江西省公路路政管理总队',
            type: '接收',
            IP: '192.162.1.1',
            code: '80端口',
            fwName: 'FWMC'
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
        title: {
          text: '监控服务',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['服务', '数据库']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '服务',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '数据库',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      });
    }
  }
  }
</script>

<style scoped>

</style>
