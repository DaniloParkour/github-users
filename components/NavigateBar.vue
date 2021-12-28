<template>
  <nav>
    <v-navigation-drawer v-model="drawer" dark app mini-variant mini-variant-width="100" style="border-right: 4px solid grey">
      <v-list>
        <v-list-item class="mb-12">
          <v-list-item-content>
            <v-icon class="mb-2" large>mdi-alien</v-icon>
              <v-list-item-subtitle align="center">First Item</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list flat>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2">mdi-home</v-icon>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2">mdi-adjust</v-icon>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2">mdi-mail</v-icon>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2">mdi-cog</v-icon>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router to="/">
            <v-list-item-content>
              <v-icon class="mb-2">mdi-alarm</v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list style="position: absolute; bottom:0" class="ml-3" flat>
          <v-list-item router to="/">
            <v-list-item-action>
              <v-icon right>mdi-logout</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () =>({
        drawer: true
    })
})
</script>
