<template>
  <div class="main">
    <el-scrollbar class="scroll-area">
    <div id="myChart" :style="{width: '48%', height: '600px',display:'inline-block'}"></div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      v-loading.body="loading"
      @selection-change=""
      tooltip-effect="dark"
      border
      style="width: 50%;display:inline-block;">
      <el-table-column
        prop="name"
        align="center"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="FWaddress"
        align="center"
        label="前置服务地址"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="MQaddress"
        align="center"
        label="MQ地址"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="状态"
        align="center"
        width="180"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <i class="el-icon-wtcms-fabu" style="color: red;"></i> 服务 &nbsp;&nbsp;
          <i class="el-icon-wtcms-fabu" style="color: green;"></i> 数据库
        </template>
      </el-table-column>
    </el-table>
    <!--列表底部工具条和分页符-->
    <el-pagination background
                   :current-page="currentPage"
                   :page-sizes="[10, 50, 100, 200]"
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
    data() {
      return {
        tableData3: [{
          name: '公安局前置',
          orgName: '公安局',
          FWaddress: '127.0.0.1',
          MQaddress: '192.162.2.22',
          sever: '192.162.2.222'
        },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
          },
          {
            name: '公安局前置',
            orgName: '公安局',
            FWaddress: '127.0.0.1',
            MQaddress: '192.162.2.22',
            sever: '192.162.2.222'
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
        pageSize: 10,
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
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption( {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
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
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[320, 302, 301, 334, 390, 330, 320]
            },
            {
              name:'邮件营销',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[150, 212, 201, 154, 190, 330, 410]
            },
            {
              name:'搜索引擎',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      }
    }

  }
</script>

<style scoped>
</style>
