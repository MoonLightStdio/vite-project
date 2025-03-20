/*
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 08:18:18
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-18 09:01:48
 * @FilePath: \vite-project\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    css: {
        // CSS 预处理器
        preprocessorOptions: {
            // 定义全局 SCSS 变量
            scss: {
                javascriptEnabled: true,
                additionalData: "@use '/src/styles/variables.scss' as *;",
            },
        },
    },
})

