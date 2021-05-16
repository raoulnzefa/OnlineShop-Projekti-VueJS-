<template>
  <div class="slides">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ccc"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://storage-asset.msi.com/global/picture/banner/banner_16206346080811b46b44b65364efbf6898a5b9cbc5.jpeg"></b-carousel-slide>

      <b-carousel-slide img-src="https://storage-asset.msi.com/global/picture/banner/banner_1620635919f28c2997eeedd568b072ea04ca5a67c1.jpeg"></b-carousel-slide>

      <b-carousel-slide img-src="https://storage-asset.msi.com/global/picture/banner/banner_16206352348866ed42a0c153cf608565d872e4765e.jpeg"></b-carousel-slide>

      <b-carousel-slide img-src="https://storage-asset.msi.com/global/picture/banner/banner_1620637220ba7bd83b787a67761ef60081d80bee56.jpeg"></b-carousel-slide>

    </b-carousel>

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slides{
  width: 1200px;
        margin-left: auto;
        margin-right: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
