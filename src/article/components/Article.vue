<template>
  <v-card>
    <v-card-title primary-title>
      <div class="headline">{{ article.title }}</div>
    </v-card-title>
    <v-card-text>
      <div v-html="parseMarkdown(article.content)"></div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn> Edit </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import marked from "marked";

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
  },

  methods: {
    parseMarkdown(content) {
      return marked(content)
    }
  }
}
</script>

