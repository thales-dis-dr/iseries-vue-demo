<template>
  <div class="capture-back-button">
    <v-card-actions class="justify-center">
      <v-layout row class="fab-container" align-baseline>
        <v-slide-x-transition>
          <v-btn
            v-on:click="capture()"
            rounded
            dark
            color="primary"
            class="space"
            v-bind:loading="capturing"
            v-bind:disabled="disabled"
          >
            Capture Back
          </v-btn>
        </v-slide-x-transition>
      </v-layout>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "capture-back-button",
  data: () => ({
    registerlisteners: false,
    imageIdVis: 0,
    imageIdPhoto: 0,
    imageIdIr: 0,
    imageIdUv: 0,

    imageIdVis2: 0,
    imageIdPhoto2: 0,
    imageIdIr2: 0,
    imageIdUv2: 0,

    imageIdCoaxVis: 0,
    imageIdCoaxIr: 0,

    imageIdBarcode: 0,

    startNewCapture: true,
    pageNumber: 0,
    faceMatchReady: false,
    imageIdFaceMatchPhoto: 0,
    imageIdFaceMatchDG2: 0,
    capturedFirstPage: false,
    validationData: {}
  }),
  props: {
    webApiSession: Object,
    doFaceMatch: Boolean,
    capturing: Boolean,
    disabled: Boolean
  },
  methods: {
    requestImage(image_id) {
      this.webApiSession.send_message(
        JSON.stringify({
          t: 16,
          i: this.webApiSession.getNextI(),
          d: { image_id }
        })
      );
    },
    validationDataComplete() {
      for (var key in this.validationData) {
        if (
          this.validationData[key] === null ||
          this.validationData[key] === ""
        ) {
          return false;
        }
      }
      return true;
    },

    capture() {
      if (this.capturing) return;

      if (!this.registerlisteners) {
        this.webApiSession.send_message(
          JSON.stringify({
            t: 42,
            i: this.webApiSession.getNextI()
          })
        );

        this.registerlisteners = true;
      }

      this.$emit("newbackcapture");
      //   this.webApiSession.capture();
    }
  }
};
</script>

<style scoped>
v-speed-dial {
}
.fab-container {
}
.space {
  margin: 8px;
}
</style>
