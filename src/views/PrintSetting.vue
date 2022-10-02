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
      </div>
    </div>
    <div class="content__container">
      <img src="@/assets/mockup.png" alt="" class="print-mockup">
      <div class="print-settings">
        <h4 class="print-settings-title">Size</h4>
        <div class="size-buttons">

          <div class="size-button">
            <h5 class="size-title">A4</h5>
            <h6 class="size-subtitle">210 x 297 mm</h6>
          </div>
          <div class="size-button">
            <h5 class="size-title">A3</h5>
            <h6 class="size-subtitle">297 x 420 mm</h6>
          </div>
          <div class="size-button">
            <h5 class="size-title">A2</h5>
            <h6 class="size-subtitle">420 x 594 mm</h6>
          </div>
          <div class="size-button new-line">
            <h5 class="size-title">A1</h5>
            <h6 class="size-subtitle">234 x 331 mm</h6>
          </div>
          <div class="size-button new-line-move">
            <h5 class="size-title">A0</h5>
            <h6 class="size-subtitle">841 x 1189 mm</h6>
          </div>

        </div>
        <h4 class="print-settings-title">Paper quality</h4>
        <div class="quality-buttons">

          <div class="quality-button">
            <h5 class="quality-title">Fine art finish</h5>
            <h6 class="quality-subtitle">Museum-quality, thick and <br> long-lasting uncoated paper</h6>
          </div>
          <div class="quality-button">
            <h5 class="quality-title">Gloss finish</h5>
            <h6 class="quality-subtitle">Coated paper with a semi-glossy, <br> smooth surface</h6>
          </div>

        </div>
        <h4 class="print-settings-title">File format</h4>
        <div class="file-format-wrapper">
          <!-- <div class="file-format-dropdown">PDF</div> -->
          <v-select :items="items" label="Format" solo></v-select>
          <div class="file-format-download">Download poster for printing</div>
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
    data() {
      return {
        items: [
          'PDF', 'JPG', 'PNG', 'TIFF',
        ],
      }
    },
  }
</script>

<style>
.content__container{
  width: 100%;
  display: flex;
}

.print-mockup {
  width: 393px;
  margin-right: 52px;
}

.print-settings{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.print-settings-title{
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

.size-buttons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 18px;
  row-gap: 21px;
}

.size-button{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #808191;
  border-radius: 16px;
}

.size-button:hover {
  border-color: #702DFF;
  cursor: pointer;
  transition: all .3s;
}

.new-line{
  grid-area: 2 / 1 ;
}

.new-line-move{
  grid-area: 2 / 2;
}

.size-title{
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
}

.size-subtitle{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #808191;
}

.quality-buttons{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 35px;
}

.quality-button{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border: 1px solid #808191;
  border-radius: 16px;
}

.quality-button:hover{
  border-color: #702DFF;
  cursor: pointer;
  transition: all .3s;
}

.quality-title{
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
}

.quality-subtitle{
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #808191;
  text-align: center;
}
</style>
