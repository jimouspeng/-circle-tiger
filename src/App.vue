<script setup lang="tsx">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '~components/HelloWorld.vue'
import { useMouse } from './utils/mouse.ts'
const { mouseX, mouseY } = useMouse()
</script>

<template>
    <HelloWorld msg="Vite + Vue" />
    Mouse position is at: {{ mouseX }}, {{ mouseY }}
</template>

<style scoped lang="scss">
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
