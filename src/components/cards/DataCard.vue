<template>
  <v-card>
    <v-card-title>{{ datatype }}</v-card-title>

    <v-card-text>{{ data }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "data-card",
  props: {
    datatype: String,
    data: String
  },
  methods: {}
};
</script>

<style scoped></style>
