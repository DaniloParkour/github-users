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
      <v-col cols="9">
         <v-text-field label="Search" prepend-inner-icon="mdi-search" filled rounded color="#DF89A8"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="rounded-xl mt-2">
            <v-row>
              <v-col cols="3" align="left">
                <v-avatar size="120" tile color="#AA88AA" class="rounded-circle ml-2" />
              </v-col>
              <v-col cols="9" class="px-2">
                <h3 class="grey--text">Name Name</h3>
                <p class="grey--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dolorum, 
                      quibusdam eum pariatur, laboriosam quia provident placeat corrupti repellat odio at.
                       Hic commodi .
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-avatar color="#151515" size="30" class="ml-2">
                  <v-icon small color="pink">mdi-calendar</v-icon>
                </v-avatar>
                200
              </v-col>
              <v-col cols="2">
                <v-avatar color="#151515" size="30" class="ml-2">
                  <v-icon small color="pink">mdi-star</v-icon>
                </v-avatar>
                80
              </v-col>
              <v-col cols="2">
                <v-avatar color="#151515" size="30" class="ml-2">
                  <v-icon small color="pink">mdi-heart</v-icon>
                </v-avatar>
                20
              </v-col>
              <v-col cols="2">
                <v-avatar color="#151515" size="30" class="ml-2">
                  <v-icon small color="pink">mdi-file</v-icon>
                </v-avatar>
                45%
              </v-col>
              <v-col cols="4" align="end">
                <v-btn rounded color="pink" class="mr-2"><v-icon left>mdi-plus</v-icon>Add to cart</v-btn>
              </v-col>
            </v-row>
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
