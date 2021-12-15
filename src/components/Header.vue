<template>
  <!-- <div class="container"> -->
  <div class="tutorial">
    <ul class="row" style="margin-right: 10px">
      <div class="col-sm-4">
        <li class="dropdown">
          <button class="dropbtn">İndirim</button>
          <div class="dropdown-content">
            <a href="#">Hepsi</a>
            <a href="#">Şapka & Bere</a>
            <a href="#">Essentials 3.0</a>
            <a href="#">Forgotten Pacenotes</a>
            <a href="#">Erkek T-Shirt</a>
            <a href="#">Kadın T-Shirt</a>
            <a href="#">Erkek Hoodie & Sweatshirt</a>
            <a href="#">Kadın Hoodie & Sweatshirt</a>
            <a href="#">Erkek Mont & Ceket</a>
            <a href="#">Kadın Mont & Ceket</a>
            <a href="#">Ayakkabı</a>
            <a href="#">Erkek Pantolon & Eşofman Altı</a>
            <a href="#">Kadın Pantolon & Eşofman Altı</a>
            <a href="#">Swimwear</a>
          </div>
        </li>
        <li>
          <b-link id="erblink" :to="{ path: 'erkek' }">Erkek</b-link>
          <i class="fa fa-angle-down"></i>
          <ul>
            <div class="row">
              <h6 class="col-sm-4">Giyim</h6>
              <h6 class="col-sm-4">Aksesuar</h6>
              <h6 class="col-sm-4">Ayakkabı</h6>
            </div>
            <div class="row">
              <li class="col-sm-4">T-Shirt</li>
              <li class="col-sm-4">Şapka</li>
              <li class="col-sm-4">Les Benjamins</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Oversize T-Shirt</li>
              <li class="col-sm-4">Eldiven & Bere</li>

              <li class="col-sm-4">adidas</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Sweatshirt</li>
              <li class="col-sm-4">Atkı</li>
              <li class="col-sm-4">Asics</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Hoodie</li>
              <li class="col-sm-4">Terlik</li>
              <li class="col-sm-4">Nike</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Polo T-Shirt</li>
              <li class="col-sm-4">Bağcık</li>
              <li class="col-sm-4">Puma</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Pantolon</li>
              <li class="col-sm-4">Yastık</li>
              <li class="col-sm-4">Reebook</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Eşofman Altı</li>
              <li class="col-sm-4">Havlu</li>
              <li class="col-sm-4">Salomon</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Dış Giyim</li>
              <li class="col-sm-4">Saat</li>
              <li class="col-sm-4">Vans</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Gömlek</li>
              <li class="col-sm-4">Kitap ve Dergi</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Denim</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Şort</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Mayo</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Activewear</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Çorap</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Boxer</li>
            </div>
          </ul>
        </li>
        <li>
          <b-link id="kadınblink" :to="{ path: 'kadın' }">Kadın</b-link>
          <i class="fa fa-angle-down"></i>
          <ul>
            <div class="row">
              <h6 class="col-sm-4">Giyim</h6>
              <h6 class="col-sm-4">Aksesuar</h6>
              <h6 class="col-sm-4">Ayakkabı</h6>
            </div>
            <div class="row">
              <li class="col-sm-4">T-Shirt</li>
              <li class="col-sm-4">Çanta</li>
              <li class="col-sm-4">Les Benjamins</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Sweatshirt</li>
              <li class="col-sm-4">Şapka</li>

              <li class="col-sm-4">adidas</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Hoodie</li>
              <li class="col-sm-4">Eldiven & Bere</li>
              <li class="col-sm-4">Asics</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Bluz</li>
              <li class="col-sm-4">Atkı</li>
              <li class="col-sm-4">Nike</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Elbise</li>
              <li class="col-sm-4">Terlik</li>
              <li class="col-sm-4">Puma</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Gömlek ve Bluz</li>
              <li class="col-sm-4">Bağcık</li>
              <li class="col-sm-4">Reebook</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Pantolon</li>
              <li class="col-sm-4">Yastık</li>
              <li class="col-sm-4">Salomon</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Eşofman Altı</li>
              <li class="col-sm-4">Havlu</li>
              <li class="col-sm-4">Vans</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Dış Giyim</li>
              <li class="col-sm-4">Saat</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Etek</li>
              <li class="col-sm-4">Kitap ve Dergi</li>
            </div>

            <div class="row">
              <li class="col-sm-4">Şort</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Dış Giyim</li>
            </div>
            <div class="row">
              <li class="col-sm-4">Mayo</li>
            </div>

            <div class="row">
              <li class="col-sm-4">Çorap</li>
            </div>
            <div class="row">
              <li class="col-sm-4">İç Çamaşırı</li>
            </div>
          </ul>
        </li>
        <li><b-link id="cocukblink" :to="{ path: 'cocuk' }">Çocuk</b-link></li>
        <li class="dropdown">
          <button class="dropbtn">
            <li>
              <b-link id="koleksiyonblink" :to="{ path: 'koleksiyon' }"
                >Koleksiyonlar</b-link
              >
            </li>
          </button>
          <div class="dropdown-content">
            <a href="#">Halloween</a>
            <a href="#">Forgotten Pacenotes</a>
            <a href="#">Essentials 3.0</a>
            <a href="#0">Core</a>
          </div>
        </li>
      </div>

      <h2 id="lesbenId" class="col-sm-4">
        <a href="" style="color: black; text-decoration: none">LES BENJAMINS</a>
      </h2>
      <div class="col-sm-4" style="padding: 0px">
        <li class="dropdown">
          <button class="dropbtn">Markalar</button>
          <div class="dropdown-content">
            <a href="#">JW Anderson</a>
            <a href="#">Martine Rose</a>
            <a href="#">Undercover</a>
            <a href="#">The Nort Face</a>
            <a href="#">Vans X NAPAPIJRI</a>
            <a href="#">Casio</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">Ayakkabı</button>
          <div class="dropdown-content">
            <a href>RAFFLE - Yeezy Foam Runner</a>
            <a href>İndirim</a>
            <a href>Les Benjamins</a>
            <a href>Nike</a>
            <a href>Adidas</a>
            <a href>Asics</a>
            <a href>Puma</a>
            <a href>Reebok</a>
            <a href>Salomon</a>
            <a href>Vans</a>
            <a href>Shoelaces</a>
          </div>
        </li>
        <li class="dropdown">
          <button class="dropbtn">
            <img src="../assets/turkiye-bayrak-ikon.png" alt width="30%" /> TR
          </button>
          <div class="dropdown-content">
            <a href="#" id="bayraklarID">
              <img src="../assets/ingiltere-bayrak-ikon.png" alt width="12%" />
              EN
            </a>
          </div>
        </li>
        <b-button>
          <b-icon icon="search" aria-hidden="true" font-scale="1"></b-icon>
        </b-button>
        <b-button>
          <b-icon icon="person" aria-hidden="true" font-scale="2"></b-icon>
        </b-button>
        <b-button class="btn" v-b-toggle.sidebar-right background-color="white">
          <b-icon icon="bag" aria-hidden="true"></b-icon>
        </b-button>
        <b-button v-on="click">
          <sepetiniz />
        </b-button>
      </div>
    </ul>
    <div class="slider"></div>
    <div class="information">
      <p></p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Sepetiniz from "./Sepetiniz.vue";
export default {
  components: { Sepetiniz },
};
</script>

<style>
li div a:hover {
  text-decoration: none;
  color: gray;
}

li button:hover {
  color: gray;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
  background-color: white;
}

.tutorial {
  width: 100%;

  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); */
  background-color: white;
}
/* .tutorial .slider {
  width: 100%;
  height: 300px;
  background-color: #f03861;
} */
.tutorial .information {
  width: 100%;
  padding: 0px;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
}
.tutorial .information h1 {
  color: #333;
  font-size: 1.5rem;
  padding: 0px;
  border-left: 3px solid #f03861;
}
.tutorial .information h3 {
  color: #e0e0e0;
  font-size: 1rem;
  font-weight: 300;
  padding: 0px 10px;
  border-left: 3px solid #f03861;
}
.tutorial .information p {
  padding: 0px 0px;
}
.tutorial ul {
  font-size: 0;
  list-style-type: none;
}
.tutorial ul li {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  display: inline-block;
  padding: 10px;
  position: relative;
}
.tutorial ul li ul {
  display: none;
}
.tutorial ul li div a {
  margin-top: -10%;
  width: 150%;
}

.tutorial ul li:hover {
  cursor: pointer;
  background-color: white;
}
.tutorial ul li:hover ul {
  display: block;
  width: 100%;
  left: 0;
  position: fixed;
  padding-top: 2%;
}
.tutorial ul li:hover ul li {
  display: block;
  background-color: white;
}
.tutorial ul li:hover ul div {
  padding-left: 10%;
  margin-top: -0.5%;
  padding-top: 0%;
}

.tutorial ul li:hover ul li span {
  float: right;
  color: #f9f9f9;
  background-color: white;
  padding: 2px 5px;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 3px;
}
.tutorial ul li:hover ul li:hover {
  background-color: white;
}
.tutorial ul li:hover ul li:hover span {
  background-color: white;
}

.dropbtn {
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
  background-color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  z-index: 1;
}
#erblink {
  color: black;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: white;
}
.btn {
  background-color: white !important;
  color: black !important;
  border: none !important;
}
#lesbenId {
  padding-top: 1.5%;
  padding-left: 8%;
}
#kadınblink {
  color: black;
}
#cocukblink {
  color: black;
}
#koleksiyonblink {
  color: black;
}

#bayraklarID {
  margin-left: 10%;
}
#iconId {
  margin-left: 2%;
  width: 25px;
}
</style>



