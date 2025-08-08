<template>
    <nav class="navigation">
        <ul>
            <li>
                <a href="#" class="active">
                    <img :src="homeIcon" alt="Início" /> Início
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="profileMenuIcon" alt="Meu perfil" /> Meu perfil
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="organizationsIcon" alt="Organizações" /> Organizações
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="findoutIcon" alt="Descobrir" /> Descobrir
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="logoutIcon" alt="Sair" /> Sair
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import homeIcon from '@/assets/img/icons/home.svg'
import profileMenuIcon from '@/assets/img/icons/profile.svg'
import organizationsIcon from '@/assets/img/icons/organizations.svg'
import findoutIcon from '@/assets/img/icons/findout.svg'
import logoutIcon from '@/assets/img/icons/logout.svg'
</script>