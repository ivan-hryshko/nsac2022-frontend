<template>
  <v-app>
    <v-main>
      <div
        class="layout"
      >
        <div
          class="sidebar"
        >
          Junonian
        </div>
        <div>
          <router-view/>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  .layout {
    width: 100%;
    display: flex;
    background-color: #1E1E1E;
    height: 100%;

  }
  .sidebar {
    width: 256px;
    box-shadow: inset -1px 0px 0px rgba(228, 228, 228, 0.1);
    color: #808191;
  }
</style>
