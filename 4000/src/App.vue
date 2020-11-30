<template>
  <div id="app">
    <div>子应用B:</div>
    <div>来自主应用的token:</div>
    <br />
    token:{{ this.primaryToken || "未设置" }}
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["primaryToken"],
  data() {
    return {};
  },
};
</script>

<style>
#app {
  margin: 0;
  height: 100%;
  padding: 30px;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
