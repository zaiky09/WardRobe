<template>
    <div class="hero">
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
    background: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b);
    color: white;
    text-align: center;
  }
  .hero-content {
    max-width: 600px;
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
    background: #ddd;
  }
  </style>
  