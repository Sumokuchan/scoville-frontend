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
      <v-btn color="primary" v-if="isEditing == false" @click="isEditing = !isEditing"> Edit </v-btn>
      <v-btn color="primary" v-if="isEditing == true" @click="updateArticle()"> Save </v-btn>

      <v-btn color="error" v-if="isEditing == false" @click="deleteArticle(article._id)"> Delete </v-btn>
      <v-btn color="error"  v-if="isEditing == true" @click="isEditing = !isEditing"> Cancel </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import marked from "marked";
import deleteArticle from "@/api/deleteArticle.js"
import fetchArticleById from "@/api/fetchArticleById.js"
import updateArticle from "@/api/updateArticle.js"

export default {
  name: "Article",
  data() {
    return {
      article: {},
      isEditing: false
    }
  },

  mounted() {
    fetchArticleById(this.$route.params.id).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Scoville Backend::fetchArticleById error...")
      }
    }).then(article => this.article = article)
  },

  methods: {
    parseMarkdown(content) {
      if(content) return marked(content)
    },

    deleteArticle(id) {
      deleteArticle(id).then(response => {
        if(response.ok) {
          this.$router.push('/')
        } else {
          throw new Error("Scoville Backend::deleteArticle error...")
        }
      })
    },

    updateArticle() {
      this.isEditing = !this.isEditing
      updateArticle(this.article).then(response => {
        if(response.ok) {
          console.log(response);
          
        } else {
          throw new Error("Scoville Backend::updateArticle error...")
        }
      })
    }
  }
}
</script>

