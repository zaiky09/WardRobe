// src/components/Wardrobe/ClothingItem.vue
<template>
  <div class="clothing-item">
    <img :src="image" :alt="name" class="item-image" />
    <h3>{{ name }}</h3>
    <p class="category">Category: {{ category }}</p>
    <p class="description">{{ description }}</p>
    <div class="button-group" v-if="isAuthenticated">
      <button @click="$emit('edit', id)">Edit</button>
      <button class="delete" @click="$emit('delete', id)">Delete</button>
    </div>
    <p v-else class="login-prompt">Log in to edit or delete items.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useAuthStore } from '../../store/authStore';

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;

defineProps<{ id: number; name: string; category: string; description: string; image: string }>();
</script>

<style scoped>
.clothing-item {
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
}
.clothing-item:hover {
  transform: scale(1.03);
}
.item-image {
  width: 100%;
  border-radius: 8px;
}
.category {
  font-weight: bold;
  color: #6a11cb;
}
.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}
button {
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #6a11cb;
  color: white;
}
button.delete {
  background: #ff4d6d;
}
button.delete:hover {
  background: #d63031;
}
.login-prompt {
  color: red;
  font-weight: bold;
}
</style>