/*
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 08:18:18
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-18 14:59:10
 * @FilePath: \vite-project\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app =createApp(App)
import router from './router'
import axios from 'axios'
import pinia from './store'
// 将 axios 绑定到 Vue 原型上，方便全局使用
app.config.globalProperties.$axios=axios;
// 配置 axios 默认的根路径
app.use(router)
app.use(ElementPlus)
app.mount('#app')
axios.defaults.baseURL = 'http://localhost:9000';
