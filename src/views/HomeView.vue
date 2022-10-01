<template>
  <div
    class="layout"
  >
  <div
    class=""
  >
    <v-slider
      v-model="width"
      class="align-self-stretch"
      min="200"
      max="900"
      step="1"
    ></v-slider>
  </div>
    <div class="d-flex flex-column justify-space-between align-center">

      <v-img
        :aspect-ratio="16/9"
        :width="width"
        src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-blue.png"
      ></v-img>
    </div>
    <div
      v-for="data in dataset"
      :key="data.FILE_NAME"
    >
    <v-btn>
      {{ data }}
    </v-btn>

    </div>
  </div>
  <!-- <hello-world /> -->
</template>

<script>
  import { ref } from 'vue'
  import HelloWorld from '../components/HelloWorld'
  import dataset from '@/assets/DataSet/13639-Metadata.json'
  import axios from 'axios'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
    setup() {
      const json = ref([])

      async function getImage() {
        const url = 'http://localhost:8000/api/rgb_get'
        let  response = await fetch(url);

        if (response.ok) { // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          let json = await response.json();
        } else {
          alert("Ошибка HTTP: " + response.status);
        }
      }

      async function getImage2() {
        const url = 'localhost:8000/api/rgb_get'
        axios
        .get(url)
        .then(response => (json.value = response));
      }

      function performSignIn() {
        const url = 'http://localhost:8000/api/rgb_get'
      
        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', 'http://localhost:8081');
        headers.append('Access-Control-Allow-Credentials', 'true');

        fetch(url, {
            //mode: 'no-cors',
            credentials: 'include',
            method: 'GET',
            headers: headers
          })
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(error => console.log(error.message));
      }

      getImage()
      console.log('json.value :>> ', json.value);
      performSignIn()
      return {
        dataset
      }
    },
    data: () => ({
      width: 900,
    }),
  }
</script>

<style>
  .layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    width: 600px;

  }
</style>
