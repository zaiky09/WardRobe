<template>
    <div v-if="authStore.user">
      <h1>Welcome, {{ authStore.user }}</h1>
      <WardrobeList :clothingItems="clothingItems" />
    </div>
    <div v-else>
      <p>You must log in to view your wardrobe.</p>
      <router-link to="/login">Go to Login</router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '../store/authStore.ts';
  import WardrobeList from '../components/Wardrobe/ClothingList.vue';
  
  const authStore = useAuthStore();
  </script>
  