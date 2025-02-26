import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWardrobeStore = defineStore('wardrobe', () => {
  const clothingItems = ref([
    { id: 1, name: 'Denim Jacket', category: 'Tops', description: 'A stylish blue denim jacket', image: 'https://images.pexels.com/photos/1580143/pexels-photo-1580143.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 1, name: 'Denim Jacket', category: 'Tops', description: 'A stylish blue denim jacket', image: 'https://images.pexels.com/photos/1580143/pexels-photo-1580143.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ]);

  function addItem(item: { id: number; name: string; category: string; description: string; image: string }) {
    clothingItems.value.push(item);
  }

  function editItem(updatedItem: { id: number; name: string; category: string; description: string; image: string }) {
    const index = clothingItems.value.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) clothingItems.value[index] = updatedItem;
  }

  function deleteItem(id: number) {
    clothingItems.value = clothingItems.value.filter(item => item.id !== id);
  }

  return { clothingItems, addItem, editItem, deleteItem };
});
