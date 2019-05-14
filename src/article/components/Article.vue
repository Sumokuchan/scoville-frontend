<template>
  <v-card>
    <v-card-title  v-if="!isEditing"  primary-title>
      <div class="headline">{{ article.title }}</div>
    </v-card-title>
    <v-card-text>
      <div v-if="!isEditing" v-html="parseMarkdown(article.content)"></div>
      <div v-else>
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

      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="isEditing = !isEditing"> Edit </v-btn>
      <v-btn color="error" @click="deleteArticle(article._id)"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import marked from "marked";

export default {
  name: "Article",
  data() {
    return {
      article: {},
      isEditing: false
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
      if(content) return marked(content)
    },

    deleteArticle(id) {
      //call to delete
      console.info(`Delete article ${id}`)
    }
  }
}
</script>

