<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article class="post-card">
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="post-content">
        <div class="post-date">06.02.2022</div>
        <div class="item-price">Free</div>
        <h1 class="post-title">{{ title }}</h1>

        <p class="post-description">{{ previewText }}</p>
        <ul class="post-tags">
          <li class="post-tag">plants</li>
          <li class="post-tag">home</li>
          <li class="post-tag">decor</li>
        </ul>
        <a href="" class="post-cta">More info</a>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
  },
};
</script>

<style scoped>
.post-preview {
  display: block;
  /* width: 90%; */
}

.post-card {
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  background-color: white;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: black;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.post-content {
  padding: 30px;
  text-align: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 30px;
  grid-template-areas:
    "date price"
    "title title"
    "description description"
    "tags tags"
    "cta .";
}

.post-date {
  grid-area: date;
  color: #c5c5c5;
  font-weight: 700;
  text-align: left;
  margin-bottom: 20px;
}
.item-price {
  grid-area: price;
  text-align: right;
  color: #275a81;
  font-weight: 700;
}
.post-title {
  grid-area: title;
  margin: 0;
  text-align: left;
  font-size: 24px;
  margin-bottom: 10px;
}
.post-description {
  grid-area: description;
  margin: 0;
  text-align: left;
  margin-bottom: 15px;
}
.post-tags {
  grid-area: tags;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}
.post-tag {
  list-style: none;
  color: #9da9af;
  padding: 2px 10px;
  border: 1px solid #9da9af;
  font-weight: 500;
  font-size: 12px;
  border-radius: 10px;
}

.post-cta {
  grid-area: cta;
  display: block;
  background-image: repeating-linear-gradient(
    -60deg,
    #1d6d92,
    #1d6d92 10px,
    #275a81 10px,
    #275a81 20px
  );
  color: white;
  border-radius: 10px;
  padding: 10px 25px;
  font-weight: 500;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.post-cta::after {
  position: absolute;
  content: "»";
  top: 9px;
  right: 1em;
  width: 10px;
  height: 10px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

a:hover .post-cta,
a:active .post-cta {
  padding: 10px 35px 10px 15px;
}

a:hover .post-cta::after,
a:active .post-cta::after {
  opacity: 1;
  right: 1.4em;
}
</style>
