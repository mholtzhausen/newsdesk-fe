<script setup>
import { format } from 'date-fns';
const formatDate = function (date) {
  return format(date, "d MMM — H'·'m");
};

defineProps({
  image: { type: String, default: '' },
  imageLeft: { type: Boolean, default: false },
  title: { type: String, default: '' },
  provider: { type: String, default: '' },
  date: { type: Date, default: undefined },
  link: { type: String, default: 'javascript:;' },
});
</script>

<template>
  <a class="article first-article" :href="link">
    <figure
      v-if="image"
      :class="{ 'article-image': true, 'is-4by3': true, imageLeft }"
    >
      <img :src="image" alt="" />
    </figure>
    <div class="article-body">
      <h2 class="article-title">{{ title }}</h2>
      <p class="article-content"><slot></slot></p>
      <footer class="article-info">
        <span v-if="provider">By {{ provider }}</span>
        <span v-if="date">{{ formatDate(date) }}</span>
      </footer>
    </div>
  </a>
</template>

<style scoped>
@media screen and (min-width: 1000px) {
  .first-article .article-image.imageLeft {
    order: 0;
  }
}
</style>
