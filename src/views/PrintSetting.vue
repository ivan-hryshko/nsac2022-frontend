<template>
<div
    class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 4. Print setting</h2>
      <div class="header-btns">
        <div class="link-button">
          <router-link to="/choose-meta-data" >
            Back
          </router-link>
        </div>
        <div class="link-button btn-background">
          <router-link to="/success-page">
            Next
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'PrintSetting',

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
