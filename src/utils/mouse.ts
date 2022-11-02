/*
 * @Author: jimouspeng
 * @Date: 2022-10-31 16:24:43
 * @Description: Vue3-组合式函数
 * @FilePath: \circle-tiger\src\utils\mouse.ts
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const mouseX = ref(0)
    const mouseY = ref(0)
    /** eslint-disable */
    console.log('====================================')
    console.log(mouseX, mouseY)
    console.log('====================================')
    /** eslint-enable */
    function update(event: any) {
        mouseX.value = event.pageX
        mouseY.value = event.pageY
    }
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    return { mouseX, mouseY }
}
