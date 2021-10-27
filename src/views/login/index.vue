<template>
  <div>
    <h1>login vue2</h1>
    <div>
      用户名:
      <input class="name-input" type="text" v-model="userInfo.username" />
      密码：
      <input class="pwd-input" type="password" v-model="userInfo.password" />
    </div>
    <div style="margin-top: 20px;">
      <button class="login-btn" style="margin-right: 20px;" @click="login">
        登录
      </button>
      <button class="back-btn" @click="back">返回</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const { username, password } = this.userInfo;
      if (username && password) {
        await this.$store.dispatch("userLogin", { username, password });
        this.back();
      } else {
        alert("请输入用户信息");
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
