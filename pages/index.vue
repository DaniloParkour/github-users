<template>
  <v-container fluid>
    <v-row justify="left" align="center">
      <v-col cols="3">
        <v-card class="mb-2 pa-1 twoRoundedVertices" color="#CC7788">
          <v-toolbar color="#DF89A8" dark flat>
            <v-tabs align-with-title>
              <v-tabs-slider color="white"></v-tabs-slider>
              <v-tab>
                <v-btn dark icon>
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </v-tab>
              <v-tab>
                <v-btn dark icon>
                  <v-badge content="2" color="orange">
                    <v-icon>mdi-cart</v-icon>
                  </v-badge>
                </v-btn>
              </v-tab>
            </v-tabs>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.twoRoundedVertices {
  border-radius: 50px 0px 50px 0px !important;
}
.border {
  border: 2px solid white !important;
}
</style>
