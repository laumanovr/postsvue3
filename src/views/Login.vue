<template>
  <div class="login-container">
    <div class="form-container">
      <div class="info">
        <p>Login: admin</p>
        <p>Password: 123456</p>
      </div>
      <form class="form-input" @submit.prevent="submitForm">
        <div class="input"><input type="text" placeholder="Login" v-model="login"></div>
        <div class="input"><input type="password" placeholder="Password" v-model="password"></div>
        <div class="btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const login = ref<string>('');
const password = ref<string>('');

const submitForm = () => {
  if (login.value === 'admin' && password.value === '123456') {
    router.push({name: 'posts'})
  } else {
    alert('Login or Password is incorrect')
  }


}

</script>

<style lang="scss">
.login-container {
  background: #FFEB3B;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    margin-top: 30px;
    button {
      width: 100%;
      height: 30px;
      background: #00bcd4e3;
      outline: none;
      border: 0;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
