<template>

<aside class="sidebar">
    <div>
     
      <div class="profile">
        <a href="#"><img :src="expandIcon" alt="Expandir" /></a>
        <img :src="profileIcon" alt="Foto de perfil" />
        <h2>Olivia Rhye</h2>
        <p>oliviathye@gmail.com</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" class="active">
              <img :src="homeIcon" alt="Início" /> Início
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="profileMenuIcon" alt="Meu perfil" /> Meu perfil
              <img class="expand" :src="expandIcon" alt="Expandir" />
            </a>
            <ul>
              <li class="submenu"><a href="#">Informações pessoais</a></li>
              <li class="submenu"><a href="#">Senha e segurança</a></li>
              <li class="submenu"><a href="#">Preferências</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <img :src="organizationsIcon" alt="Minhas organizações" />
              Minhas organizações
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="findoutIcon" alt="Descobrir" /> Descobrir
              <img class="expand" :src="expandIcon" alt="Expandir" />
            </a>
            <ul>
              <li class="submenu"><a href="#">Editais</a></li>
              <li class="submenu"><a href="#">Academia Bússola</a></li>
              <li class="submenu"><a href="#">BússolaCAST</a></li>
              <li class="submenu"><a href="#">Corrente do bem</a></li>
              <li class="submenu"><a href="#">Youtube</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="logout-container">
        <button class="logout">
          <img :src="logoutIcon" alt="Sair" /> Sair
        </button>
      </div>
    </div>
    <img class="logo" :src="logo" alt="Bússola" />
  </aside>

</template>

<script setup>
import expandIcon from '@/assets/img/icons/expand.svg';
import profileIcon from '@/assets/img/images/profile.png';
import homeIcon from '@/assets/img/icons/home.svg';
import profileMenuIcon from '@/assets/img/icons/profile.svg';
import organizationsIcon from '@/assets/img/icons/organizations.svg';
import findoutIcon from '@/assets/img/icons/findout.svg';
import logoutIcon from '@/assets/img/icons/logout.svg';
</script>