<template>
  <v-container fluid grid-list>
    <v-layout row wrap>
      <v-card v-for="article in articles" :key="article._id" style="margin: 10px;">
        <v-card-title primary-title>
          <div class="headline">{{ article.title }}</div>
        </v-card-title>
        <v-card-text>
          <div v-html="parseMarkdown(article.content)"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :to="`article/${article._id}`"> Read More </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import marked from "marked";

export default {
  name: "ListArticles",

  data() {
    return {
      articles: []
    }
  },

  mounted() {
    fetch("http://localhost:3000/articles")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(articles => (this.articles = articles))
  },

  methods: {
    parseMarkdown(content) {
      return marked(content)
    }
  }
}
</script>
