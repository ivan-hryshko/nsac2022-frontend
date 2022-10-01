<template>
  <div
    class="space-image"
  >
  </div>
</template>

<script>

export default {
  name: 'SpaceImage',
  props: {
    position: {
      type: String,
      default: 'left',
    },
  },
  setup(props) {
    const styleOptions = computed(() => {
      return {
        'background-position': props.position,
      }
    })

    return {
      styleOptions,
    }
  },
}
</script>

<style>
@import './space-image';
</style>
