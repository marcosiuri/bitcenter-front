<template>
  <div class="fullscreen-wrapper">
    <div class="login-container">
      <div class="login-box">
        <form>
          <h2>Cadastro</h2>
          <br>
          <div class="row">
            <div class="col-md-6">
              <label for="firstName">Nome Completo</label>
              <input type="text" id="firstName">
            </div>

            <div class="col-md-6">
              <label for="lastName">CPF</label>
              <input type="text" id="lastName">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="gender">Gênero</label>
              <div class="custom-select">
                <div class="selected" @click="toggleDropdown">
                  {{ selectedGender || 'Não especificado' }} <span class="arrow">▼</span>
                </div>
                <div class="options" v-if="dropdownOpen">
                  <div 
                    class="option" 
                    v-for="(option, index) in genderOptions" 
                    :key="index" 
                    @click="selectGender(option)"
                    @mouseover="hoverOption = index"
                    @mouseleave="hoverOption = null"
                    :class="{ 'hovered': hoverOption === index }"
                  >
                    {{ option }}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <label for="birthDate">Data de Nascimento</label>
              <input type="date" id="birthDate">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="email">E-mail</label>
              <input type="text" id="email">
            </div>

            <div class="col-md-6">
              <label for="tel">Telefone Celular</label>
              <input type="text" id="tel">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="password">Senha</label>
              <input type="password" id="password">
            </div>

            <div class="col-md-6">
              <label for="confirmPassword">Confirme sua senha</label>
              <input type="password" id="confirmPassword">
            </div>
          </div>

          <button type="button" class="btn btn-secondary mb-2">
            Cadastrar
          </button>

          <p class="mt-3 text-center">
            <a href="/login">Já possui cadastro?</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      selectedGender: '',
      genderOptions: ['Homem', 'Mulher', 'Outros'],
      hoverOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectGender(option) {
      this.selectedGender = option;
      this.dropdownOpen = false;
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

.row {
  margin-bottom: 15px;
}

.col-md-6 {
  padding: 0 10px;
}

input[type="text"],
input[type="date"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="password"]:focus {
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

/* Estilo do dropdown personalizado */
.custom-select {
  position: relative;
  cursor: pointer;
}

.selected {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #7b2c8f; 
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #150025; 
  border-radius: 5px;
  border: 1px solid #7b2c8f; 
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.option {
  padding: 10px;
  cursor: pointer;
  color: white; 
}

.option.hovered {
  background-color: rgba(145, 22, 228, 0.5); 
}

.arrow {
  float: right;
}

/* Botão */
.btn-secondary {
  background-color: #420892;
  border-color: #7c1bc2;
}

.btn-secondary:hover {
  background-color: #010741;
  border-color: #7c1bc2;
}
</style>
