/*
 * @Author: jimouspeng
 * @Date: 2022-10-28 16:38:21
 * @Description:
 * @FilePath: \circle-tiger\src\vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
