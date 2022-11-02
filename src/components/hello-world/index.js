/*
 * @Author: jimouspeng
 * @Date: 2022-11-01 15:50:29
 * @Description:
 * @FilePath: \circle-tiger\src\components\hello-world\index.js
 */
import HelloWorld from './index.vue'

HelloWorld.install = (Vue) => {
    Vue.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
