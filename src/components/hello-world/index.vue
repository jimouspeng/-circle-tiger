<!--
 * @Author: jimouspeng
 * @Date: 2022-10-28 16:38:21
 * @Description:
 * @FilePath: \circle-tiger\src\components\hello-world\index.vue
-->
<script setup lang="tsx">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<script lang="tsx">
export default {
    name: 'HelloWorld',
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
    <span>Vue3组件展示</span>
</template>

<style scoped lang="scss">
.read-the-docs {
    color: #888;
}
</style>
