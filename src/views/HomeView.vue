<template>
  <div>
    <!-- Карусель -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.src"
              cover
            >
              <div class="ad-link">
                <v-btn class="error" :to="'/ad/' + ad.id">
                  {{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <!-- Сетка с карточками -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-img
              :src="ad.src"
              height="200px"
              cover
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ ad.title }}</h3>
                <div>{{ ad.desc }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised color="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      ads: [
        {
          title: "French Avenue - Oud Satin",
          desc: "Роскошный аромат с нотами уда, розы и ванили",
          promo: true,
          src: "https://picsum.photos/id/100/400/300",
          id: "1"
        },
        {
          title: "French Avenue - Amber Oud",
          desc: "Теплый янтарный аромат с древесными оттенками",
          promo: true,
          src: "https://picsum.photos/id/101/400/300",
          id: "2"
        },
        {
          title: "French Avenue - Vetiver Noir",
          desc: "Свежий ветиверовый аромат с цитрусовыми нотами",
          promo: true,
          src: "https://picsum.photos/id/102/400/300",
          id: "3"
        },
        {
          title: "French Avenue - Leather Rush",
          desc: "Кожаный аромат с пряными и древесными акцентами",
          promo: true,
          src: "https://picsum.photos/id/103/400/300",
          id: "4"
        }
      ]
    }
  }
}
</script>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>