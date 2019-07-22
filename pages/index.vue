<template>
<div class="container">
  <div class="section">
    <sectionTitle1 content='最新文章' />
    <list :listContent="listContent" />
  </div>
  <div class="section">
    <sectionTitle2 content='最新影片' />
  </div>
</div>
</template>

<script>
import Title from '~/components/title.vue'
import List from '~/components/list.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(VuePlyr)

export default {
  data() {
    return {
      listContent: {},
    }
  },
  async asyncData({
    $axios
  }) {
    let data = await $axios.$get('/api/post/list?show=7')
    return {
      listContent: data.success.list
    }
  },
  components: {
    sectionTitle1: Title,
    List,
    sectionTitle2: Title
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
