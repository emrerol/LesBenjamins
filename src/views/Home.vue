<template>
  <div>
    <Header/>
    <DiscountShow/>
    <TopPic />
    <Grid />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import DiscountShow from "../components/DiscountShow.vue"
import TopPic from "../components/TopPic.vue";
import Grid from "../components/MainPageGrid.vue";
import Footer from "../components/Footer.vue"
export default {
  name: "home",
  components: {
    Header,
    DiscountShow,
    TopPic,
    Grid,
    Footer
  },
  data() {
    return {};
  },
};
</script>