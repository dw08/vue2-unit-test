<template>
  <div>
    <h1>home vue2</h1>
    <hello-world :title.sync="helloTitle" v-if="!isLogin"></hello-world>
    <template v-else>
      <div data-test="userName" class="userinfo">你好，{{ userInfo.username }}</div>
      <div class="list">
        <li data-test="goodsItem" v-for="(item, index) in goodsList" :key="index">{{ item }}</li>
      </div>
      <div class="logout-btn"><button data-test="logoutBtn" @click="logout">退出登录</button></div>
    </template>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import { getGoodsList } from "@/api/home";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      goodsList: [],
      helloTitle: 'hello'
    };
  },
  computed: {
    isLogin() {
      return Boolean(this.$store.getters.getUserInfo);
    },
    userInfo() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
    },
    async getList() {
      this.goodsList = await getGoodsList([
        { name: "苹果", id: 1 },
        { name: "栗子", id: 2 },
      ]);
    },
  },
  mounted() {
    if (this.isLogin) {
      this.getList();
    }
  },
};
</script>
