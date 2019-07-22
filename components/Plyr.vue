<template>
<div class="video">
  <vue-plyr>
    <div class="plyr__video-embed">
      <iframe :src="decodeURIComponent(src).replace(/watch\?v=/g, 'embed\/')" allowfullscreen allowtransparency allow="autoplay">
      </iframe>
    </div>
  </vue-plyr>
</div>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style>
.video {
  @apply w-full;
}
</style>
