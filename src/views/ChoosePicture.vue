<template>
  <div
    class="main-content"
  >
    <div class="content__header">
      <h2 class="header-title">Step 1. Angle</h2>
      <div class="header-btns">
        <div class="btn"><h5 class="btn__text"> Cancel</h5></div>
        <div class="btn btn-border"><h5 class="btn__text"> Preview</h5></div>
      </div>
    </div>
      <div class="gallery">
      <SpaceImage
        v-for="item, index in fullData"
        :key="index"
        :image-item="item"
      />
    </div>
  </div>
</template>

<script>
  import { ref, computed } from 'vue'
  import dataset from '@/assets/DataSet/13639-Metadata.json'
  import axios from 'axios'
  import SpaceImage from '@/components/space-image'
  import { mapMutations } from 'vuex'

  export default {
    name: 'ChoosePicture',

    components: {
      SpaceImage,
    },
    setup() {

      return {
      }
    },
    data: () => ({
      width: 900,
      imageList:[],
      combinedList: [
        {
          image: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=47564&Interlaced=1&Mode=R&ResX=960&OutputFormat=jpg&Quality=90&ts=1678305742',
          image_b: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=47568&Interlaced=1&Mode=R&ResX=320&OutputFormat=jpg&Quality=90&ts=1678305742',
          image_g: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=47567&Interlaced=1&Mode=R&ResX=320&OutputFormat=jpg&Quality=90&ts=1678305742',
          image_r: 'https://d2xkkdgjnsfvb0.cloudfront.net/Vault/Thumb?VaultID=47566&Interlaced=1&Mode=R&ResX=320&OutputFormat=jpg&Quality=90&ts=1678305742',
          metadata: {
            COMPRESSION_TYPE:	"INTEGER COSINE TRANSFORM",
            DATA_SET_ID:	"JUNO-J-JUNOCAM-2-EDR-L0-V1.0",
            DESCRIPTION:	"JUNOCAM PHOTO",
            EXPOSURE_DURATION:	"3.200000 <ms>",
            FILE_NAME:	"JNCE_2023098_50C00054_V01-raw.png",
            FILE_RECORDS:	10752,
            FILTER_NAME: [
              "BLUE",
              "GREEN",
              "RED",
            ],
            FOCAL_PLANE_TEMPERATURE:	"273.0 <K>",
            IMAGE_TIME:	"2023-04-08T07:29:49.656",
            INSTRUMENT_HOST_NAME:	"JUNO",
            INSTRUMENT_ID:	"JNC",
            INSTRUMENT_NAME:	"JUNO EPO CAMERA",
            INTERFRAME_DELAY:	"0.370 <s>",
            JNOTDI_STAGES_COUNT:	1,
            LINES:	10752,
            LINE_PREFIX_BYTES:	0,
            LINE_SAMPLES:	1648,
            LINE_SUFFIX_BYTES:	0,
            MISSION_PHASE_NAME:	"PERIJOVE 50",
            ORBIT_NUMBER:	50,
            PJ:	"50",
            PROCESSING_LEVEL_ID:	2,
            PRODUCER_ID:	"JUNO_JUNOCAM_TEAM",
            PRODUCT_CREATION_TIME:	"2023-04-18T19:07:30",
            PRODUCT_ID:	"JNCE_2023098_50C00054_V01",
            PRODUCT_VERSION_ID:	1,
            RATIONALE_DESC:	"Jupiter imaging",
            RECORD_BYTES:	1648,
            SAMPLE_BITS:	8,
            SAMPLE_BIT_MASK	:"2#11111111#",
            SAMPLE_BIT_MODE_ID:	"SQROOT",
            SAMPLE_TYPE:	"UNSIGNED_INTEGER",
            SAMPLING_FACTOR:	1,
            SEQUENCE_ID:	"jm50",
            SOFTWARE_NAME	:"JUNOMAKEPDS.PY 0.12",
            SOLAR_DISTANCE:	"7.4092e+08 <km>",
            SOURCE_PRODUCT_ID:	"3D-0900320036-2023-106T11.10.06",
            SPACECRAFT_ALTITUDE:	"56724.4 <km>",
            SPACECRAFT_CLOCK_START_COUNT:	"734211428:122",
            SPACECRAFT_CLOCK_STOP_COUNT:	"N/A",
            SPACECRAFT_NAME:	"JUNO",
            STANDARD_DATA_PRODUCT_ID:	"JUNOCAM-EDR",
            START_TIME:	"2023-04-08T07:29:49.656",
            STOP_TIME:	"2023-04-08T07:30:00.016",
            SUB_SPACECRAFT_LATITUDE:	"58.8505",
            SUB_SPACECRAFT_LONGITUDE:	"20.2482",
            TARGET_NAME:	"JUPITER",
            TITLE:	"PJ50 Jet N6",
            TOKEN_ID:	[],
          }
        }
      ],
    }),
    computed: {
      fullData: function() {
        let newArray = []
        newArray = this.combinedList.slice()
        for (const combinedItem of newArray) {
          for (const imageGroup of this.imageList) {
            if (imageGroup.id === combinedItem.from_images)
            combinedItem.metadata = imageGroup.metadata
            combinedItem.image_b = imageGroup.image_b
            combinedItem.image_g = imageGroup.image_g
            combinedItem.image_r = imageGroup.image_r
          }
          // combinedItem.from_images
        }
        return newArray
      }
    },
    methods: {
      ...mapMutations([
        'saveFullData', // map `this.increment()` to `this.$store.commit('increment')`
      ]),

      getRequest(client) {
        this.getImageList(client)
        this.getCombinedList(client)
      },

      async getImageList(client) {
        this.imageList = await client.get('/rgb_list')
        this.imageList = this.imageList.data
      },

      async getCombinedList(client) {
        this.combinedList = await client.get('/combined_list')
        this.combinedList = this.combinedList.data
      },
    },
    mounted() {
      const url = 'https://junonian.earth/api'
      const client = axios.create({
        baseURL: url,
        timeout: 1000,
      });
      this.getRequest(client)
      this.saveFullData(this.fullData)
    }
  }
</script>

<style>
.main-content {
    /* width: 100%; */
    padding: 0 64px;
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
    font-weight: normal;
    font-size: 48px;
    line-height: 62px;
  }

  .header-btns{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    border-radius: 16px;
    cursor: pointer;
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

  .content__header .btn-border {
    margin-left: 8px;
  }

  .slider-wrapped {

  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 40px;
  }

  .image {
    width: 600px;

  }

  @media (max-width:1399px)  {
    .gallery {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width:1000px)  {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
</style>
