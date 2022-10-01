<template>
  <div
    class="layout-2"
  >
  <div
    class=""
  >
  <v-btn
    color="#702DFF"
  >
    <router-link to="/choose-color">
      Use
    </router-link>
  </v-btn>
    main - first page
    <!-- <v-slider
      class="align-self-stretch"
      min="200"
      max="900"
      step="1"
    ></v-slider> -->
  <!-- </div>
    <div class="d-flex flex-column justify-space-between align-center">

      <v-img
        :aspect-ratio="16/9"
        :width="width"
        src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-blue.png"
      ></v-img>
    </div> -->
    <!-- <div
      v-for="data in dataset"
      :key="data.FILE_NAME"
    >
    <v-btn>
      {{ data }}
    </v-btn> -->

    

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

      // const url = 'http://localhost:8000/api/'
      // const url = 'https://www.random.org/'
      const url = 'http://44.206.255.237:8000/'
      const client = axios.create({
        baseURL: url,
        timeout: 1000,
      });

      async function getImage() {
        const url = 'http://44.206.255.237:8000/api/rgb_get'
        // const url = 'http://44.206.255.237:8000/admin/login/?next=/admin/'
        // const url = 'example.com'
        let  response = await fetch(url);
        // let  response = await fetch(url, {
        //   headers: {
        //     ['Access-Control-Allow-Origin']: '*',
        //     ['Access-Control-Allow-Origin']: '*',
        //     ['access-control-allow-origin']: 'http://localhost:8080',
        //     ['access-control-allow-origin']: 'http://127.0.0.1:8080',
        //   }
        // });

        if (response.ok) { // если HTTP-статус в диапазоне 200-299
          // получаем тело ответа (см. про этот метод ниже)
          let respo = await response.json();
          console.log('response :>> ', response);
          // console.log('json.value :>> ', json.value.data);
        } else {
          alert("Ошибка HTTP: " + response.status);
        }

      }

      async function getImage2() {
        const url = 'example.com'
        axios
        .get(url)
        .then(response => (json.value = response));
      }

      function performSignIn() {
        const url = 'http://localhost:8000/api/rgb_get'
      
        let headers = new Headers();

        headers.append('Access-Control-Allow-Origin', '*')
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

      async function getImage3() {
        json.value = await client.get('/api/rgb_get')
        console.log('json.value :>> ', json.value.data);

      }

      // const express = require('express')
      // const app = express()

      // const cors = express('cors')

      // app.use(cors())
      // app.get('/', (req, res) => {
      //   res.status(200).json({ title: 'Hello worl'})
      // })

      // getImage()
      // getImage2()
      getImage3()
      // performSignIn()
      // console.log('json.value :>> ', json.value);
      
      // client.get('/rgb_get')

      


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
  .layout-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .slider-wrapped {

  }

  .image {
    width: 600px;

  }
</style>
