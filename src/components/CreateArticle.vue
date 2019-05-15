<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Create your article</div>
        </div>
      </v-card-title>
      <v-card-text>
        <form v-on:submit.prevent="onPublish()">
            <v-flex>
              <v-text-field
                label="Article Title"
                v-model="article.title"
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-textarea
                label="Write your article. (Markdown)"
                v-model="article.content"
              ></v-textarea>
            </v-flex>

            <v-flex>
              <v-text-field
                label="Author"
                v-model="article.author"
              ></v-text-field>
            </v-flex>    
        </form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="onPublish()">
          Publish Article
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbar"
      bottom
      :color="color"
    >
      {{ message }}
      <v-btn
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import publishArticle from "@/api/publishArticle.js"

export default {
  name: "CreateArticle",

  data() {
    return {
      article: {
        title: "",
        content: "",
        author: "",
        created: ""
      },
      inProgress: false,
      snackbar: false,
      message: "",
      color: "success"
    }
  },

  methods: {
    onPublish() {
      this.article.created = new Date().toISOString()
      
      publishArticle(this.article).then(response => {
        if(response.ok) {
          this.$router.push('/')
        } else {
          this.color = "error"
          this.message = "Something bad happened."
          this.snackbar = true
          throw new Error("Scoville Backend::publishArticle error...")
        }
      })
    }
  }
}
</script>