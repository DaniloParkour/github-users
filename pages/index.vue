<template>
  <v-container fluid>
    <v-row justify="center" align="top">
      <h2 class="ml-4 mt-2">GitHub Users</h2>
    </v-row>
    <v-row justify="center" align="top">
      <v-col cols="8">
        <v-card
          class="mx-auto"
          color="pink"
          dark
          max-width="800"
        >
          <v-text-field label="Search" prepend-inner-icon="mdi-magnify" filled rounded />
          <v-card-title>
            <v-row>
              <v-col cols="4">
                <v-avatar height="5em" width="5em">
                  <img
                    :src="avatar_url || 'https://cdn.vuetifyjs.com/images/john.jpg'"
                    :alt="user.name || '+User Name'"
                  >
                </v-avatar>
                <span class="text-h6 font-bold">{{user.login || '+User Login'}}</span>
              </v-col>
              <v-col cols="4">
                <div class="flex-column" justify="left" align="center" style="margin: 0 auto">
                  <div class="text-h4 font-bold"> {{user.name || '+User Name'}} </div>
                  <div class="text-h6"> {{user.company || '+Company Name'}} </div>
                </div>
              </v-col>
              <v-col cols="4">
                <v-row no-gutters dense>
                  <v-col cols="12">
                    <v-icon dense class="caption">
                      mdi-clock
                    </v-icon>
                    <span class="caption">{{'created at ' + (user.created_at || '2021')}}</span>
                  </v-col>
                  <v-col cols="12">
                    <v-icon dense class="caption">
                      mdi-clock
                    </v-icon>
                    <span class="caption">{{'updated at ' + (user.updated_at || '2021')}}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold">
            {{
              user.bio || '+Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.'
            }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row
                align="center"
                justify="end"
              >
                <v-icon class="mr-1">
                  mdi-book
                </v-icon>
                <span class="subheading mr-8">{{(user.public_repo || 0) + ' repositories'}}</span>
                <v-icon class="mr-1">
                  mdi-account-multiple
                </v-icon>
                <span class="subheading mr-8">{{(user.followers || 0) + ' followers'}}</span>
                <v-icon class="mr-1">
                  mdi-shoe-print
                </v-icon>
                <span class="subheading mr-8">{{(user.following || 0) + ' following'}}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="top">
      <v-col cols="7">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Repositories</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="n in 3" :key="n">
                [BIND-DATA]: List public repositories - {{n}}
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Folloewrs</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div  v-for="n in 2" :key="n">
                [BIND-DATA]: List folloewrs - {{n}}
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>Following</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div  v-for="n in 1" :key="n">
                [BIND-DATA]: List Following - {{n}}
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import UserDTO from '~/model/UserDTO';
export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    user: {} as UserDTO,
    reposList: null,
    followersList: null,
    followingList: null,
  })
})
</script>

<style scoped>
.border {
  border: 2px solid white !important;
}
</style>
