<template>
  <div id="app">
    <button @click="handleGetPay">立即支付</button>
    <pswd-pop :showPswdPop.sync="pswdPopVisible"></pswd-pop>
  </div>
</template>

<script>
import pswdPop from "./components/PswdPop";
export default {
  name: "App",
  components: {
    pswdPop
  },
  data() {
    return {
      pswdPopVisible: false
    };
  },
  methods: {
    handleGetPay() {
      this.pswdPopVisible = true;
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
