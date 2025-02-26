<template>
    <div class="wardrobe-list">
      <h2>My Wardrobe</h2>
      <div class="grid">
        <ClothingItem 
          v-for="item in clothingItems" 
          :key="item.id" 
          v-bind="item" 
          @edit="$emit('edit', item.id)"
          @delete="$emit('delete', item.id)" 
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import ClothingItem from './ClothingItem.vue';
  
  defineProps<{ clothingItems: Array<{ id: number; name: string; category: string; description: string; image: string }> }>();
  </script>
  
  <style scoped>
  .wardrobe-list {
    padding: 20px;
    background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>
  