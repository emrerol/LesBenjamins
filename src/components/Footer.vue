<template>
  <!-- Footer -->
  <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col md="3" lg="4" xl="3" class="mb-5">
          <h5>Les Benjamins represents a vision of the contemporary East</h5>
        </mdb-col>
        <mdb-col md="2" lg="2" xl="2" class="mb-5">
          <h6>Marka</h6>
          <p><a href="#" style="color: black">Hakkımızda</a></p>
          <p><a href="#!" style="color: black">İrtibat</a></p>
          <p><a href="#!" style="color: black">Mağazalarımız</a></p>
        </mdb-col>
        <mdb-col md="3" lg="2" xl="2" class="mb-5">
          <h6>Keşfet</h6>
          <p><a href="#!" style="color: black">Giyim Beden Tablosu</a></p>
          <p><a href="#!" style="color: black">Sneakers Beden Tablosu</a></p>
        </mdb-col>
        <mdb-col md="4" lg="3" xl="3" class="mb-5">
          <h6>Müşteri Hizmetleri</h6>
          <p><a href="#!" style="color: black">Aydınlatma Metni</a></p>
          <p><a href="#!" style="color: black">Çerez & Gizlilik</a></p>
          <p>
            <a href="#!" style="color: black">Kargo / Degisim Iade Sureci</a>
          </p>
          <p><a href="#!" style="color: black">Mesafeli Satis Sozlesmesi</a></p>
          <p><a href="#!" style="color: black">On Bilgilendirme Formu</a></p>
          <p><a href="#!" style="color: black">Cayma Formu</a></p>
          <p><a href="#!" style="color: black">Uyelik Sozleşmesi</a></p>
        </mdb-col>
        <div>
          <button id="newsletter">
            Newsletter<img id="rig-ar" src="../assets/right-arrows.png" />
          </button>
          <br />
          <div class="row" id="socials">
            <b-button
              href="https://www.instagram.com/lesbenjamins/?hl=en"
              target="_blank"
              ><img src="../assets/instagrampng.png"
            /></b-button>
            <b-button
              href="https://www.facebook.com/LesBenjamins/"
              target="_blank"
              ><img src="../assets/facebook.png"
            /></b-button>
            <b-button href="https://twitter.com/lesbenjamins" target="_blank"
              ><img src="../assets/twitter.png"
            /></b-button>
            <b-button
              href="https://www.youtube.com/user/LesBenjamins"
              target="_blank"
              ><img src="../assets/youtube.png"
            /></b-button>
          </div>
        </div>
      </mdb-row>
    </mdb-container>
    <div class="bottomleft">
      <img
        src="../assets/iyzico.png"
        height="25"
        width="400"
        style="padding-left: 50px"
      />
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>

<style scoped>
#newsletter {
  color: black;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
#newslletter:focus {
  color: grey !important;
}

#rig-ar {
  padding-left: 80px;
}
</style>
