<template>
  <div class="poster-design-template__background">
    <div class="image-poster__design-template-wrapped">
      <img
        class="image-poster__image"
        :src="require(`@/assets/ImageSet/${imagePath}`)"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'DesignTemplate1',
  props: {
    imagePath: {
      type: String,
      default: 'design-templates-2.png',
    },
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
