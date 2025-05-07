<template>
  <!--<div>
      <div class="column" v-for="card in cards">
      
            <img class="img" v-bind:src="card.src" @click="preview(card.src)"/>
        
      
      </div>
    </div>-->

  <v-layout justify-center align="center">
    <!--<capture-button
      @readerevent="updateevent"
      @newcapture="cleardashboard"
      @imagecaptured="addimagecard"
      @edatacaptured="addedatacard"
      @edatareceived="addedata"
      @datacaptured="addDataCard"
      @datareceived="addData"
      @aamvadatacaptured="addAamvaDataCard"
      @aamvadatareceived="addAamvaData"
      @barcodedatacaptured="addBarcodeDataCard"
      @barcodedatareceived="addBarcodeData"
      @facematchresult="addfacematchResult"
      @capturedocfound="captureDocFound"
      @imagereceived="addimage"
      @capturecomplete="complete"
      @idvresultcaptured="addIDVResultCard"
      @idvresultreceived="addIDVResultData"
      @idvfacematchresultreceived="addIDVFaceMatchResultData"
      @idvrfresultreceived="addIDVRFResultData"
      v-bind:webApiSession="webApiSession"
      v-bind:doFaceMatch="doFaceMatch"
    ></capture-button>-->

    <!--
    <v-btn fixed dark x-large fab bottom center color="blue">
      <v-icon>mdi-passport</v-icon>
    </v-btn>-->
  </v-layout>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

//import CaptureButton from "@/components/buttons/CaptureButton.vue";

export default {
  name: "capture",
  components: {
    //CaptureButton
  },
  data() {
    return {
      cards: [],
      exists: null,
      readerevents: []
    };
  },
  props: {
    deviceInfo: Object,
    webApiSession: Object,
    doFaceMatch: Boolean
  },
  methods: {
    complete() {
      this.$emit("capturecomplete", true);
    },
    addimage(imagetype, pageNumber, imagedata) {
      // this.$set(this.cards[imagetype],'src', 'https://cdn.vuetifyjs.com/images/cards/plane.jpg')

      if (pageNumber > 0) {
        this.$emit(
          "imagereceived",
          imagetype + " - " + (pageNumber + 1),
          imagedata
        );
      } else {
        this.$emit("imagereceived", imagetype, imagedata);
      }
      // let index = this.cards.findIndex(item => {
      //   return imagetype === item.title;
      // });
      // this.cards[index].src = imagedata;
    },
    addedata(datatype, pageNumber, data) {
      // this.$set(this.cards[imagetype],'src', 'https://cdn.vuetifyjs.com/images/cards/plane.jpg')

      if (pageNumber > 0) {
        this.$emit("edatareceived", datatype + " - " + (pageNumber + 1), data);
      } else {
        this.$emit("edatareceived", datatype, data);
      }

      // let index = this.cards.findIndex(item => {
      //   return imagetype === item.title;
      // });
      // this.cards[index].src = imagedata;
    },
    addimagecard(imagetype, pageNumber) {
      if (pageNumber > 0) {
        this.$emit("imagecaptured", imagetype + " - " + (pageNumber + 1));
      } else {
        this.$emit("imagecaptured", imagetype);
      }

      // this.checkIfExist(imagetype);
      // if (!this.exists) {
      //   this.cards.push({ title: imagetype, src: "", flex: 12 });
      // }
    },
    addDataCard(datatype, pageNumber) {
      if (pageNumber > 0) {
        this.$emit("datacaptured", datatype + " - " + (pageNumber + 1));
      } else {
        this.$emit("datacaptured", datatype);
      }
    },
    addData(datatype, pageNumber, data) {
      if (pageNumber > 0) {
        this.$emit("datareceived", datatype + " - " + (pageNumber + 1), data);
      } else {
        this.$emit("datareceived", datatype, data);
      }
    },
    addAamvaDataCard(datatype) {
      this.$emit("aamvadatacaptured", datatype);
    },
    addAamvaData(datatype, data) {
      this.$emit("aamvadatareceived", datatype, data);
    },
    addBarcodeDataCard(datatype) {
      this.$emit("barcodedatacaptured", datatype);
    },
    addBarcodeData(datatype, data) {
      this.$emit("barcodedatareceived", datatype, data);
    },
    addedatacard(datatype, pageNumber) {
      if (pageNumber > 0) {
        this.$emit("edatacaptured", datatype + " - " + (pageNumber + 1));
      } else {
        this.$emit("edatacaptured", datatype);
      }
    },
    addfacematchResult(datatype, data) {
      this.$emit("facematchresult", datatype, data);
    },
    addIDVResultCard(datatype) {
      this.$emit("idvresultcaptured", datatype);
    },
    addIDVResultData(datatype, data) {
      this.$emit("idvresultreceived", datatype, data);
    },
    addIDVFaceMatchResultData(datatype, data) {
      this.$emit("idvfacematchresultreceived", datatype, data);
    },
    addIDVRFResultData(datatype, data) {
      this.$emit("idvrfresultreceived", datatype, data);
    },
    captureDocFound() {
      this.$emit("capturedocfound");
    },
    cleardashboard() {
      this.$emit("newcapture");
      //this.cards = [];
    },
    updateevent(event) {
      this.$emit("readerevent", event);
      //this.readerevents.push({ anevent: event });
    }
  }
};
</script>
