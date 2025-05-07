<template>
  <v-card :loading="loading">
    <v-img
      :src="resolveimage(content)"
      class="white--text align-end img"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      @click="preview(content)"
      lazy-src="../../../public/img/passport.jpg"
    >
      <v-card-title></v-card-title>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-actions>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-if="!loading"
        :href="this.content"
        :download="this.title + '.jpg'"
      >
        <v-icon>mdi-download-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "image-card",
  props: {
    title: String,
    content: String,
    loading: Boolean
  },
  methods: {
    resolveimage: function(path) {
      return path;
    },
    preview(imgUrl) {
      this.$ImagePreview.show(imgUrl);
    }
  }
};
</script>

<style scoped>
.img {
  width: 400px;
  display: block;
  cursor: pointer;
  margin: auto;
}

.v-progress-circular {
  margin: auto auto;
  color: blue;
}
</style>
