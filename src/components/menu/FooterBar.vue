<template>
  <v-footer app color="accent2" class="white--text">
    <span>Thales Group</span>
    <v-spacer />
    <span>{{ version }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
  props: {
    source: String
  },
  data: () => ({
    version: "v" + process.env.VUE_APP_VERSION,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
  })
};
</script>
