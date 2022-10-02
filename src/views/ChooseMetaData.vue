<template>
<div
    class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 3. Metadata style</h2>
      <div class="header-btns">
        <div class="link-button">
          <router-link to="/choose-color" >
            Back
          </router-link>
        </div>
        <div class="link-button btn-background">
          <router-link to="/print-setting">
            Next
          </router-link>
        </div>
      </div>
    </div>
    <carousel-3d :height="730" :width="520">
      <slide :index="0" color="red">
        <div class="image-poster">
          <div class="image-poster__image-wrapped">
            <img
              class="image-poster__image"
              src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-mapprojected.png"
            >
          </div>
        </div>
      </slide>
      <slide :index="1">
        <div class="image-poster">
          <div class="image-poster__image-wrapped">
            <img
              class="image-poster__image"
              src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-blue.png"
            >
          </div>
        </div>
      </slide>
      <slide :index="2">
        <div class="image-poster">
          <div class="image-poster__image-wrapped">
            <img
              class="image-poster__image"
              src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-blue.png"
            >
          </div>
        </div>
      </slide>
      <slide :index="3">
        <div class="image-poster">
          <div class="image-poster__image-wrapped">
            <img
              class="image-poster__image"
              src="@/assets/ImageSet/JNCE_2022229_44C00074_V01-red.png"
            >
          </div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    name: 'ChooseMetaData',

    components: {
      Slide,
      Carousel3d,
    },
    setup() {
      return {
      }
    },
    data: () => ({
    }),
  }
</script>

<style>
  .slide {
    /* background-color: red; */
  }

  .carousel-3d-slide {
    background-color: transparent;
    border-color: transparent;
  }

</style>
