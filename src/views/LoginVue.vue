<template>
  <div class="fullscreen-wrapper">
    <div class="login-container">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <h1 class="h1 title-color">BitCenter</h1>

            <div class="login-box p-4">
              <h2 class="text-center">Login</h2>
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
                  <button type="button" class="btn btn-secondary mb-2">
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
  color:#620093;
}

.fullscreen-wrapper {
  position: fixed; 
  top: 0;
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-color: #07031c; 

}

.login-container {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  justify-content: center; 
  align-items: center;
}

.login-box {
  background: linear-gradient(145deg, #5e009b, #7c1bc2); 
  border-radius: 10px; 
  color: white; 
  padding: 30px; 
  width: 100%; 
  max-width: 400px; 
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2), 
              -8px -8px 15px rgba(255, 255, 255, 0.1); 
  justify-content: center; 
  align-items: center;
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
  background-color: #7c1bc2; 
  border-color: #7c1bc2;
}

.btn-primary:hover {
  background-color: #420892; 
  border-color: #7c1bc2; 
}

.btn-secondary:hover {
  background-color: #420892;
  border-color: #7c1bc2;
}

a {
  color: white; 
}

</style>
