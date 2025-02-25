<template>
    <div class="auth-container">
      <div class="auth-box">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <input type="text" v-model="name" placeholder="Name" required />
          <input type="email" v-model="email" placeholder="Email" required />
          <input type="password" v-model="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const name = ref<string>('');
  const email = ref<string>('');
  const password = ref<string>('');
  const router = useRouter();
  
  const register = async (): Promise<void> => {
    try {
      const response = await axios.post<{ token: string }>('http://localhost:8000/api/register', {
        name: name.value,
        email: email.value,
        password: password.value
      });
      localStorage.setItem('token', response.data.token);
      router.push('/');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  </script>
  
  <style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
}
.auth-box {
  max-width: 400px;
  width: 100%;
  padding: 30px;
  background: #f8f9fa;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
}
input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
}
.button-container {
  display: flex;
  justify-content: center;
}
button {
  width: 80%;
  padding: 12px;
  background: #6a11cb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}
button:hover {
  background: #ff4d6d;
}
</style>
