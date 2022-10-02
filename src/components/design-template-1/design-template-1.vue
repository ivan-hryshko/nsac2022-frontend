<template>
  <div class="poster-design-template__background">
    <div class="image-poster__design-template-wrapped image-poster__background">
      <img
        class="image-poster__image image-position"
        :src="chosenImage"
      >
      <div class="image-poster__template-top">
        <div class="image-poster__template-header">
          <h3 class="template-header__title">Europa</h3>
          <div class="template-header__info">
            <ul class="template-header__list">
              <li class="template-header__list-item">FOCAL_PLANE_TEMPERATURE": "273.0",</li>
              <li class="template-header__list-item">"IMAGE_TIME": "2022-09-29T09:38:05.728",</li>
              <li class="template-header__list-item">"INSTRUMENT_HOST_NAME": "JUNO",</li>
              <li class="template-header__list-item">"INSTRUMENT_ID": "JNC"</li>
            </ul>
            <img src="@/assets/nasa-logo.png" class="template-header__logo">
          </div>
        </div>
      </div>
      <div class="image-poster__template-bottom">
        <div class="image-poster__template-footer">
          <div class="template-footer__info">
            <ul class="template-footer__list">
              <li class="template-footer__list-item">"COMPRESSION_TYPE": "HUFFMAN",</li>
              <li class="template-footer__list-item">"DATA_SET_ID": "JUNO-J-JUNOCAM-2-EDR-L0-V1.0",</li>
              <li class="template-footer__list-item">"DESCRIPTION": "",</li>
              <li class="template-footer__list-item">"EXPOSURE_DURATION": "6.400000",</li>
              <li class="template-footer__list-item">"FILE_NAME": "JNCE_2022272_45C00001_V01-raw.png",</li>
              <li class="template-footer__list-item">"FILE_RECORDS": 10752,</li>
              <li class="template-footer__list-item">"FILTER_NAME": ["BLUE", "GREEN", "RED"]</li>
            </ul>
            <img src="@/assets/solar.png" class="template-footer__pic">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DesignTemplate1',
  props: {
    imagePath: {
      type: String,
      default: 'design-templates-2.png',
    },
  },
  computed: {
    ...mapGetters({
      chosenImage: 'getChosenImage',
    })
  },
  setup(props) {
    return {
    }
  },
}
</script>

<style>
@import './design-template-1';
</style>
