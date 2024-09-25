<template>
  <div class="fullscreen-wrapper">
    <div class="login-container">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="login-box p-4">
              <h2 class="text-center">BitCenter</h2>
              <br>

              <form @submit.prevent="handleLogin">
                <div class="form-group">
                  <label for="user_name">Nome do Usuário</label>
                  <input
                    v-model="username"
                    class="form-control"
                    type="text"
                    id="user_name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="password">Senha</label>
                  <input
                    v-model="password"
                    class="form-control"
                    type="password"
                    id="password"
                    required
                  />
                </div>
                <br>

                <div class="d-flex flex-column">
                  <button type="button" class="btn btn-secondary mb-2" @click="goToRegister">
                    Cadastrar
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>

              <p class="mt-3 text-center">
                <a href="#">Esqueceu a senha?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
      this.username = '';
      this.password = '';
    },
    goToRegister() {
      this.$router.push('/cadastro'); 
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}

html, body {
  height: 100%; 
  width: 100%; 
  overflow: hidden; 
}

.title-color{
  color:white;
}

.fullscreen-wrapper {
  position: fixed; 
  top: 0;
  left: 0; 
  width: 100%; 
  height: 100%; 
  background: linear-gradient(145deg, #9216e4, #110741);
}

.login-container {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100%; 
}

.login-box {
  background: rgba(145, 22, 228, 0.5); 
  border-radius: 10px; 
  color: white; 
  padding: 30px; 
  width: 100%; 
  max-width: 700px; 
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
}

.login-box::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: rgba(255, 255, 255, 0.1); 
  border-radius: 15px; 
  z-index: -1; 
}

h2, label, p {
  color: white; 
}

.btn {
  color: white; 
}

.btn-secondary ,.btn-primary{
  background-color: #420892; 
  border-color: #7c1bc2;
}

.btn-primary:hover {
  background-color: #010741; 
  border-color: #7c1bc2; 
}

.btn-secondary:hover {
  background-color: #010741;
  border-color: #7c1bc2;
}

a {
  color: white; 
}

input[type="password"],
input[type="text"] {
  width: 100%; 
  max-width: 100%; 
  padding: 10px; 
  border: none; 
  border-radius: 5px; 
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}
input[type="password"]:focus,
input[type="text"]:focus {
  outline: none; 
  border: 2px solid rgba(255, 255, 255, 0.5);
}


</style>
