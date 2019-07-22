<template>
<div class="title-container">
  <div class="title-flex">
    <span class="upper-border"></span>
    <span class="title-content">{{ content }}</span>
  </div>
</div>
</template>

<script>
export default {
    props:['content']
}
</script>

<style>
.title-container {
  @apply flex items-start w-full my-4;
}

.title-flex {
  @apply flex flex-col w-full;
}

.upper-border {
  @apply inline-block bg-primary;
  width: 40px;
  height: 4px;
}

.title-content {
  @apply mt-1 font-medium;
  color: #333;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  font-size: 1.295rem;
}
</style>
