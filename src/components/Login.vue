<template>
    <div>
        <label >Log in with email  <b-icon icon="arrow-down" aria-hidden="true" font-scale="0.6" variant="dark"></b-icon> </label> <br>
        <label >E-Posta*</label> <br>
        <input type="text" > <br>
        <label >Parola*</label> <br>
        <input type="text" > <br>
        <button id="girisBtn">Giriş Yap</button> <br>
        <a href="#" text-color="black">Şifrenizi mi unuttunuz?</a>       
        
    </div>
</template>

<style >
input:focus, textarea:focus, select:focus{
        outline: none;
    }

    input[type=text] {
  border: none;
  border-bottom: 1px solid black;
  padding: 10px;
}

#girisBtn {
    background-color: #000000;    
    width: 200px;
    color: white;
    margin: 16px 0px 0px;   
}

a:link, a:visited {
  color: black;
  /* text-decoration: underline; */
  cursor: auto;
}

a:link:active, a:visited:active {
  color: black;
}
</style>