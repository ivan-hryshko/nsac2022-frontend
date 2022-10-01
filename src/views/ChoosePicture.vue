<template>
  <div
    class="layout-2"
  >

    <div class="content__header">
      <h2 class="header-title">Step 1. Angle</h2>
      <div class="header-btns">
        <div class="btn"><h5 class="btn__text"> Cancel</h5></div>
        <div class="btn btn-border"><h5 class="btn__text"> Preview</h5></div>
      </div>
    </div>

    <v-btn
      color="#702DFF"
    >
      <router-link to="/choose-color">
        Use
      </router-link>
      
    </v-btn>
      main - first page
    
  </div>
</template>

<script>
  import { ref } from 'vue'
  import HelloWorld from '../components/HelloWorld'
  import dataset from '@/assets/DataSet/13639-Metadata.json'
  import axios from 'axios'

  export default {
    name: 'ChoosePicture',

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
      // getImage3()
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
    /* width: 100%; */
    margin: 0 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content__header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 45px 0;
  }

  .header-title{
    font-weight: 500;
    font-size: 48px;
    line-height: 62px;
  }

  .header-btns{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    border-radius: 16px
  }

  .btn__text{
    margin: 18px 43px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }

  .btn-border{
    border: 1px solid #702DFF;
  }

  .header-btns > .btn-border {
    margin-left: 8px;
  }

  .slider-wrapped {

  }

  .image {
    width: 600px;

  }
</style>
