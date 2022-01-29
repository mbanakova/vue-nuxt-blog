<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png"
      title="Hello"
      previewText="My 1st post"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png"
      title="Hello 2"
      previewText="My 2nd post"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png"
      title="Hello 3"
      previewText="My 3rd post"
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
  },
};
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
