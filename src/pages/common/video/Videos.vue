<template>
  <div>
    <video width="320" height="240" controls>
      <!-- <source src="static/video/movie.mp4" type="video/mp4" /> -->
      <source :src="videoUrl" type="video/ogg" />
      您的浏览器不支持 HTML5 video 标签。
    </video>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data() {
    return {};
  },
  props: {
    videoUrl:{
      typeof:String,
      default:'static/video/movie.mp4'
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>