<template>
 <div id="app">
    <keep-alive exclude="Detail"><!--缓存，去除Detail-->
      <router-view/><!--显示的是当前路由地址对应的内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
