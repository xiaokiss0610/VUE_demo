<template>
  <div class="main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-col :span="6">
        <el-input placeholder="请输入名称">
          <template slot="prepend">名称：</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="请输入所属单位">
          <template slot="prepend">所属单位：</template>
        </el-input>
      </el-col>
      <el-button type="primary" class="seachBtn">查询</el-button>
      <el-breadcrumb-item :to="{ path: '/welcome' }">
        <el-button type="info" plain>返回</el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-scrollbar class="scroll-area">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        v-loading.body="loading"
        @selection-change="selectionChange"
        tooltip-effect="dark"
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          width="35">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="服务名称">
        </el-table-column>
        <el-table-column
          prop="orgName"
          align="center"
          label="服务URL">
        </el-table-column>
        <el-table-column
          prop="FWaddress"
          align="center"
          label="服务类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="MQaddress"
          align="center"
          label="服务周期"
          width="300"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="启用状态"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <i class="el-icon-wtcms-fabu" style="color: green;"></i> 启用 &nbsp;&nbsp;
          </template>
        </el-table-column>
      </el-table>
      <!--列表底部工具条和分页符-->
      <el-pagination background
                     @size-change="pageSizeChange"
                     @current-change="currentPageChange"
                     :current-page="currentPage"
                     :page-sizes="[10, 50, 100, 200]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
      <!--列表底部工具条和分页符-->
    </el-scrollbar>
    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :visible.sync="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="单位名称" prop="orgName">
          <el-input v-model="editForm.orgName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="接收类型">
          <el-radio-group v-model="editForm.type">
            <el-radio class="radio" :label="1">接收</el-radio>
            <el-radio class="radio" :label="0">发送</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="IP地址">
          <el-input-number v-model="editForm.IP" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="端口">
          <el-input type="text" v-model="editForm.code"></el-input>
        </el-form-item>
        <el-form-item label="服务名称">
          <el-input type="textarea" v-model="editForm.fwName"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        },{
          name: 'XXX服务',
          orgName: 'http://11.198.22.245:8888',
          FWaddress: '交接接口服务',
          MQaddress: '2017-11.11 13:14:23  2018-12.12 13:14:23',
        }],
        //显示加载中样式
        loading: false,
        //搜索表单
        searchForm: {
          id: '',
          name: '',
          state: ''
        },
        //多选值
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
    methods: {
      //表格重新加载数据
      loadingData: function () {
        var _self = this;
        _self.loading = true;
        setTimeout(function () {
          console.info("加载数据成功");
          _self.loading = false;
        }, 300);
      },
      //表格编辑事件
      editClick: function (row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
      },
      //表格删除事件
      deleteClick: function (row) {
        var _self = this;
        this.$confirm('确认删除' + row.orgName + '吗?', '提示', {
          type: 'warning'
        }).then(function () {
          _self.$message({
            message: row.orgName + '删除成功',
            type: 'success'
          });
          _self.loadingData();//重新加载数据
        }).catch(function (e) {
          if (e != "cancel")
            console.log("出现错误：" + e);
        });
      },
      //新建事件
      addClick: function () {
        var _self = this;
        this.editFormVisible = true;
        //_self.loadingData();//重新加载数据
      },
      //表格查询事件
      searchClick: function () {
        alert("搜索");
        var _self = this;
        _self.loadingData();//重新加载数据
      },
      //表格勾选事件
      selectionChange: function (val) {
        for (var i = 0; i < val.length; i++) {
          var row = val[i];
        }
        this.multipleSelection = val;
        console.info(val);
      },
      //删除所选，批量删除
      removeSelection: function () {
        var _self = this;
        var multipleSelection = this.multipleSelection;
        if (multipleSelection.length < 1) {
          _self.$message({
            message: '请至少选中一条记录',
            type: 'error'
          });
          return;
        }
        var ids = "";
        for (var i = 0; i < multipleSelection.length; i++) {
          var row = multipleSelection[i];
          ids += row.name + ","
        }
        this.$confirm('确认删除' + ids + '吗?', '提示', {
          type: 'warning'
        }).then(function () {
          _self.$message({
            message: ids + '删除成功',
            type: 'success'
          });
          _self.loadingData();//重新加载数据
        }).catch(function (e) {
          if (e != "cancel")
            console.log("出现错误：" + e);
        });
      },
      //分页大小修改事件
      pageSizeChange: function (val) {
        console.log('每页 ' + val + ' 条');
        this.pageSize = val;
        var _self = this;
        _self.loadingData();//重新加载数据
      },
      //当前页修改事件
      currentPageChange: function (val) {
        this.currentPage = val;
        console.log('当前页: ' + val);
        var _self = this;
        _self.loadingData();//重新加载数据
      },
      //保存点击事件
      editSubmit: function () {
        console.info(this.editForm);
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb__item{
    position: absolute;
    right: 50px;
  }
</style>
