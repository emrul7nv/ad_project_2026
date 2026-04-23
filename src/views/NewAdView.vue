<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
        
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            name="title"
            label="Ad Title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            variant="outlined"
            class="mb-3"
            required
          >
          </v-text-field>
          
          <v-textarea
            name="description"
            label="Ad Description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            variant="outlined"
            class="mb-3"
            rows="4"
            required
          ></v-textarea>
        </v-form>

        <v-row>
          <v-col cols="8">
            <v-btn class="mt-3" color="warning">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <img
              src="https://picsum.photos/id/100/200/150"
              height="150"
              class="mt-3"
              alt="Preview"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-switch
              v-model="promo"
              label="Ad to Promo?"
              color="primary"
            ></v-switch>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="createAd"
              :disabled="!valid || loading"
              :loading="loading"
            >
              Create Ad
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewAdView',
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          src: "https://picsum.photos/id/100/400/300"
        }
        
        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
            this.resetForm()
          })
      }
    },
    resetForm() {
      this.title = ""
      this.description = ""
      this.promo = false
      this.$refs.form.reset()
    }
  }
}
</script>