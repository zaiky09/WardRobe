<script setup>
import wardrobeBg from '../assets/fashion.jpg';
</script>

<template>
  <div class="hero" :style="{ backgroundImage: `url(${wardrobeBg})` }">
    <div class="hero-content">
      <h1>Welcome to Your Digital Wardrobe</h1>
      <p>Organize, manage, and style your outfits with ease.</p>
      <router-link to="/wardrobe" class="btn">Explore Wardrobe</router-link>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7); /* Dark overlay for better readability */
}

.hero-content {
  position: relative;
  max-width: 600px;
  z-index: 1;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: white;
  color: #3a1c71;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background: #970D1A;
  color: white;
}
</style>
