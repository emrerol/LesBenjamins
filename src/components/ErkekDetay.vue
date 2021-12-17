<template>
  <div class="parent">
    <div class="card" onclick="location.href='#';" style="cursor: pointer">
      <img src="../assets/erkAssets/a.jpg" />
    </div>
    <div class="card" onclick="location.href='#';" style="cursor: pointer">
      <img src="../assets/erkAssets/b.jpg" />
    </div>
    <div class="card" onclick="location.href='#';" style="cursor: pointer">
      <img src="../assets/erkAssets/c.jpg" />
    </div>
    <div class="card" onclick="location.href='#';" style="cursor: pointer">
      <img src="../assets/erkAssets/d.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
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

