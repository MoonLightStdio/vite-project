<!--
 * @Author: MoonStdio juxiupan@163.com
 * @Date: 2025-03-18 09:04:51
 * @LastEditors: MoonStdio juxiupan@163.com
 * @LastEditTime: 2025-03-28 17:35:50
 * @FilePath: \vite-project\src\views\login\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container class="home-container">
    <el-header>
      <img src="../assets/vue.svg" />
      <h3>科创信息管理平台</h3>

      <div>
        <el-button-group>
          <el-button type="primary">{{ identity }}</el-button>
          <el-button type="primary">我的</el-button>
          <el-button type="primary">退出</el-button>
        </el-button-group>
      </div>
    </el-header>

    <el-container>
      <!--边导航-->
      <el-aside width="200px">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
          <el-menu-item index="1" @click="aside_func('Aside1')">
            <template #title>
              <el-icon></el-icon>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" @click="aside_func('Aside2')">
            <el-icon><icon-menu /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <document />
              </el-icon>
              <span>科创项目管理</span>
            </template>
            <el-menu-item index="3-1">论文</el-menu-item>
            <el-menu-item index="3-2">竞赛</el-menu-item>
            <el-menu-item index="3-3">科创项目</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="4" @click="aside_func('FormText')">
            <el-icon>
              <setting />
            </el-icon>
            <span>科创项目信息提交</span>

          </el-menu-item>
          <el-menu-item index="5" @click="aside_func('UnderView')">
            <el-icon>
              <setting />
            </el-icon>
            <span>待审核</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon>
              <setting />
            </el-icon>
            <span>论坛交流</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!--<el-main>Main</el-main>-->
      <!--<aside1></aside1>-->
      <component :is="current_main"></component>
    </el-container>
  </el-container>
</template>


<script>
import Aside1 from "../dashboard/aside1.vue";
import Aside2 from "../dashboard/aside2.vue";
//import Form from "../dashboard/form.vue";
import UnderView from "../dashboard/underView.vue";
import FormText from "../dashboard/formText.vue";

export default {
  // 导入子组件
  data() {
    return {
      current_main: "Aside1",
      identity: "学生"
    }
  },
  methods: {
    aside_func(id) {
      this.current_main = id
    }
  },

  components: {
    Aside1, // 局部注册子组件
    Aside2,
    //Form,
    UnderView,
    FormText
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
}

.el-header {
  display: flex;
  justify-content: space-between;

  div {
    .el-button-group {
      padding-top: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>