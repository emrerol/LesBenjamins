<template>
<div>
 <form>      
    <label>Log in with email <b-icon icon="arrow-down" aria-hidden="true" font-scale="0.6" variant="dark"></b-icon> </label> <br />
    <label id="lbl1" style="text-align: left;">Ad* </label> <br />
    <input type="text" /> <br />
    <label id="lbl1" >Soyad*</label> <br />
    <input type="text" /> <br />
    <label>E-posta*</label> <br />
    <input type="text" /> <br />
    <label>Parola*</label> <br />
    <input type="text" /> <br /> 
    <input type="checkbox" >  <label >KVKK Metni ni okudum kabul ediyorum</label> <br>
    <input type="checkbox" >  <label >Eposta ile iletişim izni veriyorum</label> <br>
    <input type="checkbox" >  <label >SMS ile iletişim izni veriyorum</label> <br>
    <input type="checkbox" >  <label >Telefon ile arama izni veriyorum</label> <br>
    <button id="girisBtn">Oluştur</button> <br />

  </form>
</div>
 
</template>

<style>
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

input[type="text"] {
  border: none;
  border-bottom: 2px solid black;
  padding: 10px;
  width: 450px;
}

#girisBtn {
  background-color: #000000;
  width: 450px;
  height: 50px;
  color: white;
  margin: 16px 0px 0px;
}

a:link,
a:visited {
  color: black;
  /* text-decoration: underline; */
  cursor: auto;
}

a:link:active,
a:visited:active {
  color: black;
}

div {
    display: block;
    margin:0px 0px 0px 300px;
    
}






</style>
