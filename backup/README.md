# Desafio Bússola

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D) 
![SCSS](https://img.shields.io/badge/SCSS-C76EAD?style=for-the-badge&logo=sass&logoColor=fff) 
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![Responsive](https://img.shields.io/badge/Responsive-Design-00C896?style=for-the-badge&logo=css3&logoColor=white)

## 📘 Descrição

Este projeto é a entrega do Desafio Bússola, desenvolvido por Amanda de Oliveira Spitzner. A proposta foi criar um layout responsivo fiel às telas do Figma utilizando HTML, SCSS e Vite, com JavaScript apenas para o menu responsivo.

## 🎨 Link do Figma

🔗 https://www.figma.com/design/KoZhQNubfR6xQrgdbh5Muf/Teste-Bússola---Amanda-de-Oliveira-Spitzner?node-id=0-1&t=0pdb7FvXsAuapC8u-1

No Figma, fiz alguns comentários de estilo, mas a programação foi feita com fidelidade à tela recebida.

## 💡 Observações

- Utilizei JavaScript apenas para o toggle do menu na versão mobile/tablet.
- Todo o restante foi feito com HTML e SCSS puro, sem frameworks JS além do necessário para rodar com Vite.
- O menu sobrepõe o conteúdo em resoluções menores conforme proposto no desafio.

## 🎨 Variáveis SCSS e Design System

Este projeto utiliza SCSS com um sistema de variáveis modularizado para manter consistência visual e facilitar a manutenção. As variáveis estão organizadas por categorias:

🧱 Layout — $sidebar-width, $container-width, $card-radius, $card-border-bottom  
🎨 Cores — $primary-color, $secondary-color, $text-color, $white, $link-blue, $border-light  
🔤 Tipografia — $font-size-sm, $font-size-md, $font-size-xl, $font-weight-regular, $font-family-base  
📏 Espaçamentos — $spacing-xs, $spacing-md, $page-padding-x, $margin-header-top  
🖼️ Imagens e Ícones — $profile-img-width, $icon-size-sm, $card-img-width, etc.  
📱 Responsividade — $sidebar-padding-mobile, $card-width-tablet, $logo-margin-top-mobile  
📨 Notificações — $notification-radius, $notif-padding, $notif-border-pink, etc.

Essas variáveis ficam todas no arquivo `_variables.scss` dentro da pasta `/globals`.

## 🚀 Como rodar o projeto localmente

### 🔧 Requisitos

- Node.js (versão recomendada: 18+)
- npm ou Yarn

### 📥 Instalação

1. Clone o repositório:  
git clone https://github.com/amandabussola/pdi1-desafio.git

2. Acesse a pasta do projeto:  
cd pdi1-desafio

3. Instale as dependências:  
npm install  
ou  
yarn

### ▶️ Rodando o projeto em modo de desenvolvimento

npm run dev  
ou  
yarn dev

A aplicação será iniciada em: http://localhost:5173/

### 📦 Build para produção

npm run build

O projeto será compilado na pasta `/dist`.

### 🔍 Preview do build

npm run preview

Isso simula o ambiente de produção localmente.