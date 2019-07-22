<template>
<div class="row">
  <div class="list-container w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
    <nuxt-link :to="'/post/' + listContent[0]._seqId" class="box">
      <div class="bgi">
        <div class="bgi-spacer"></div>
        <div class="bgi-inner" :style="'background-image: url(\'https://agirls.aottercdn.com' + listContent[0].coverImg + '\')'"></div>
      </div>
      <div class="article">
        <h2 class="article-title">{{ listContent[0].title }}</h2>
        <p class="article-p">
          <span class="text-gray">{{ new Date(listContent[0]._created).formatMMDDYYYY() }}</span> <span class="text-primary">by {{ listContent[0].authorName }}</span>
        </p>
      </div>
    </nuxt-link>
  </div>
  <div class="list-container w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
    <div class="box-container mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0">
      <nuxt-link :to="'/post/' + listContent[n]._seqId" class="box" v-for="n in 3" :key="n">
        <div class="bgi">
          <div class="bgi-spacer"></div>
          <div class="bgi-inner" :style="'background-image: url(\'https://agirls.aottercdn.com' + listContent[n].coverImg + '\')'"></div>
        </div>
        <div class="article">
          <h2 class="article-title">{{ listContent[n].title }}</h2>
          <p class="article-p">
            <span class="text-gray">{{ new Date(listContent[n]._created).formatMMDDYYYY() }}</span> <span class="text-primary">by {{ listContent[n].authorName }}</span>
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
  <div class="list-container w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3">
    <div class="box-container mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0">
      <nuxt-link :to="'/post/' + listContent[n+3]._seqId" class="box" v-for="n in 3" :key="n">
        <div class="bgi">
          <div class="bgi-spacer"></div>
          <div class="bgi-inner" :style="'background-image: url(\'https://agirls.aottercdn.com' + listContent[n+3].coverImg + '\')'"></div>
        </div>
        <div class="article">
          <h2 class="article-title">{{ listContent[n+3].title }}</h2>
          <p class="article-p">
            <span class="text-gray">{{ new Date(listContent[n+3]._created).formatMMDDYYYY() }}</span> <span class="text-primary">by {{ listContent[n+3].authorName }}</span>
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['listContent']
}

Date.prototype.formatMMDDYYYY = function() {
  return (this.getMonth() + 1) +
    '/' + this.getDate() +
    '/' + this.getFullYear();
}
</script>

<style>
.row {
  @apply w-screen flex flex-row flex-wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.list-container {
  padding-left: 15px;
  padding-right: 15px;
}

.box-container {
  @apply flex flex-col justify-between;
}

.box {
  @apply flex flex-row mb-2;
}

.bgi {
  @apply relative flex-1 flex-shrink-0;
}

.article {
  @apply flex-1 flex-shrink-0 ml-2 flex flex-col;
}

.bgi-spacer {
  z-index: -1;
  padding-top: 56.25%;
}

.bgi-inner {
  @apply absolute inset-0 bg-no-repeat bg-center bg-bgi bg-cover;
  z-index: 1;
}

.article-title {
  @apply font-medium overflow-hidden mb-2;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  color: #333;
  max-height: 4.2rem;
  line-height: 1.4rem;
  font-size: .925rem;
}

.article-p {
  @apply mt-auto mb-0;
  font-size: .74rem;
}

.list-container:first-child .box {
  @apply flex flex-col h-full mb-4;
}

.list-container:first-child .bgi {
  @apply mb-2;
}

.list-container:first-child .article {
  @apply ml-0;
}

.list-container:first-child .article-title {
  @apply my-2;
  font-size: 1.11rem;
}
</style>
