<!--
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 08:18:18
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-18 09:29:28
 * @FilePath: \vite-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
</script>

<template>
  <!--<div>
    <ul>
      <li><router-link to="/dashboard">首页</router-link></li>
      <li><router-link to="/login">登录</router-link></li>
    </ul>
  </div>-->
  <div id="app">
    
  <router-view></router-view>

  </div>

</template>

<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
#app{
  height: 100%;
}
</style>
