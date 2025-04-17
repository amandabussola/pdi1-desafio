<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <div class="card-content">
        <img :src="imgSrc" :alt="imgAlt" />
        <div class="card-description">
          <h3>{{ heading }}</h3>
          <p v-if="paragraph">{{ paragraph }}</p>
          <a v-if="link" :href="linkHref">{{ link }}</a>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  defineProps({
    title: String,
    imgSrc: String,
    imgAlt: String,
    heading: String,
    paragraph: String,
    link: String,
    linkHref: String
  })
  
  // Precisa desse import abaixo? Também gostaria de entender o script acima
  import '@/styles/components/_card.scss'
  </script>