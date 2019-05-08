<template>
  <div>
    <h1> ARTICLE {{ article.title }} </h1>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {}
    }
  },

  mounted() {
    fetch(`http://localhost:3000/articles/${this.$route.params.id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(article => (this.article = article))
  }
}
</script>

