import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Page = () => import('@/views/Page')
const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')
// const RealTimeMonitor = name => () => import('@/views/RealTimeMonitor/' + name)
// const PersonManagement = name => () => import('@/views/PersonManagement/' + name)
// const FallWaring = name => () => import('@/views/FallWaring/' + name)
// const CarsManagement = name => () => import('@/views/CarsManagement/' + name)
// const DeviceManagement = name => () => import('@/views/DeviceManagement/' + name)
// const AccountManagement = name => () => import('@/views/AccountManagement/' + name)
const convenience = name => () => import('@/views/convenience/' + name)
const communitybuilding = name => () => import('@/views/communitybuilding/' + name)
const Communityhu = name => () => import('@/views/Communityhu/' + name)
const situationoverview = name => () => import('@/views/situationoverview/' + name)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/communitybuilding',
      children: [
        // 实时监控
        // {
        //   path: '/realTimeMonitor',
        //   name: 'RealTimeMonitor',
        //   component: RealTimeMonitor('RealTimeLocation')
        // },
        // {
        //   path: '/realTimemonitor/MonitoringFence',
        //   name: 'MonitoringFence',
        //   component: RealTimeMonitor('MonitoringFence')
        // },
        // 人员管理
        // {
        //   path: '/personManagement',
        //   name: 'PersonManagement',
        //   component: PersonManagement('PersonManagement')
        // },
        // 设备管理
        // {
        //   path: '/deviceManagement',
        //   name: 'DeviceManagement',
        //   component: DeviceManagement('DeviceManagement')
        // },
        // // 车辆管理
        // {
        //   path: '/carsManagement',
        //   name: 'CarsManagement',
        //   component: CarsManagement('CarsManagement')
        // },
        // // 摔倒预警
        // {
        //   path: '/fallWaring',
        //   name: 'FallWaring',
        //   component: FallWaring('FallWaring')
        // },
        // // 账号管理
        // {
        //   path: '/accountManagement',
        //   name: 'AccountManagement',
        //   component: AccountManagement('AccountManagement')
        // },
        {
          path: '/communitybuilding',
          name: 'communitybuilding',
          component: communitybuilding('communitybuilding')
        },
        {
          path: '/convenience',
          name: 'convenience',
          component: convenience('convenience')
        },
        {
          path: '/Communityhu',
          name: 'Communityhu',
          component: Communityhu('Communityhu')
        },
        {
          path: '/situationoverview',
          name: 'situationoverview',
          component: situationoverview('situationoverview')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
