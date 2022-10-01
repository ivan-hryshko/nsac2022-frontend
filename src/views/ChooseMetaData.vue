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
  </div>
</template>

<script>

  export default {
    name: 'ChooseMetaData',

    components: {
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

</style>
