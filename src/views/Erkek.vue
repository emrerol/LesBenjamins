<template>
<div>
  <Header/>
  <Discount/>
  <ErkekDetay/>
  <Footer></Footer>
</div>
  
</template>

<style scoped>

</style>

<script>

import Header from "../components/Header.vue"
import Discount from "../components/DiscountShow.vue"
import Footer from "../components/Footer.vue"
import ErkekDetay from "../components/ErkekDetay.vue"


export default {
  name:"erkek",
  components: {  
   Header,
   Discount,
   ErkekDetay,
   Footer
  },
  data() {
    return{};
  }
};
</script>