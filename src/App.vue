<template>
  <v-app>
    <v-row
      align="center"
      justify="space-around"
    >
      <v-btn>Normal</v-btn>
      <v-btn color="primary">
        Primary
      </v-btn>
      <v-btn color="error">
        Error
      </v-btn>
      <v-btn disabled>
        Disabled
      </v-btn>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import vuetify from './plugins/vuetify';

export default Vue.extend({
  name: 'App',
  vuetify,
  components: {
  },

  data: () => ({
    //
  }),
});
</script>
