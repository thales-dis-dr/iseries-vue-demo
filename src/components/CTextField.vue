<script>
import { VTextField } from "vuetify/lib";

export default {
  extends: VTextField,
  name: "CTextField",
  props: {
    dark: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    filled: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    persistentHint: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: "accent lighten-1"
    },
    backgroundColor: {
      type: String,
      default: "rgb(224,218,218,0.40)"
    }
  }
};
</script>
