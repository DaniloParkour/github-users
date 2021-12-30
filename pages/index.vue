<template>
  <v-container fluid>
    <v-row justify="center">
      <h2 class="ml-4 mt-2">GitHub Users</h2>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-card
          class="mx-auto"
          color="pink"
          dark
          max-width="800"
        >
          <v-text-field
            v-model="searchByName"
            label="Search"
            class="pt-2 px-4"
            background-color="rgba(0,0,0,.2)"
            prepend-inner-icon="mdi-magnify"
            append-icon="mdi-send"
            filled
            light
            color="white"
            rounded
            @click:append="searchUser"
            @keyup.13="searchUser"
          />
          <v-card-title>
            <v-row>
              <v-col cols="4">
                <v-avatar
                  :style="
                    'background: radial-gradient(rgba(0,0,0,.4) 25%, rgba(0,0,0,.05)); ' +
                    (
                      user.avatar_url
                      ? 'border: 2px solid white;'
                      : 'border: 2px solid gray;')
                  "
                  height="4em"
                  width="4em"
                >
                  <img
                    :src="user.avatar_url"
                    :alt="user.name"
                  >
                </v-avatar>
                <span class="text-h6 font-bold">{{user.login}}</span>
              </v-col>
              <v-col cols="4">
                <div class="flex-column" align="center" style="margin: 0 auto">
                  <div class="font-bold"> {{user.name}} </div>
                  <div class="caption" > {{user.company}} </div>
                </div>
              </v-col>
              <v-col cols="4">
                <v-row no-gutters dense>
                  <v-col cols="12">
                    <v-icon dense class="caption">
                      mdi-clock
                    </v-icon>
                    <span class="caption">{{'created at ' + ((user.created_at || '').substring(0,10))}}</span>
                  </v-col>
                </v-row>
                <v-row no-gutters dense>
                  <v-col cols="12">
                    <v-icon dense class="caption">
                      mdi-clock
                    </v-icon>
                    <span class="caption">{{'updated at ' + (user.updated_at || '').substring(0,10)}}</span>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold" style="background: rgba(0,0,0,.085); border: 2px solid rgba(0,0,0,.1);">
            {{
              user.bio || 'User has not a bio'
            }}
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row
                class="my-2"
                dense
                no-gutters
              >
                <v-col cols="9">
                  <div>
                    <v-icon class="mr-1">
                      mdi-mail
                    </v-icon>
                    <span class="subheading">{{user.mail}}</span>
                  </div>
                  <div>
                    <v-icon class="mr-1">
                      mdi-twitter
                    </v-icon>
                    <span class="subheading">{{user.twitter_username}}</span>
                  </div>
                  <div>
                    <v-icon class="mr-1">
                      mdi-post
                    </v-icon>
                    <span class="subheading">{{user.blog}}</span>
                  </div>
                </v-col>
                <v-col cols="3">
                  <div>
                    <v-icon class="mr-1">
                      mdi-book
                    </v-icon>
                    <span class="subheading">{{(user.public_repos || 0) + ' repositories'}}</span>
                  </div>
                  <div>
                    <v-icon class="mr-1">
                      mdi-account-multiple
                    </v-icon>
                    <span class="subheading">{{(user.followers || 0) + ' followers'}}</span>
                  </div>
                  <div>
                    <v-icon class="mr-1">
                      mdi-shoe-print
                    </v-icon>
                    <span class="subheading">{{(user.following || 0) + ' following'}}</span>
                  </div>
                </v-col>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="top">
      <v-col cols="7">
        <v-expansion-panels>
          <v-expansion-panel @click="searchRepositories">
            <v-expansion-panel-header>Repositories {{user.public_repos ? '('+user.public_repos+')' : ''}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div v-for="repo in reposList" :key="repo">
                <v-card
                  outlined
                  target="_blank"
                  :href="repo.html_url"
                  class="mb-2"
                >
                <v-list-item dense three-line>
                    <v-list-item-content>
                      <v-row>
                        <v-col cols="10" class="pl-8">
                          <v-row>
                            <div class="text-overline">
                              {{repo.full_name}}
                            </div>
                          </v-row>
                          <v-row>
                            <v-list-item-title class="text-h6 pb-2">
                              {{repo.name}}
                            </v-list-item-title>
                          </v-row>
                        </v-col>
                        <v-col cols="2">
                          <v-row>
                            <div
                              :class="'caption '+ (
                                repo.private 
                                ? 'red--text lighten-4' 
                                : 'green--text lighten-4'
                              )"
                            >
                              {{repo.private ? ' Private' : 'Public'}}
                            </div>
                          </v-row>
                          <v-row>
                            <v-list-item-subtitle>
                              {{repo.language}}
                            </v-list-item-subtitle>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel @click="searchFollowers">
            <v-expansion-panel-header>Followers  {{user.followers ? '('+user.followers+')' : ''}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div  v-for="follower in followersList" :key="follower">
                <v-card
                  outlined
                  class="mb-2"
                >
                <v-list-item dense three-line>
                    <v-list-item-content>
                      <v-row>
                        <v-col cols="10">
                          <a :href="follower.html_url" target="_blank" style="text-decoration: none; color: white;">
                            <v-row>
                              <v-col
                                cols="2" class="pl-8">
                                <div class="text-overline">
                                    <v-avatar
                                      height="4em"
                                      width="4em"
                                      style="border: 2px solid white"
                                    >
                                      <img
                                        :src="follower.avatar_url"
                                      >
                                    </v-avatar>
                                  </div>
                              </v-col>
                              <v-col cols="10">
                                <v-list-item-title class="text-h6 pb-2">
                                  {{follower.login}}
                                </v-list-item-title>
                              </v-col>
                              
                            </v-row>
                          </a> 
                        </v-col>
                        <v-col cols="2">
                          <v-btn @click="serachLogin(follower.login)">
                            <v-icon left>
                              mdi-magnify
                            </v-icon>
                            Search
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </div>
              </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel @click="searchFollowing">
            <v-expansion-panel-header>Following  {{user.following ? '('+user.following+')' : ''}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div  v-for="following in followingList" :key="following">
                <v-card
                  outlined
                  class="mb-2"
                >
                <v-list-item dense three-line>
                    <v-list-item-content>
                      <v-row>
                        <v-col cols="10">
                          <a :href="following.html_url" target="_blank" style="text-decoration: none; color: white;">
                            <v-row>
                              <v-col
                                cols="2" class="pl-8">
                                <div class="text-overline">
                                    <v-avatar
                                      height="4em"
                                      width="4em"
                                      style="border: 2px solid white"
                                    >
                                      <img
                                        :src="following.avatar_url"
                                      >
                                    </v-avatar>
                                  </div>
                              </v-col>
                              <v-col cols="10">
                                <v-list-item-title class="text-h6 pb-2">
                                  {{following.login}}
                                </v-list-item-title>
                              </v-col>
                              
                            </v-row>
                          </a> 
                        </v-col>
                        <v-col cols="2">
                          <v-btn @click="serachLogin(following.login)">
                            <v-icon left>
                              mdi-magnify
                            </v-icon>
                            Search
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
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
import RepositorieDTO from '~/model/RepositorieDTO';
export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    user: {} as UserDTO,
    searchByName: '' as String,
    reposList: [] as Array<RepositorieDTO>,
    followersList: [] as Array<UserDTO>,
    followingList: [] as Array<UserDTO>,
  }),
  methods: {
    searchUser() {
      this.$axios.$get('users/'+this.searchByName)
      .then((resp) => {
        this.user = resp
        this.reposList = [] as Array<RepositorieDTO>
        this.followersList = [] as Array<UserDTO>
        this.followingList = [] as Array<UserDTO>
      })
    },
    serachLogin(login: String) {
      this.searchByName = login
      this.searchUser()
    },
    searchRepositories() {
      this.$axios.$get('users/' + this.user.login + '/repos')
      .then((resp) => { this.reposList = resp })
    },
    searchFollowing() {
      this.$axios.$get('users/' + this.user.login + '/following')
      .then((resp) => { this.followingList = resp })
    },
    searchFollowers() {
      this.$axios.$get('users/' + this.user.login + '/followers')
      .then((resp) => { this.followersList = resp })
    }
  }
})
</script>

<style scoped>
.border {
  border: 2px solid white !important;
}
</style>
