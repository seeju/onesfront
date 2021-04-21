<template>
  <div>
    <h3> One on One's </h3>
    <img src="../assets/login.png" alt="login">
    <br><br><br>
    <form action="/login" method="post">
      <label for="login">Usuário:</label>
      <input type="text" id="user" name="user"><br>
      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha"><br>
      <button type="submit">Entrar</button>
    </form>
    <button type="submit" formaction="/novocadastro">Criar cadastro</button>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
img{
  filter: invert(1);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h3{
  text-align: center;
  font-family: 'Poppins';
  color: white;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiAyp8kv8JHgFVrJJLmE0tCMPc.ttf);
}

form{
  text-align: center;
  text-align: center;
  font-family: 'Poppins';
  color: white;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiAyp8kv8JHgFVrJJLmE0tCMPc.ttf);
}

label {
  text-align: center;
  display: inline-block;
  width: 100%;
}


</style>
