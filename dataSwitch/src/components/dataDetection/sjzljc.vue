<template>
  <div class="main" style="height: 100%;">
    <el-scrollbar class="scroll-area">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据质量检测</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="16" :push="1">
        <el-col :span="9" >
          <el-form>
            <h2>数据质量规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="9" :push="1">
          <el-form>
            <h2>数值范围规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="9" >
          <el-form>
            <h2>字典范围规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>

        </el-col>
        <el-col :span="9" :push="1">
          <el-form>
            <h2>数据格式验证规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>

        </el-col>
        <el-col :span="9" >
          <el-form>
            <h2>身份验证规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>

        </el-col>
        <el-col :span="9" :push="1">
          <el-form>
            <h2>字段相关性检验规则配置</h2>
            <p>
              数据质量管理，是指对数据从计划、获取、存储、共享、维护、应用、消亡生命周期的每个阶段里可能引发的各类数据质量问题，进行识别、度量、监控、预警等一系列管理活动，并通过改善和提高组织的管理水平使得数据质量获得进一步提高
            </p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>

        </el-col>
        <el-col :span="9" >
          <el-form>
            <h2>空值验证规则配置</h2>
            <p>在解释这四个验证规则前，需要明晰三个概念——空值（empty）、输入数据（input data）和验证字段（filed under validation）</p>
            <el-form-item style="text-align: center;margin-top: 25px;">
              <el-button type="primary" @click="submitForm('ruleForm')">检测</el-button>
            </el-form-item>
          </el-form>

        </el-col>
      </el-col>
      <el-col :span="7" style="background: #fff; min-height: 400px;padding: 15px">
        <div class="listH">数据质量规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">数值范围规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">字典范围规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">数据格式验证规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">身份验证规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">字段相关性检验规则配置： <span style="color: green;">正常</span></div>
        <div class="listH">空值验证规则配置： <span style="color: green;">正常</span></div>
      </el-col>
    </el-row>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: "",
    methods: {
      submitForm(formName) {
        this.$message({
          message: '检测成功',
          type: 'success'
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-row {
  }

  .el-form {
    border: 1px solid #008df6;
    border-top: 5px solid #008df6;
    background: #fff;
    height: 270px;
  }
  h2{
    font-size: 16px;
    font-weight: 400;
    margin: 0px auto;
    color: #999;
    width: 80%;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #008df6;
  }
  p{
    color: #999;
    padding: 10px;
  }
  .listH{
    height: 50px;
    font-size: 20px;
    color: #6f7180;
  }
</style>
