/*
 * @Author: jimouspeng
 * @Date: 2022-10-28 16:38:21
 * @Description: vite配置文件
 * @FilePath: \circle-tiger\vite.config.ts
 */
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({}),
        eslintPlugin({
            // include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
            include: ['src/componets/*.ts', 'src/componets/*.vue'], // 库打包
        }),
        vueJsx(),
        // legacy({
        //     targets: ['chrome 52'],
        // }),
    ],
    resolve: {
        // extensions: ['.js', '.jsx', '.ts', '.tsx'], // 默认： ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
        alias: {
            '~components': resolve('./src/components'),
        },
    },
    /** build模式构建选项 */
    build: {
        target: 'modules', // 默认： 'modules'
        outDir: './publish-dist',
        // lib: 库模式, 构建组件库
        lib: {
            entry: path.resolve(__dirname, './src/components/index'), // * , 入口文件
            name: 'circleTiger',
            formats: ['umd'], // 默认 formats 是 ['es', 'umd']
            fileName: 'index', // 输出的包文件名,默认是 package.json 的 name 选项
        },
        cssCodeSplit: false, // 样式分离, 如果指定了 build.lib，build.cssCodeSplit 会默认为 false
        rollupOptions: {
            external: ['vue'],
            output: {
                // UMD模式下为外部依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
