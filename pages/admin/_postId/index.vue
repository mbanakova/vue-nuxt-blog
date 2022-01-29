<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Max",
        title: "Title1515",
        thumbnailLink:
          "https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png",
        content: "awesome post",
      },
    };
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
