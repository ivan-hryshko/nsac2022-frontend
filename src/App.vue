<template>
  <v-app>
    <v-main>
      <div
        class="layout"
      >
        <div
          class="sidebar"
        >
          <img
            class="sidebar__logo"
            src="@/assets/junonian-logo.png"
          >

          <div
            class="sidebar__items"
          >
            <div
              class="sidebar__item"
            >
              <div
                class="sidebar__icon"
              >
                <img src="@/assets/icons/game.svg">
              </div>
              <div
                class="sidebar__text"
              >
                Posters
              </div>
            </div>
            <div
              class="sidebar__item"
            >
              <div
                class="sidebar__icon"
              >
                <img src="@/assets/icons/about.svg">
              </div>
              <div
                class="sidebar__text"
              >
                About
              </div>
            </div>
            <div
              class="sidebar__item"
            >
              <div
                class="sidebar__icon"
              >
                <img src="@/assets/icons/nasa-photo.svg">
              </div>
              <div
                class="sidebar__text"
              >
                NASA Photo
              </div>
            </div>
            <div
              class="divider"
              style="width: 127px"
            ></div>
          </div>
        </div>
        <div
          class="main-part"
        >
          <header class="header">
            <div class="header__download-item">
              <img src="@/assets/icons/download-icon.svg" class="download-item__icon">
              <h3 class="download-item__text">Download</h3>
            </div>
            <h2 class="header__poster-size">Poster А2 42x59.4 sm</h2>
            <div class="header__notifications">
              <div class="notifications__box">
                <img src="@/assets/icons/notification.svg" class="notifications__icon">
                <div class="notifications__counter">
                  <h5 class="counter-number">2</h5>
                </div>
              </div>
              <img src="@/assets/icons/avatar.svg" class="notifications__icon">
            </div>
          </header>
          <main>
            <router-view/>
          </main>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  setup() {
    // const router = useRouter()
    // const route = useRoute()
  }
};
</script>

<style>
.layout {
    width: 100%;
    display: flex;
    background-color: #1E1E1E;
    height: 100%;
    color: white;

  }

  .sidebar {
    width: 256px;
    box-shadow: inset -1px 0px 0px rgba(228, 228, 228, 0.1);
    color: #808191;
  }

  .sidebar__logo {
    width: 127px;
    margin-top: 32px;
    margin-left: 37px;
  }

  .sidebar__items {
    display: flex;
    flex-direction: column;
    margin-top: 78px;
    margin-left: 40px;
  }

  .sidebar__item {
    display: flex;
    margin-bottom: 20px;
  }

  .sidebar__icon {

  }

  .sidebar__text {
    margin-left: 18px;
  }

  .divider {
    height: 1px;
    background: #E4E4E4;
    opacity: 0.1;
  }

  .main-part {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header{
    height: 112px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    box-shadow: inset 0px -1px 0px rgba(228, 228, 228, 0.1);
  }

  .header__download-item{
    display: flex;
  }

  .download-item__text{
    margin-left: 16px;
    /* font-family: 'Inter'; */
    font-weight: 600;
    font-size: 14px;
    color: #808191;
  }

  .header__poster-size{
    font-weight: 500;
    font-size: 18px;
  }

  .header__notifications{
    display: flex;
    align-items: center;
  }

  .notifications__box{
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 64px;
    position: relative;
  }

  .notifications__counter{
    width: 16px;
    height: 16px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .counter-number{
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    align-items: center;
    line-height: 16px;
  }

  main{
    width: 100%;
  }

  router-link {
    color:white;
  }
</style>
