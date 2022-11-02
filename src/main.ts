/*
 * @Author: jimouspeng
 * @Date: 2022-10-28 16:38:21
 * @Description: Vue入口文件
 * @FilePath: \circle-tiger\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CircleTiger from '../publish-dist/index.umd.cjs'
import '../publish-dist/style.css'

/* eslint-disable */
console.log('====================================')
console.log(import.meta.env.VITE_NAME, CircleTiger())
console.log('====================================')
/* eslint-enable  */

const Application = createApp(App)

// Application.use(HelloWorld)

Application.mount('#app')
