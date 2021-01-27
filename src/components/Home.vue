<template>
  <div class="home">
    <v-row no-gutters class="my-md-5 my-sm-5 mx-md-16 mx-sm-2">
      <v-col cols="12" sm="12" md="12">
        <h2 class="mt-10 text-center">LANDING PAGE</h2>
      </v-col>
    </v-row>

    <v-row no-gutters class="my-md-12 my-sm-8 mx-md-16 mx-sm-2">
      <v-col cols="12" sm="12" md="6">
        <h3 class="text-center">Video</h3>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <h3 class="text-center">SUB TITLE</h3>
        <v-form @submit.prevent="addSubscriberLP( user )">
          <v-text-field
            label="Name"
            outlined
            hide-details
            clearable
            rounded
            class="my-2"
            v-model="user.name"
          >
          </v-text-field>
          <v-text-field
            label="E-mail"
            outlined
            hide-details
            clearable
            rounded
            class="my-2"
            v-model="user.email"
          >
          </v-text-field>

          <v-btn type="submit" color="success" class="my-md-8 my-sm-4" block large>
            REGISTER
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-row no-gutters class="my-md-12 my-sm-8 mx-md-16 mx-sm-2">
      <v-col cols="12" sm="12" md="12">
        <h3 class="text-center">Caracteristicas</h3>

        
          <v-list class="mx-auto" max-width="500">
            <v-list-item-group>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon large color="green darken-2">mdi-check-bold</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-btn color="success" class="my-md-12 my-sm-8" block large>
            REGISTER
            </v-btn>
          </v-list>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    items: [
        {
          text: 'Inbox',
        },
        {
          text: 'Star',
        },
        {
          text: 'Send',
        },
        {
          text: 'Drafts',
        }
      ],
      user: []
  }),
  methods: {
    ...mapActions(["addSubscriber"]),

    addSubscriberLP( user ) {
      this.addSubscriber( user );
    },
  },
};
</script>
