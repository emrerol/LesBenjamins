<template>
  <b-sidebar id="sidebar-right" title="Sepetiniz" right shadow width="420px">
          <div class="px-3 py-2">
            <br>
            <br>
            <p>Sepetiniz boş</p> 
            <div>
              <button class="button tglButtons">Shop Men</button>
              <br />
              <button class="button tglButtons">Shop Women</button>
            </div>
          </div>
        </b-sidebar>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.tglButtons {
  background-color: #000000;
  width: 360px;
  height: 55px;
  color: white;
  margin: 16px 0px 0px;
}

.tglButtons:hover{
background-color: white;
color: black;
}
</style>