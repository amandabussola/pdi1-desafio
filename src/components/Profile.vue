<template>
    <div class="profile">
      <a href="#"><img :src="expandIcon" alt="Expandir" /></a>
      <img :src="profileIcon" alt="Foto de perfil" />
      <h2>Olivia Rhye</h2>
      <p>oliviathye@gmail.com</p>
    </div>
  </template>

<script setup>
import expandIcon from '@/assets/img/icons/expand.svg';
import profileIcon from '@/assets/img/images/profile.png';
</script>