/*
 * @Author: jimouspeng
 * @Date: 2022-10-28 16:53:30
 * @Description: Eslint配置文件
 * @FilePath: \circle-tiger\.eslintrc.cjs
 */
const { rules } = require('./config/eslint-config.cjs')
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended', // 使用推荐的eslint
        'plugin:vue/vue3-essential', // 使用插件支持vue3
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        requireConfigFile: false,
        parser: '@typescript-eslint/parser',
    },
    plugins: [
        'vue', // 引入vue的插件 vue <==> eslint-plugin-vue
        'prettier', // 引入规范插件  prettier <==>  eslint-plugin-prettier
        '@typescript-eslint',
    ],
    rules,
}
