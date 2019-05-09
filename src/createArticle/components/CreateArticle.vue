<template>
  <form v-on:submit.prevent="onPublish()">
      <v-flex>
        <v-text-field
          placeholder="Article Title"
          v-model="article.title"
          outline
        ></v-text-field>
      </v-flex>

      <v-flex>
        <v-textarea
          outline
          v-model="article.content"
          placeholder="Write your article. (Markdown)"
        ></v-textarea>
      </v-flex>

      <v-flex>
        <v-text-field
          placeholder="Author"
          v-model="article.author"
          outline
        ></v-text-field>
      </v-flex>
    <v-btn color="success" @click="onPublish()">
      Publish Article
    </v-btn>
  </form>
</template>

<script>
export default {
  name: "CreateArticle",

  data() {
    return {
      article: {
        title: "",
        content: ""
      },
      inProgress: false
    }
  },

  methods: {
    onPublish() {
      this.article.created = new Date().toLocaleDateString("fr-FR")
      fetch("http://localhost:3000/articles", {
        method: "POST",
        body: JSON.stringify(this.article),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(r => console.log(r))
    }
  }
}
</script>
