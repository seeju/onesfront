<template>
    <div>
        <h3>Novo Cadastro</h3>
        <input type="text" placeholder="Nome" v-model="nomeField"><br>
        <input type="email" placeholder="E-mail" v-model="emailField"><br>
        <input type="password" placeholder="Senha" v-model="senhaField"><br>
        <input type="password" placeholder="Confirmar senha" v-model="senhaField2"><br>
        <button @click="cadastrarUsuario">Cadastrar</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nomeField:"",
            emailField:"",
            users: [],
        }
    },
    methods: {
        cadastrarUsuario: function(){
            this.users.push({nome: this.nomeField, email: this.emailField})
        }
    }
}
</script>

<style>

</style>