<template>
<div class="container">
  <div class="section">
    <sectionTitle1 content='最新文章' />
    <list :listContent="listContent" />
  </div>
  <div class="section">
    <sectionTitle2 content='最新影片' />
    <plyr :src="src" />
  </div>
</div>
</template>

<script>
import Title from '~/components/Title.vue'
import List from '~/components/List.vue'
import Plyr from '~/components/Plyr.vue'

export default {
  data() {
    return {
      listContent: {},
      src: '',
    }
  },
  async asyncData({
    $axios
  }) {
    let listData = await $axios.$get('/api/post/list?show=7&type=article')
    let videoData = await $axios.$get('/api/post/list?show=1&type=video')
    return {
      listContent: listData.success.list,
      src: videoData.success.list[0].videos[0].video.slice(4),
    }
  },
  components: {
    sectionTitle1: Title,
    List,
    sectionTitle2: Title,
    Plyr,
  }
}
</script>

<style>
.container {
  @apply min-h-screen flex flex-col justify-start items-start text-left mx-auto max-w-full;
  padding-right: 15px;
  padding-left: 15px;
}

.section {
  @apply w-full flex flex-col justify-start items-start my-6;
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
}
</style>
