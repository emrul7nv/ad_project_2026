<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">My ads</h1>
        
        <v-card 
          v-for="ad in ads" 
          :key="ad.id" 
          class="mb-3" 
          max-width="1000"
        >
          <v-row>
            <v-col cols="4">
              <v-img :src="ad.src" height="175px" cover></v-img>
            </v-col>
            
            <v-col cols="8">
              <h2 class="text--primary">{{ ad.title }}</h2>
              <p style="height: 85px; overflow: hidden; text-overflow: ellipsis;">
                {{ ad.desc }}
              </p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  color="warning" 
                  variant="text"
                  :to="'/ad/' + ad.id"
                >
                  Edit
                </v-btn>
                <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
                  Open
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdListView',
  data() {
    return {
      ads: [
        {
          title: "French Avenue - Oud Satin",
          desc: "Роскошный аромат с нотами уда, розы и ванили. Очень стойкий и насыщенный парфюм для особых случаев.",
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