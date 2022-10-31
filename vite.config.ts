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
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        }),
        vueJsx(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    resolve: {
        // extensions: ['.js', '.jsx', '.ts', '.tsx'], // 默认： ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
        alias: {
            '~components': resolve('./src/components'),
        },
    },
    /** build模式构建选项 */
    build: {
        outDir: '@circle-tiger',
        // lib: 库模式, 构建为库
        lib: {
            entry: path.resolve(__dirname, './src/components/index.ts'),
            name: 'circleTiger',
            fileName: 'circle-tiger',
        },
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
