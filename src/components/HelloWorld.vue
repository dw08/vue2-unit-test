<template>
  <div class="hello">
    <h1 data-test="title" @click="changeTitle">{{ title }}</h1>
    <div data-test="loginBtn" class="login-btn" @click="toLogin">去登录</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeTitle () {
      this.$emit("update:title", '改变标题');
    },
    toLogin () {
      this.$router.push("/login");
    }
  }
}
</script>
