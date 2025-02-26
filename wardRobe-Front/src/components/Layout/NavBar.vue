<template>
    <nav class="navbar">
      <h1>Wardrobe Manager</h1>
      <ul>
        <li><router-link to="/" v-slot="{ navigate }"><a @click="navigate">Home</a></router-link></li>

        <li><router-link to="/wardrobe">Wardrobe</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useAuthStore } from '../../store/authStore';
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const logout = () => authStore.logout();
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: linear-gradient(to right, #970D1A, #4E204D);
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  li a, button {
    color: white;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
  button:hover, li a:hover {
    text-decoration: underline;
  }
  </style>
  