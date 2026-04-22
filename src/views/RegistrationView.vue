<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                label="Email"
                type="email"
                variant="outlined"
                class="mb-3"
                v-model="email"
                :rules="emailRules"
                required
              >
              </v-text-field>
              
              <v-text-field
                label="Password"
                type="password"
                variant="outlined"
                class="mb-3"
                v-model="password"
                :rules="passwordRules"
                required
              >
              </v-text-field>
              
              <v-text-field
                label="Confirm Password"
                type="password"
                variant="outlined"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                required
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary" 
              @click="onSubmit"
              :disabled="!valid"
            >
              Create Account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegistrationView',
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password confirmation is required',
        v => v === this.password || 'Passwords must match'
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        
        // Отправляем в store
        this.$store.dispatch('registerUser', user)
        
        // Очистка формы
        this.email = ""
        this.password = ""
        this.confirmPassword = ""
        this.$refs.form.reset()
        
        // Перенаправление на главную страницу
        this.$router.push('/')
      }
    }
  }
}
</script>