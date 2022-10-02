<template>
  <div
    class="space-image"
  >
    <div
      class="space-image__image-wrapped"
    >
      <img
        v-if="isRealData"
        class="space-image__image"
        :src="imageItem.image"
      >
      <img
        v-else
        class="space-image__image"
        :src="require(`@/assets/ImageSet/${imageItem.image}`)"
      >
    </div>
    <div class="space-image__info"
      @click="$router.push({path: '/choose-color', params: {hello: 'hello'}, query: imageItem})"
    >
      <div class="space-image__text">
        <div class="space-image__main-text">
          {{ imageItem.metadata.TARGET_NAME }}
        </div>
        <div class="space-image__second-text">
          {{ secondText }}
        </div>
      </div>
      <router-link to="/choose-color">
        <div class="space-image__button">
          Use
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SpaceImage',
  props: {
    mainText: {
      type: String,
      default: 'Europa — 13805',
    },
    secondText: {
      type: String,
      default: 'NASA / SwRI / MSSS',
    },
    imageItem: {
      type: Object,
      default: () => {
        return {}
      },
    },
    fakeData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isRealData: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    function HelloWorld() {
      console.log('hello');
      this.$router.push({name: 'choose-color'})
    }

    // console.log('props.imagePath :>> ', props.imageItem);

    return {
      HelloWorld
    }
  },
}
</script>

<style>
@import './space-image';
</style>
