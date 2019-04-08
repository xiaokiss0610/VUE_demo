
<template>
  <div class="main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数值范围规则配置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-col :span="18" style="margin: 20px 12%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="margin: 0px auto;" class="demo-ruleForm">
        <el-form-item label="范围描述" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="数值范围" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择数值类型">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接收日期" required>
          <el-col :span="4">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" style="text-align: center" :span="0.5">-</el-col>
          <el-col :span="4">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="收集形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center;margin-top: 20px;">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入元数据描述', trigger: 'blur' },
            { min: 5, max: 50, message: '长度在 5 到 50个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择数据类型', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个数据规则', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写收集形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '保存成功',
              type: 'success'
            })
          } else {
            this.$message({
            message: '请填写信息',
            type: 'error'
          });
        return false;
      }
      });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
