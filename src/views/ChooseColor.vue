<template>
  <div
  class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 2. Color</h2>
      <div class="header-btns">
        <div class="link-button">
          <router-link to="/" >
            Back
          </router-link>
        </div>
        <div class="link-button btn-background">
          <router-link to="#">
            Next
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChooseColor',
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
.btn-background {
    border: 1px solid #702DFF;
    background-color: #702DFF;
    margin-left: 8px;
  }

    .btn-background:link {
      border: 1px solid #702DFF;
      background-color: #702DFF;
    }
  
    /* visited link */
    .btn-background:visited {
      border: 1px solid #702DFF;
      background-color: #702DFF;
    }
  
    /* mouse over link */
    .btn-background:hover {
      border: 1px solid #5c2bc6;
      background-color: #5c2bc6;
    }
  
    /* selected link */
    .btn-background:active {
      border: 1px solid #702DFF;
      background-color: #702DFF;
    }

  .link-button{
    color: white;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    padding: 18px 43px;
    border-radius: 16px;
  }

  .v-application a{
    color: white !important;
  }

  a:-webkit-any-link{
    text-decoration: none;
  }
</style>
