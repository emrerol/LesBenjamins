<template>
    <div>
        <Header/>
        <Discount/>
        <!-- <MainPageGrid/> -->
        <Footer/>
    </div>
</template>

<style scoped>

</style>

<script>
import Header from "../components/Header.vue"
import DiscountShow from "../components/DiscountShow.vue"
// import MainPageGrid from "../components/MainPageGrid.vue"
import Footer from "../components/Footer.vue"


export default {
    name: 'markalar',
    components : {
        Header,
        DiscountShow,
        // MainPageGrid,
        Footer
    }
}
</script>