<template>
  <div class="center-right">
    <div class="adimg-top">
      <img :src="urls[0].url" class="img" alt="picture1" />
    </div>
    <div class="adimg-bottom">
      <img :src="urls[1].url" class="img" alt="picture2" />
    </div>
  </div>
</template>

<script>
import { getAdImages } from "apis/list";

export default {
  name: "AdPicture",
  data() {
    return {
      number:2,//默认接受2张（现在是写死两张，如果有更改在props接受number，然后设置默认）
      urls: [],
    };
  },
  props: {},
  methods: {
    init() {
      this.getIms();
    },
    getIms() {
      let data = { number: this.number };
      getAdImages(data)
        .then((res) => {
          // console.log("res ?", res);
          this.urls = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeCreate() {
    // console.log("beforeCreated");
  },
  created() {
    // console.log("created");
    this.init();
    // console.log("this. url ", this.urls[0]);
  },
  activated() {},
  mounted() {
    // console.log("mounted");
    // console.log("this. url ", this.urls[0]);
  },
};
</script>

<style scoped>
.center-right {
  float: right;
  margin-top: 2%;
  height: 600px;
  width: 400px;
}
.adimg-top {
  float: top;
}
.adimg-bottom {
  margin-top: 38%;
}
.img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
</style>
