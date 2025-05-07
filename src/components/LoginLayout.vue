<template>
  <v-layout fill-height fluid justify-center align-center>
    <v-card width="500" raised class="pa-3 mx-auto">
      <div class="pa-3">
        <router-view />
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "LoginLayout",
  components: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped></style>
