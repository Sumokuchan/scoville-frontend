<template>
  <v-container fluid grid-list>
    <v-layout row wrap>
      <v-card v-for="article in articles" :key="article._id">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ article.title }}</div>
            <span> {{article.content}} </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn> Read More </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
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
  }
}
</script>
