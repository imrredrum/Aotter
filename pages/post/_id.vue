<template>
<div class="container">
  <article>
    <div class="post">
      <h1 class="post-title">{{ articleData.title }}</h1>
      <div class="post-info">
        <p class="postdate">
          {{ new Date(articleData._created).formatMMDDYYYY() }}
          <span class="editor">
            <nuxt-link :to="'/posts?authorUid=' + articleData.authorUid">by {{ articleData.authorName }}</nuxt-link>
          </span>
        </p>
        <ul class="hot-tags">
          <li v-for="item in articleData.tags">
            <nuxt-link :to="`/tag/${item}`">{{ item }}</nuxt-link>
          </li>
        </ul>
        <hr>
      </div>
      <div class="post-note">
        <p class="note">{{ articleData.summary }}</p>
      </div>
      <div class="post-content" v-html="articleData.content.replace(/watch\?v=/g, 'embed\/').replace(/\/media/g, 'https:\/\/agirls.aotter.net\/media')"></div>
    </div>
  </article>
</div>
</template>

<script>
export default {
  data() {
    return {
      articleData: {},
      title: '',
      meta: [],
    }
  },
  head () {
    return {
      title: this.title,
      meta: this.meta
    }
  },
  async asyncData({
    $axios,
    params
  }) {
    let { success } = await $axios.$get(`/api/post/${params.id}`)
    return {
      articleData: success,
      title: success.title,
      meta: [
        { hid: 'description', name: 'description', content: success.seoDescription },
        { hid: 'title', name: 'title', content: success.seoTitle },
        { hid: 'keywords', name: 'keywords', content: success.seoKeywords }
      ]
    }
  },
}

Date.prototype.formatMMDDYYYY = function() {
  return (this.getMonth() + 1) +
    '/' + this.getDate() +
    '/' + this.getFullYear();
}
</script>

<style>
.container {
  @apply min-h-screen flex flex-col justify-start items-start text-left mx-auto max-w-full;
  padding-right: 15px;
  padding-left: 15px;
}

article {
  @apply w-full;
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
}

.post {
  @apply pb-6;
  padding-top: 5vh;
}

.post-title {
  @apply text-2xl font-bold mb-2;
  line-height: 2.2rem;
}

.post-info {
  @apply flex flex-col items-start;
}

.postdate {
  @apply mb-4 text-base;
  color: #434343;
}

.editor {
  color: #64c2c2;
}

.hot-tags {
  @apply flex flex-row m-0 p-0;
}

.hot-tags li {
  @apply block;
  font-size: .8rem;
  margin: 2px;
  line-height: 22px;
  list-style: none;
}

.hot-tags a {
  @apply block px-2;
  color: #adadad;
  background: #efefef;
  padding-top: 2px;
  padding-bottom: 2px;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
}

.hot-tags a:hover {
  background: #45babd;
  color: #fff;
}

hr {
  @apply my-4 border-0 border-t w-full;
  border-color: rgba(0, 0, 0, .1);
}

.post-note {
  @apply w-full px-6 py-4 mb-6;
  background-color: #efefef;
}

.note {
  @apply m-0 text-center font-medium;
  color: #3c7f89;
  font-size: 1.08em;
  line-height: 1.7em;
}

.post-content p {
  @apply mb-6;
  color: #434343;
  font-size: 1.05rem;
  line-height: 1.7em;
}

.post-content a {
  color: #3c7f89;
}
</style>
