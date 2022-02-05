<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :is-admin="isAdmin"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.post-list {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  padding: 30px;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

@media (max-width: 1023px) {
  .post-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .post-list {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
    grid-gap: 20px;
  }
}
</style>
