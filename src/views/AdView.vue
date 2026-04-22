<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img
            height="400px"
            src="https://picsum.photos/id/100/800/400"
            cover
          ></v-img>
          
          <v-card-text>
            <h1 class="text--primary mb-3">French Avenue - Oud Satin</h1>
            <p>
              Роскошный аромат с нотами уда, розы и ванили. 
              Очень стойкий и насыщенный парфюм для особых случаев.
              Идеально подходит для вечерних выходов и холодного времени года.
            </p>
          </v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" color="orange">Edit</v-btn>
            <v-btn class="success" color="green">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdView'
}
</script>