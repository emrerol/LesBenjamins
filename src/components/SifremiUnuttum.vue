<template>
  <div>
    <h6>Şifrenizi Sıfırlayın</h6>  
    <label id="txtInfo">Şifrenizi sıfırlamak için size bir e-posta göndereceğiz</label> <br />  
    <input type="text" placeholder="Eposta" /> <br />
    <button id="btnGonder">Giriş Yap</button> <br>
    <a href="#" >İptal et?</a>
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
}

#btnGonder {
  background-color: #000000;
  width: 300px;
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

#txtSifirla{
    text-indent: 50px;
}

a{
    text-align: right;
}

</style>
