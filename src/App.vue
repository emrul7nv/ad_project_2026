<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            КИПУ
          </v-list-item-title>
          <v-list-item-subtitle>
            Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <template v-slot:prepend>
            <span style="font-size: 20px;">{{ link.icon }}</span>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title>
        <v-btn to="/" text>Home</v-btn>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <span style="margin-right: 8px;">{{ link.icon }}</span>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      links: [
        { title: "Login", icon: "🔒", url: "/login" },
        { title: "Registration", icon: "📝", url: "/registration" },
        { title: "Orders", icon: "📦", url: "/orders" },
        { title: "New ad", icon: "➕", url: "/new" },
        { title: "My ads", icon: "📋", url: "/list" }
      ]
    }
  }
}
</script>