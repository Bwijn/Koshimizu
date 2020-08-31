import axios from 'axios'


export const actions = {

  // 获取热门文章标题
  fetchArticleTitle({commit}) {
    return this.$axios
      .$get('http://localhost:3000/article/title')
      .then(response => {
        commit('updateArticleTitle', response.data)
      })
  },

  //获取 搜索结果
  fetch_search_result({state,commit,$axios}, payload) {
    console.log("FETCH_SEARCH_RESULT");
    console.log("PAYLOAD:", payload);
    this.$axios.$get('/search/', {params: {content: payload}}).then(res => {
      commit('fill_items',res)
      console.log('res => ', res);
      console.log('payload => ', payload);
      this.$router.push("/search")
    });

  },

}

export const state = () => ({
  index_items: null
})

export const mutations = {
  fill_items(state, content) {
    console.log('fill_items  => ', content);
    state.index_items = content
  }

}



