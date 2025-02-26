<template>
  <div class="auth-container">
    <h2 v-if="!isLogin">Register</h2>
    <h2 v-else>Login</h2>

    <form @submit.prevent="handleSubmit">
      <input v-model="username" placeholder="Enter Username" required />
      <input v-model="password" type="password" placeholder="Enter Password" required />
      <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
    </form>

    <p @click="toggleForm">
      {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../store/authStore.ts';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const isLogin = ref(true);

const handleSubmit = () => {
  if (isLogin.value) {
    authStore.login(username.value);
  } else {
    authStore.login(username.value); // Simulate user registration
  }
  router.push('/wardrobe');
};

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
.auth-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
button {
  width: 100%;
  padding: 10px;
  background: #6a11cb;
  color: white;
  border: none;
  border-radius: 5px;
}
p {
  cursor: pointer;
  color: blue;
  margin-top: 10px;
}
</style>
