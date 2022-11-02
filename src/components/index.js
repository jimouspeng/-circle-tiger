/*
 * @Author: jimouspeng
 * @Date: 2022-10-31 17:39:32
 * @Description: 组件库编译入口文件
 * @FilePath: \circle-tiger\src\components\index.js
 */
import HelloWorld from './hello-world/index.js'

console.log('====================================')
console.log(HelloWorld.name, 'hahahah')
console.log('====================================')

const COMPONENT_LIST = [HelloWorld]

/** install方法用于组件库的全局引用，各个组件内部的单独增加了.install方法 */
const install = (Vue) => {
    COMPONENT_LIST.forEach((component) => {
        Vue.component(component.name, component)
    })
}

export default {
    install,
    HelloWorld,
}
