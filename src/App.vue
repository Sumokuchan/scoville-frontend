<template>
  <v-app dark>
    <v-toolbar app>
      <router-link to="/">
        <v-toolbar-title class="headline text-uppercase">
          <span>Scoville</span>
          <span class="font-weight-light"> API Demo</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn flat to="/create">
        <span class="mr-2">Create Article </span>
      </v-btn>
    </v-toolbar>

    <v-content>
       <v-container fluid grid-list-xl id="content-wrapper">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>
