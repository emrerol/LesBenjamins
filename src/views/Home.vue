<template>
  <div>
    <TopPic />
    <Grid />
  </div>
</template>

<script>
import TopPic from "../components/TopPic.vue";
import Grid from "../components/MainPageGrid.vue";
export default {
  name: "home",
  components: {
    TopPic,
    Grid,
  },
  data() {
    return {};
  },
};
</script>