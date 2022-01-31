import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                title: "first post",
                thumbnail:
                  "https://piratepay.us/images/advportfoliopro/images/2_1522742601.jpg",
                previewText: "some text",
              },
              {
                id: "2",
                title: "2nd post",
                thumbnail:
                  "https://piratepay.us/images/advportfoliopro/images/2_1522742601.jpg",
                previewText: "some text",
              },
            ])
            resolve();
          }, 1500);
        })
        // .then((data) => {
        //   context.store.commit("setPosts", data.loadedPosts);
        // })
        // .catch((e) => {
        //   context.error(new Error());
        // });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore