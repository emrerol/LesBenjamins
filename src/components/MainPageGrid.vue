<template>

<div class="parent">
  <div class="card"><img src="../assets/gridAssets/1.png"></div>
  <div class="card"><img src="../assets/gridAssets/2.png"></div>
  <div class="card"><img src="../assets/gridAssets/3.png"></div>
  <div class="card"><img src="../assets/gridAssets/22.png"></div>
  <div class="card"><img src="../assets/gridAssets/23.png"></div>
  <div class="card"><img src="../assets/gridAssets/4.png"></div>
  <div class="card"><img src="../assets/gridAssets/5.png"></div>
  <div class="card"><img src="../assets/gridAssets/6.png"></div>
  <div class="card"><img src="../assets/gridAssets/7.png"></div>
  <div class="card"><img src="../assets/gridAssets/8.png"></div>
  <div class="card"><img src="../assets/gridAssets/9.png"></div>
  <div class="card"><img src="../assets/gridAssets/24.png"></div>
  <div class="card"><img src="../assets/gridAssets/25.png"></div>
  <div class="card"><img src="../assets/gridAssets/10.png"></div>
  <div class="card"><img src="../assets/gridAssets/11.png"></div>
  <div class="card"><img src="../assets/gridAssets/12.png"></div>
  <div class="card"><img src="../assets/gridAssets/13.png"></div>
  <div class="card"><img src="../assets/gridAssets/14.png"></div>
  <div class="card"><img src="../assets/gridAssets/15.png"></div>
  <div class="card"><img src="../assets/gridAssets/27.png"></div>
  <div class="card"><img src="../assets/gridAssets/28.png"></div>
  <div class="card"><img src="../assets/gridAssets/16.png"></div>
  <div class="card"><img src="../assets/gridAssets/17.png"></div>
  <div class="card"><img src="../assets/gridAssets/18.png"></div>
  <div class="card"><img src="../assets/gridAssets/19.png"></div>
  <div class="card"><img src="../assets/gridAssets/20.png"></div>
  <div class="card"><img src="../assets/gridAssets/21.png"></div>
  <div class="card"><img src="../assets/gridAssets/29.png"></div>
  
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
}

.child {
  flex: 1 0 21%; /* explanation below */
  margin: 2px;
  height: 440px;
  background-color: whitesmoke;
}

</style>