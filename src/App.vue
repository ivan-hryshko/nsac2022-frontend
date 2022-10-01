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
        <div
          class="main-part"
        >
          <header>
            header
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
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  setup() {
    const router = useRouter()
    const route = useRoute()
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

  .main-part {
    display: flex;
    flex-direction: column;
  }

  router-link {
    color:white;
  }

</style>
