<template>
  <div id="maindiv">
    <Header id="header"></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<style>
#maindiv {
  font-family: Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji;
}
#header {
  z-index: 1;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  data: () => ({}),
  name: "app",
  components: {
    Footer,
    Header,
  },
};
</script>
