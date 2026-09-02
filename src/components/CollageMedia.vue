<script setup>
defineProps({
  background: {
    type: String,
    required: true
  },
  front: {
    type: String,
    required: true
  },
  back: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="collage-media">
    <img class="collage-media__bg" :src="background" alt="" width="1189" height="684" />
    <img class="collage-media__back" :src="back" alt="" width="445" height="334" />
    <img class="collage-media__front" :src="front" alt="" width="461" height="346" />
  </div>
</template>

<style scoped>
.collage-media {
  position: relative;
  width: 730px;
  max-width: 100%;
  height: 545px;
  overflow: clip;
  background: #fff;
}

.collage-media__bg,
.collage-media__back,
.collage-media__front {
  position: absolute;
  object-fit: cover;
}

.collage-media__bg {
  top: -15px;
  width: 1189px;
  height: 684px;
  opacity: 0.45;
}

.collage-media__back {
  left: -42px;
  top: 11px;
  width: 445px;
  height: 334px;
}

.collage-media__front {
  left: 306px;
  top: 187px;
  width: 461px;
  height: 346px;
}
</style>
