import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import welcome from '@/views/welcome.vue'
import noPrivilege from '@/views/401.vue'
import notfind from '@/views/404.vue'
import servererror from '@/views/500.vue'
import jhwlzlan from '@/components/InteractiveNtMg/jhwlzlan.vue' //交换网络总览
import jdgl from '@/components/InteractiveNtMg/jdgl.vue' //节点管理
import fwqgl from '@/components/InteractiveNtMg/fwqgl.vue' //服务器管理
import sjkgl from '@/components/InteractiveNtMg/sjkgl.vue' //数据库管理
import sjygl from '@/components/InteractiveNtMg/sjygl.vue' //数据源管理
import jkzx from '@/components/conditionMonitor/jkzx.vue' //监控中心
import jkfw from '@/components/conditionMonitor/jkfw.vue' //监控服务
import dljd from '@/components/conditionMonitor/dljd.vue' //代理节点
import tjcx from '@/components/conditionMonitor/tjcx.vue' //统计查询
import yxjk from '@/components/conditionMonitor/yxjk.vue' //运行监控
import jhwljk from '@/components/conditionMonitor/jhwljk.vue' //交换网络监控
import jhqktj from '@/components/exchange/jhqktj.vue' //交换情况统计
import sjzl from '@/components/quality/sjzl.vue' //数据质量规则配置
import szfw from '@/components/quality/szfw.vue' //数值范围规则配置
import zdfw from '@/components/quality/zdfw.vue' //字典范围规则配置
import sjgs from '@/components/quality/sjgs.vue' //数据格式验证规则配置
import sfyz from '@/components/quality/sfyz.vue' //身份验证规则配置
import zdxg from '@/components/quality/zdxg.vue' //字段相关性检验规则配置
import kzyz from '@/components/quality/kzyz.vue' //空值验证规则配置
import sjzljc from '@/components/dataDetection/sjzljc.vue' //数据质量检测
import wtsjfx from '@/components/problemData/wtsjfx.vue' //问题数据分析
import cfsjzli from '@/components/dataProcessing/cfsjzli.vue' //问题数据分析
import cwsjzliss from '@/components/dataProcessing/cwsjzliss.vue' //问题数据分析
import zlpgbg from '@/components/assessmentReport/zlpgbg.vue' //质量评估报告


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        auth: true // 需要校验是否已登录
      },
      children:[{
        path:'/welcome',
        name:'welcome',
        component:welcome,
        meta:{
          auth: true // 需要校验是否已登录
        }
      },
        {
          path: '/jhwlzlan',
          name: 'jhwlzlan',
          component: jhwlzlan,
          meta:{
            auth: true
          }
        },
        {
          path: '/jdgl',
          name: 'jdgl',
          component: jdgl,
          meta:{
            auth: true
          }
        },
        {
          path: '/fwqgl',
          name: 'fwqgl',
          component: fwqgl,
          meta:{
            auth: true
          }
        },
        {
          path: '/sjkgl',
          name: 'sjkgl',
          component: sjkgl,
          meta:{
            auth: true
          }
        },
        {
          path: '/sjygl',
          name: 'sjygl',
          component: sjygl,
          meta:{
            auth: true
          }
        },
        {
          path: '/jkzx',
          name: 'jkzx',
          component: jkzx,
          meta:{
            auth: true
          }
        },
        {
          path: '/jkfw',
          name: 'jkfw',
          component: jkfw,
          meta:{
            auth: true
          }
        },
        {
          path: '/dljd',
          name: 'dljd',
          component: dljd,
          meta:{
            auth: true
          }
        },
        {
          path: '/tjcx',
          name: 'tjcx',
          component: tjcx,
          meta:{
            auth: true
          }
        },
        {
          path: '/yxjk',
          name: 'yxjk',
          component: yxjk,
          meta:{
            auth: true
          }
        },
        {
          path: '/jhwljk',
          name: 'jhwljk',
          component: jhwljk,
          meta:{
            auth: true
          }
        },
        {
          path: '/jhqktj',
          name: 'jhqktj',
          component: jhqktj,
          meta:{
            auth: true
          }
        },
        {
          path: '/sjzl',
          name: 'sjzl',
          component: sjzl,
          meta:{
            auth: true
          }
        },
        {
          path: '/szfw',
          name: 'szfw',
          component: szfw,
          meta:{
            auth: true
          }
        },
        {
          path: '/zdfw',
          name: 'zdfw',
          component: zdfw,
          meta:{
            auth: true
          }
        },
        {
          path: '/sjgs',
          name: 'sjgs',
          component: sjgs,
          meta:{
            auth: true
          }
        },
        {
          path: '/sfyz',
          name: 'sfyz',
          component: sfyz,
          meta:{
            auth: true
          }
        },
        {
          path: '/zdxg',
          name: 'zdxg',
          component: zdxg,
          meta:{
            auth: true
          }
        },
        {
          path: '/kzyz',
          name: 'kzyz',
          component: kzyz,
          meta:{
            auth: true
          }
        },
        {
          path: '/sjzljc',
          name: 'sjzljc',
          component: sjzljc,
          meta:{
            auth: true
          }
        },
        {
          path: '/wtsjfx',
          name: 'wtsjfx',
          component: wtsjfx,
          meta:{
            auth: true
          }
        },
        {
          path: '/cfsjzli',
          name: 'cfsjzli',
          component: cfsjzli,
          meta:{
            auth: true
          }
        },
        {
          path: '/cwsjzliss',
          name: 'cwsjzliss',
          component: cwsjzliss,
          meta:{
            auth: true
          }
        },
        {
          path: '/zlpgbg',
          name: 'zlpgbg',
          component: zlpgbg,
          meta:{
            auth: true
          }
        }]
    },
    {
      path: '/500',
      name: '/500',
      component: servererror,
      meta:{
        auth: false
      }
    },
    {
      path: '/401',
      name: '/401',
      component: noPrivilege,
      meta:{
        auth: false
      }
    },
    {
      path: '*',
      name: '/404',
      component: notfind,
      meta:{
        auth: false
      }
    }
  ]
})
