<template>
    <div class="clothing-form" v-if="isAuthenticated">
      <h2>{{ isEditing ? 'Edit Clothing Item' : 'Add Clothing Item' }}</h2>
      <form @submit.prevent="$emit('submit', clothing)">
        <input v-model="clothing.name" placeholder="Item Name" required />
        <input v-model="clothing.category" placeholder="Category" required />
        <textarea v-model="clothing.description" placeholder="Description" required></textarea>
        <input v-model="clothing.image" placeholder="Image URL" required />
        <button type="submit">{{ isEditing ? 'Update' : 'Add' }} Item</button>
      </form>
    </div>
    <p v-else class="login-prompt">Please log in to add or edit clothing items.</p>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, reactive } from 'vue';
  import { useAuthStore } from '../../store/authStore.ts';
  
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  
  defineProps<{ isEditing: boolean; item?: { name: string; category: string; description: string; image: string } }>();
  const emit = defineEmits(['submit']);
  
  const clothing = reactive({ name: '', category: '', description: '', image: '' });
  </script>
  
  <style scoped>
  .clothing-form {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: #6a11cb;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  button:hover {
    background: #3a1c71;
  }
  .login-prompt {
    color: red;
    font-weight: bold;
  }
  </style>