<script setup lang="ts">
import burgerIcon from '@/assets/img/icons/burger.svg';
import expandIcon from '@/assets/img/icons/expand.svg';
import profileIcon from '@/assets/img/images/profile.png';
import homeIcon from '@/assets/img/icons/home.svg';
import profileMenuIcon from '@/assets/img/icons/profile.svg';
import organizationsIcon from '@/assets/img/icons/organizations.svg';
import findoutIcon from '@/assets/img/icons/findout.svg';
import logoutIcon from '@/assets/img/icons/logout.svg';
import associacaoFalcoes from '@/assets/img/images/associacaofalcoes.png';
import buildingIcon from '@/assets/img/images/building.svg';
import changepasswordIcon from '@/assets/img/icons/changepassword.svg';
import successIcon from '@/assets/img/icons/success.svg';
import blockIcon from '@/assets/img/icons/block.svg';
import mailIcon from '@/assets/img/icons/mail.svg';
import logo from '@/assets/img/images/logo.svg';
</script>

<template>
  <div class="container">
    <a href="#" alt="Menu" class="menu-mobile">
      <img :src="burgerIcon" alt="Menu" />
    </a>

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

    <main class="content">
      <header class="header">
        <h1>Sua conta Bússola</h1>
        <p>Gerencie as suas informações pessoais, configurações e segurança.</p>
      </header>

      <section class="cards">
        <div class="card">
          <h2>Sessão ativa</h2>
          <div class="card-content">
            <img :src="associacaoFalcoes" alt="Gerando Falcões" />
            <div class="card-description">
              <h3>Associação Gerando Falcões</h3>
              <p>Vila Santa Helena, Poá - SP</p>
              <a href="#">Ver minhas organizações</a>
            </div>
          </div>
        </div>

        <div class="card">
          <h2>Acesso padrão</h2>
          <div class="card-content">
            <img :src="buildingIcon" alt="Última organização acessada" />
            <div class="card-description">
              <h3>Última organização acessada</h3>
              <a href="#">Alterar minhas preferências</a>
            </div>
          </div>
        </div>
      </section>

      <section class="notifications">
        <div class="card">
          <h2>Suas notificações</h2>

          <div class="notification yellow">
            <div class="notif-content">
              <img :src="changepasswordIcon" alt="Trocar senha" />
              <div class="notif-text">
                <h3>Lembre de trocar sua senha!</h3>
                <p>
                  Sua senha não é atualizada há mais de 6 meses, para manter
                  sua segurança recomendamos que
                  <a href="#">atualize agora</a>.
                </p>
              </div>
              <p>Hoje - 13:30</p>
            </div>
          </div>

          <div class="notification green">
            <div class="notif-content">
              <img :src="successIcon" alt="Acesso aceito" />
              <div class="notif-text">
                <h3>Seu acesso foi aceito pela organização “Petrobras”</h3>
                <p>
                  Seu pedido de desbloqueio de acesso à PETROBRAS foi aceito,
                  seu acesso já foi reestabelecido.
                </p>
              </div>
              <p>Ontem - 13:30</p>
            </div>
          </div>

          <div class="notification pink">
            <div class="notif-content">
              <img :src="blockIcon" alt="Acesso bloqueado" />
              <div class="notif-text">
                <h3>Seu acesso foi bloqueado pela organização “Petrobras”</h3>
                <p>Seu acesso a PRIO foi bloqueado.</p>
              </div>
              <p>Hoje - 18:30</p>
            </div>
          </div>

          <div class="notification blue">
            <div class="notif-content">
              <img :src="mailIcon" alt="Convite" />
              <div class="notif-text">
                <h3>
                  Você foi convidado para ter acesso à organização Gerando
                  Falcões
                </h3>
                <p>
                  Maria está convidando você a se juntar à Gerando Falcões -
                  Instituto Mover Vidas - Ceilândia - DF.
                </p>
              </div>
              <p>Há 1 semana</p>
            </div>
          </div>

          <div class="notification green">
            <div class="notif-content">
              <img :src="successIcon" alt="Vínculo aceito" />
              <div class="notif-text">
                <h3>Seu vínculo foi aceito pela organização “SICREDI”</h3>
                <p>
                  Sua solicitação de vínculo à SICREDI foi aprovada e seu acesso
                  já está liberado.
                </p>
              </div>
              <p>Há 2 dias</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

