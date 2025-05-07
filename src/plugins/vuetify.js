import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.white,
        accent: colors.blue.lighten1,
        accent2: colors.grey
      },
      dark: {
        primary: colors.blue,
        secondary: colors.black,
        accent: colors.blue.lighten1
      }
    }
  }
});

export default vuetify;
