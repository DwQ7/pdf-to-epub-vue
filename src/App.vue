<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "./assets/css/base.css";
</style>
