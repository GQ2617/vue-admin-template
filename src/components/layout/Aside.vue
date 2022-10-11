<template>
  <el-row class="tac">
    <el-col>
      <p class="mb-2">
        {{ !$store.state.isCollapse ? "后台管理系统模板" : "后台" }}
      </p>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="white"
        :collapse="$store.state.isCollapse"
        :collapse-transition="false"
      >
        <!-- 单项 -->
        <el-menu-item
          v-for="item in noChildren"
          :key="item.path"
          :index="item.path"
          @click="changeMenu(item.path)"
        >
          <component class="icons" :is="item.meta.icon"></component>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>

        <!-- 嵌套 -->
        <el-sub-menu
          v-for="item in hasChildren"
          :index="item.path"
          :key="item.path"
        >
          <template #title>
            <component class="icons" :is="item.meta.icon"></component>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :key="child.path"
            @click="changeMenu(child.path)"
          >
            <component class="icons" :is="child.meta.icon"></component>
            <span>{{ child.meta.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Aside",

  setup() {
    // 获取路由配置信息
    const router = useRouter();
    const routes = router.getRoutes();
    // 嵌套菜单
    const hasChildren = routes.filter(
      (item) => item.children.length != 0 && item.path != "/"
    );
    // 单项菜单
    const noChildren = routes.filter(
      (item) => item.children == 0 && item.meta.isShow == true
    );
    // 路由跳转
    const changeMenu = (path) => {
      router.push(path);
    };
    return { hasChildren, noChildren, changeMenu };
  },
};
</script>

<style lang="less" scoped>
.mb-2 {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: white;
  text-align: center;
}
.el-menu {
  border-right: 0;
}
.icons {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
</style>
