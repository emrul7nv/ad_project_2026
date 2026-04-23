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
        
        <v-list-item
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <template v-slot:prepend>
            <span style="font-size: 20px;">🚪</span>
          </template>
          <v-list-item-title>Logout</v-list-item-title>
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
        
        <v-btn
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <span style="margin-right: 8px;">🚪</span>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-snackbar
      v-model="showError"
      multi-line
      :timeout="3000"
      color="error"
    >
      {{ errorMessage }}
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="closeError"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "📦", url: "/orders" },
          { title: "New ad", icon: "➕", url: "/new" },
          { title: "My ads", icon: "📋", url: "/list" }
        ]
      } else {
        return [
          { title: "Login", icon: "🔒", url: "/login" },
          { title: "Registration", icon: "📝", url: "/registration" }
        ]
      }
    },
    errorMessage() {
      return this.$store.getters.error
    },
    showError: {
      get() {
        return this.$store.getters.error !== null
      },
      set(value) {
        if (!value) {
          this.closeError()
        }
      }
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>