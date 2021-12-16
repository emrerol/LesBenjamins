<template>
  <div id="app">
    <Header/>
    <Discount/>
    <TopPic/>
    <MainGrid/>
    <Footer/>
  </div>
</template>

<style>
 /* #maindiv {
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
}  */
</style> 

<script>
 import Header from "./components/Header";
 import Footer from "./components/Footer";
 import MainGrid from "./components/MainPageGrid.vue"
 import Discount from "./components/DiscountShow.vue"
 import TopPic from "./components/TopPic.vue"


export default {
  data: () => ({}),
  name: "app",
  components: {
   Header,
   Discount,
   TopPic,
   MainGrid,
   Footer

  },
};
</script>
