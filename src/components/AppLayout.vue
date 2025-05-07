<template>
  <v-app id="app-layout">
    <span v-bind:class="[useBackground ? 'bg' : '']">
      <v-app-bar dense app clipped-right color="primary" dark>
        <v-app-bar-nav-icon @click.stop="disconnect">
          <v-icon>mdi-connection </v-icon>
        </v-app-bar-nav-icon>
        <v-spacer />
      </v-app-bar>

      <v-sheet v-show="documentCaptureDialog">
        <v-col class="text-h4 text-center">
          <div>Select a Document Type</div>
        </v-col>
        <v-col class="py-4 text-center">
          <v-btn
            class="ma-4"
            width="250"
            height="250"
            elevation="15"
            color="blue lighten-4"
            rounded
            @click="passportCapture()"
          >
            <v-flex class="pa-4 button-text">
              <v-icon size="75">mdi-passport</v-icon>
              <span>Passport</span>
              <span class="caption">(1 sided)</span>
            </v-flex>
          </v-btn>

          <v-btn
            class="ma-4"
            width="250"
            height="250"
            elevation="15"
            color="blue lighten-4"
            rounded
            @click="idCardCapture()"
          >
            <v-flex class="pa-4 button-text">
              <v-icon size="75">mdi-card-account-details</v-icon>
              <span>ID Card</span>
              <span class="caption">(2 sided)</span>
            </v-flex>
          </v-btn>
        </v-col>
      </v-sheet>
      <v-sheet v-show="showidCardCapture">
        <v-row>
          <v-col>
            <v-window class="elevation-1">
              <v-window-item>
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4">
                      <strong class="text-h6">Capture ID Card Images </strong>

                      <v-spacer></v-spacer>
                    </v-row>
                    <div class="d-flex justify-center mb-6 bg-surface-variant">
                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front Infrared
                          </v-card-text>
                        </v-col>

                        <v-img
                          :src="frontIRImage"
                          :key="frontIRImage"
                          width="200px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="frontIRImageLoading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>

                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front
                          </v-card-text>
                        </v-col>

                        <v-img
                          :src="frontVisImage"
                          :key="frontVisImage"
                          width="300px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="loading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>

                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front Ultraviolet
                          </v-card-text>
                        </v-col>

                        <v-img
                          :src="frontUVImage"
                          :key="frontUVImage"
                          width="200px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="loading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>
                    </div>
                    <div class="d-flex justify-center mb-6 bg-surface-variant">
                      <capture-front-button
                        @newfrontcapture="captureNewFront"
                        v-bind:webApiSession="webApiSession"
                        :capturing="frontCapturing"
                        :disabled="frontDisabled"
                      ></capture-front-button>
                    </div>
                    <v-sheet>
                      <div
                        class="d-flex justify-center mb-6 bg-surface-variant"
                      >
                        <v-sheet>
                          <v-col class="text-center">
                            <v-card-text>
                              Back Infrared
                            </v-card-text>
                          </v-col>

                          <v-img
                            :src="backIRImage"
                            :key="backIRImage"
                            width="200px"
                            height="auto"
                            lazy-src="../../public/img/passport.jpg"
                          >
                            <template v-slot:placeholder>
                              <v-sheet>
                                <v-skeleton-loader
                                  v-show="loading"
                                  type="image"
                                />
                              </v-sheet>
                            </template>
                          </v-img>
                        </v-sheet>

                        <v-sheet>
                          <v-col class="text-center">
                            <v-card-text>
                              Back
                            </v-card-text>
                          </v-col>

                          <v-img
                            :src="backVisImage"
                            :key="backVisImage"
                            width="300px"
                            height="auto"
                            lazy-src="../../public/img/passport.jpg"
                          >
                            <template v-slot:placeholder>
                              <v-sheet>
                                <v-skeleton-loader
                                  v-show="loading"
                                  type="image"
                                />
                              </v-sheet>
                            </template>
                          </v-img>
                        </v-sheet>

                        <v-sheet>
                          <v-col class="text-center">
                            <v-card-text>
                              Back Ultraviolet
                            </v-card-text>
                          </v-col>

                          <v-img
                            :src="backUVImage"
                            :key="backUVImage"
                            width="200px"
                            height="auto"
                            lazy-src="../../public/img/passport.jpg"
                          >
                            <template v-slot:placeholder>
                              <v-sheet>
                                <v-skeleton-loader
                                  v-show="loading"
                                  type="image"
                                />
                              </v-sheet>
                            </template>
                          </v-img>
                        </v-sheet>
                      </div>
                    </v-sheet>
                  </v-card-text>

                  <div class="d-flex justify-center mb-6 bg-surface-variant">
                    <capture-back-button
                      @newbackcapture="captureNewBack"
                      v-bind:webApiSession="webApiSession"
                      :capturing="backCapturing"
                      :disabled="backDisabled"
                    ></capture-back-button>
                  </div>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-col class="text-center">
            <v-btn rounded @click="startOver()">
              Reset
            </v-btn>

            <v-btn
              rounded
              color="success"
              :loading="processLoading"
              :disabled="!(frontCaptured && backCaptured)"
              @click="processDocument('id')"
            >
              Process
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-sheet>

      <v-sheet v-show="showPassportCapture">
        <v-row>
          <v-col>
            <v-window class="elevation-1">
              <v-window-item>
                <v-card flat>
                  <v-card-text>
                    <v-row class="mb-4">
                      <strong class="text-h6">Capture Passport Images </strong>

                      <v-spacer></v-spacer>
                    </v-row>
                    <div class="d-flex justify-center mb-6 bg-surface-variant">
                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front Infrared
                          </v-card-text>
                        </v-col>
                        <v-img
                          :src="frontIRImage"
                          :key="frontIRImage"
                          width="200px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="frontIRImageLoading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>

                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front
                          </v-card-text>
                        </v-col>
                        <v-img
                          :src="frontVisImage"
                          :key="frontVisImage"
                          width="300px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="frontVisImageLoading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>

                      <v-sheet>
                        <v-col class="text-center">
                          <v-card-text>
                            Front Ultraviolet
                          </v-card-text>
                        </v-col>
                        <v-img
                          :src="frontUVImage"
                          :key="frontUVImage"
                          width="200px"
                          height="auto"
                          lazy-src="../../public/img/passport.jpg"
                        >
                          <template v-slot:placeholder>
                            <v-sheet>
                              <v-skeleton-loader
                                v-show="frontUVImageLoading"
                                type="image"
                              />
                            </v-sheet>
                          </template>
                        </v-img>
                      </v-sheet>
                    </div>
                    <div class="d-flex justify-center mb-6 bg-surface-variant">
                      <capture-front-button
                        @newfrontcapture="captureNewFront"
                        v-bind:webApiSession="webApiSession"
                        :capturing="frontCapturing"
                        :disabled="frontDisabled"
                      ></capture-front-button>
                    </div>
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-col class="text-center">
            <v-btn rounded @click="startOver()">
              Reset
            </v-btn>

            <v-btn
              rounded
              color="success"
              :loading="processLoading"
              :disabled="!frontCaptured"
              @click="processDocument('passport')"
            >
              Process
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-sheet>

      <ProcessDataCard
        @newcapture="newCapture"
        :reset="resetBoolean"
        v-show="showDialogProcessStatus"
        :title="processTitle"
        :status="processStatus"
        :portrait="processPortrait"
        :loading="processLoading"
        :data="result"
      />

      <v-navigation-drawer v-model="readerEvents" fixed temporary>
        <v-list-item-content
          v-for="readerevent in readerevents"
          v-bind:key="readerevent.id"
        >
          <v-list-item-title>{{ readerevent.anevent }}</v-list-item-title>
          <v-list-item-subtitle>{{ readerevent.time }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-navigation-drawer>

      <FooterBar />
      <ReaderSettings
        v-bind:readerSettings="readerSettings"
        v-bind:showDialog="readerSettingsVisibility"
        @close="closeReaderSettings"
      />

      <v-main>
        <router-view
          @readerevent="updateevent"
          @imagecaptured="addimagecard"
          @imagereceived="addimage"
          @capturecomplete="complete"
          v-bind:doFaceMatch="faceMatch"
        />
      </v-main>
    </span>

    <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      v-model="alertDialog"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark> Error</v-toolbar>
          <v-card-text v-model="errorMessage">
            <div class="text-h5 pa-12">{{ errorMessage }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-app>
</template>

<script>
import FooterBar from "./menu/FooterBar";
import CaptureFrontButton from "@/components/buttons/CaptureFrontButton.vue";
import CaptureBackButton from "@/components/buttons/CaptureBackButton.vue";

import ReaderSettings from "./menu/ReaderSettingsMenu";
import ProcessDataCard from "@/components/cards/ProcessDataCard.vue";
import colors from "vuetify/lib/util/colors";

//const zip = require("../assets/zip-fs-full.min.js");

import { mapGetters, mapActions /*, mapState */ } from "vuex";

export default {
  props: {
    source: String,
    webApiSession: Object,
    deviceInfo: Object
  },

  components: {
    FooterBar,
    ReaderSettings,
    ProcessDataCard,
    CaptureFrontButton,
    CaptureBackButton
  },

  data() {
    return {
      // drawer state
      showDialogProcessStatus: false,
      result: {},
      documentCaptureDialog: true,
      showPassportCapture: false,
      showidCardCapture: false,
      showDriversLicenseCapture: false,
      length: 3,
      window: 2,
      drawerRight: null,
      drawerLeft: null,
      documentType: 0,
      readerSettingsVisibility: false,
      alertDialog: false,
      errorMessage: "",
      right: false,
      deviceDetails: false,
      readerEvents: false,
      applicationSettings: false,
      documentVerifySwitch: false,
      rfVerifySwitch: false,
      faceMatchVerifySwitch: false,
      disableSwitch: true,
      loadingSwitch: false,
      loading: false,
      frontVisImage: "",
      frontIRImage: "",
      frontUVImage: "",
      backVisImage: "",
      backIRImage: "",
      backUVImage: "",
      left: false,
      exists: null,
      tabExists: null,
      readerevents: [],
      faceMatch: false,
      twoSidedDocuments: false,
      acuant: false,
      darkMode: false,
      useBackground: false,
      primarySelect: "",
      colorOptions: Object.keys(colors),
      isAPreviousConnection: false,
      frontVisImageLoading: false,
      frontIRImageLoading: false,
      frontUVImageLoading: false,
      backVisImageLoading: false,
      backIRImageLoading: false,
      backUVImageLoading: false,
      frontCapturing: false,
      backCapturing: false,
      frontCaptured: false,
      backCaptured: false,
      frontDisabled: false,
      backDisabled: false,
      imageIdVis: 0,
      imageIdIr: 0,
      imageIdUv: 0,
      resetBoolean: true,
      backimageIdVis: 0,
      backimageIdIr: 0,
      backimageIdUv: 0,
      frontMrz: [],
      backMrz: [],
      isBackCapture: false,
      documentToVerify: {
        pages: [],
        returnPDFReport: "false",
        doBlackening: false,
        // documentTypeSize:"TD3",
        // requesterId:"developerId",
        // returnImages:"false",
        // doCropping: "false",
        channel: ""
      },
      frontImages: {},
      backImages: {},
      access_response: {},
      processLoading: false,
      processTitle: "",
      processStatus: "",
      processPortrait: ""
    };
  },
  methods: {
    ...mapActions("webapi", [
      "getReaderSettings",
      "closeConnection",
      "saveSettings",
      "setRegisterListeners"
    ]),

    processDocument(type) {
      this.processLoading = true;
      this.showidCardCapture = false;
      this.showPassportCapture = false;
      this.showDialogProcessStatus = true;

      this.processTitle = "My Custom Title";

      /*TODO Placeholder for putting in your API call to process Image data, or sending it off to a server
       *
       * Image Data exists on the following objects frontVisImage, frontIrImage, frontUvImage, backVisImage, backIrImage, backUvImage
       *
       * Type helps define whether it is either "id" or "passport"  With "id" you will have both sides of the document
       */

      //TODO REMOVE - this simulates an API Call and to display a status from the API call
      let processSucceeds = true;
      setTimeout(() => {
        if (processSucceeds) {
          this.processStatus = "Success";
          this.processLoading = false;
          this.processPortrait = this.frontVisImage;
        } else {
          this.processStatus = "Fail";
          this.processLoading = false;
          this.alertDialog = true;
          this.errorMessage = "Processing Data for " + type + "Failed";
        }
      }, 3000);
    },

    passportCapture() {
      this.documentCaptureDialog = false;
      this.showPassportCapture = true;
    },
    idCardCapture() {
      this.documentCaptureDialog = false;
      this.showidCardCapture = true;
    },
    driversLicenseCapture() {
      this.documentCaptureDialog = false;
      this.showDriversLicenseCapture = true;
    },
    startOver() {
      this.frontVisImage = "";
      this.frontUVImage = "";
      this.frontIRImage = "";
      this.backVisImage = "";
      this.backUVImage = "";
      this.backIRImage = "";
      this.frontCaptured = false;
      this.backCaptured = false;
      this.showDriversLicenseCapture = false;
      this.showidCardCapture = false;
      this.showPassportCapture = false;
      this.documentCaptureDialog = true;
    },
    async showReaderSettings() {
      await this.getReaderSettings();
      this.readerSettingsVisibility = true;
    },
    closeReaderSettings() {
      this.readerSettingsVisibility = false;
    },
    getDateTime() {
      return new Date().toLocaleString();
    },
    complete() {},
    setsettingscomplete() {
      this.loadingSwitch = false;
      this.disableSwitch = false;
    },
    addimage(imagetype, imagedata) {
      let index = this.cards.findIndex(item => {
        return imagetype === item.title;
      });
      this.cards[index].content = imagedata;
      this.cards[index].loading = false;
    },
    addimagecard(imagetype) {
      if (!this.checkIfExist(imagetype)) {
        this.cards.push({
          title: imagetype,
          componentType: "image-card",
          src: "",
          flex: 12,
          loading: true,
          useBackground: true
        });
      }
    },
    captureNewFront() {
      this.frontCapturing = true;
      this.backDisabled = true;
      this.isBackCapture = false;
      this.webApiSession.capture();
    },
    newCapture() {
      this.showDialogProcessStatus = false;
      this.result = {};
      this.resetBoolean = true;
      this.frontMrz = [];
      this.backMrz = [];
      this.startOver();
    },
    captureNewBack() {
      this.backCapturing = true;
      this.frontDisabled = true;
      this.isBackCapture = true;
      this.webApiSession.capture();
    },
    addFrontImageLoading(imagetype) {
      //console.log("front capturing " + imagetype);

      if (imagetype === "Visible") {
        this.frontVisImageLoading = true;
      } else if (imagetype === "Infrared") {
        this.frontIRImageLoading = true;
      } else if (imagetype === "Ultraviolet") {
        this.frontUVImageLoading = true;
      }
    },
    addFrontImageData(imagetype, imagedata) {
      if (imagetype === "Visible") {
        this.frontVisImageLoading = false;

        this.frontVisImage = imagedata;
      } else if (imagetype === "Infrared") {
        this.frontIRImageLoading = false;

        this.frontIRImage = imagedata;
      } else if (imagetype === "Ultraviolet") {
        this.frontUVImageLoading = false;

        this.frontUVImage = imagedata;
      }
    },
    frontImageComplete() {
      //console.log("front complete");
    },

    addBackImageLoading(imagetype) {
      if (imagetype === "Visible") {
        this.backVisImageLoading = true;
      } else if (imagetype === "Infrared") {
        this.backIRImageLoading = true;
      } else if (imagetype === "Ultraviolet") {
        this.backUVImageLoading = true;
      }
    },
    addBackImageData(imagetype, imagedata) {
      if (imagetype === "Visible") {
        this.backVisImageLoading = false;
        this.backVisImage = imagedata;
      } else if (imagetype === "Infrared") {
        this.backIRImageLoading = false;
        this.backIRImage = imagedata;
      } else if (imagetype === "Ultraviolet") {
        this.backUVImageLoading = false;
        this.backUVImage = imagedata;
      }
    },
    addedata(datatype, data) {
      let index = this.edatacards.findIndex(item => {
        return datatype === item.title;
      });

      if (datatype.includes("DG2 Photo")) {
        this.edatacards[index].content = data;
        this.edatacards[index].loading = false;
      } else if (datatype.includes("DG1 Codeline")) {
        this.edatacards[index].content = data;
        this.edatacards[index].loading = false;
      } else if (datatype.includes("Validation")) {
        this.edatacards[index].content = data;
      }
    },

    addData(datatype, data) {
      //console.log(`addData - ${datatype} ----------------------------`);
      //console.log("" + datatype + " " + JSON.stringify(data));
      let index = this.cards.findIndex(item => {
        return datatype === item.title;
      });

      const obj = this.cards[index];
      obj.componentType = "CodelineCard";
      obj.content = data.codeline_data;
      obj.loading = false;
    },

    addAamvaData(datatype, data) {
      //console.log(`addData - ${datatype} ----------------------------`);
      //console.log("" + datatype + " " + JSON.stringify(data));
      let index = this.cards.findIndex(item => {
        return datatype === item.title;
      });

      const obj = this.cards[index];
      obj.componentType = "AamvaDataCard";
      obj.content = data;
      obj.loading = false;
    },

    addBarcodeData(datatype, data) {
      //console.log(`addData - ${datatype} ----------------------------`);
      //console.log("" + datatype + " " + JSON.stringify(data));
      let index = this.cards.findIndex(item => {
        return datatype === item.title;
      });

      const obj = this.cards[index];
      obj.componentType = "barcode-data-card";
      obj.content = data;
      obj.loading = false;
    },

    checkIfEdataExist(datatype) {
      this.exists = this.edatacards.some(type => {
        return type.title === datatype;
      });
      return this.exists;
    },

    checkIfExist(imagetype) {
      this.exists = this.cards.some(type => {
        return type.title === imagetype;
      });
      return this.exists;
    },

    updateevent(event) {
      this.readerevents.push({ anevent: event, time: this.getDateTime() });
    },
    disconnect() {
      this.closeConnection();
      //this.webApiSession.removeAllListeners();
      this.$router.push({ name: "connect" });
    },
    primarySelection() {
      this.$vuetify.theme.themes.light.primary = colors[this.primarySelect];
      this.$vuetify.theme.themes.dark.primary = colors[this.primarySelect];
    },

    requestImage(image_id) {
      let compression = 70;
      this.webApiSession.send_message(
        JSON.stringify({
          t: 16,
          i: this.webApiSession.getNextI(),
          d: { image_id, compression }
        })
      );
    },
    async setReaderSettings() {
      if (this.readerSettings) {
        // this.readerSettings.settings.data_to_send.codeline_data = true;
        // this.readerSettings.settings.data_to_send.ir_image = 1;
        // this.readerSettings.settings.data_to_send.smart_card = true;
        // this.readerSettings.settings.data_to_send.uv_image = 1;
        // this.readerSettings.settings.data_to_send.visible_image = 2;
        // this.readerSettings.settings.rf_data_to_send.dg2_face_jpeg = 6;
        // this.readerSettings.settings.rf_data_to_send.ef_com_file = 6;
        // this.readerSettings.settings.rf_data_to_send.ef_sod_file = 6;

        this.readerSettings.settings.img.scaleFactor = 60;
        await this.saveSettings(this.readerSettings);
      }
    }
  },
  mounted() {
    if (this.webApiSession === undefined) {
      this.$router.push({ name: "connect" });
    } else {
      if (!this.registerlisteners) {
        if (this.webApiSession) {
          this.webApiSession.on("CAPTURED", () => {
            // this.$emit("capturecomplete", true);
            // // this.$emit("imagereceived", true);

            if (this.isBackCapture) {
              this.backCaptured = true;
            } else {
              this.frontCaptured = true;
            }

            // console.log("capture complete");
            this.frontCapturing = false;
            this.backCapturing = false;
            this.backDisabled = false;
            this.frontDisabled = false;
          });

          this.webApiSession.on("CAPTURE_DATA_CAPTURED", data => {
            console.log(
              `CAPTURE_DATA_CAPTURED ${this.webApiSession.getReaderDataType(
                data.type
              )}[${data.type}]`
            );

            switch (this.webApiSession.getReaderDataType(data.type)) {
              case "IMAGEVIS":
                if (this.isBackCapture) {
                  this.addBackImageLoading("Visible");
                  this.imageIdVis = data.id;
                  this.requestImage(this.imageIdVis);
                  break;
                } else {
                  this.addFrontImageLoading("Visible");
                  this.imageIdVis = data.id;
                  this.requestImage(this.imageIdVis);
                  break;
                }

              case "IMAGEIR":
                if (this.isBackCapture) {
                  this.addBackImageLoading("Infrared");
                  this.imageIdIr = data.id;
                  this.requestImage(this.imageIdIr);
                  break;
                } else {
                  this.addFrontImageLoading("Infrared");
                  this.imageIdIr = data.id;
                  this.requestImage(this.imageIdIr);
                  break;
                }
              case "IMAGEUV":
                if (this.isBackCapture) {
                  this.addBackImageLoading("Ultraviolet");
                  this.imageIdUv = data.id;
                  this.requestImage(this.imageIdUv);
                  break;
                } else {
                  this.addFrontImageLoading("Ultraviolet");
                  this.imageIdUv = data.id;
                  this.requestImage(this.imageIdUv);
                  break;
                }
              case "CODELINE_DATA":
                console.log("codeline captured");
                this.webApiSession.send_message(
                  JSON.stringify({
                    t: 52,
                    i: this.webApiSession.getNextI(),
                    d: { id: data.id }
                  })
                );
                break;

              default:
                console.log(
                  `Ignored Data Type ----- ${this.webApiSession.getReaderDataType(
                    data.type
                  )}[${data.type}]`
                );
            }
          });

          this.webApiSession.on("RETURNED_IMAGE", data => {
            let type = "data:image/jpeg;base64,";

            var imageId = data.image_id;

            switch (imageId) {
              case this.imageIdVis:
                if (this.imageIdVis > 0) {
                  if (this.isBackCapture) {
                    this.addBackImageData("Visible", type + data.img);
                    this.backImages.WHITE = data.img;
                  } else {
                    this.addFrontImageData("Visible", type + data.img);
                    this.frontImages.WHITE = data.img;
                  }
                }
                break;

              case this.imageIdIr:
                if (this.imageIdIr > 0) {
                  if (this.isBackCapture) {
                    this.addBackImageData("Infrared", type + data.img);
                    this.backImages.IR = data.img;
                  } else {
                    this.addFrontImageData("Infrared", type + data.img);
                    this.frontImages.IR = data.img;
                  }
                }
                break;
              case this.imageIdUv:
                if (this.imageIdUv > 0) {
                  if (this.isBackCapture) {
                    this.addBackImageData("Ultraviolet", type + data.img);
                    this.backImages.UV = data.img;
                  } else {
                    this.addFrontImageData("Ultraviolet", type + data.img);
                    this.frontImages.UV = data.img;
                  }
                }
                break;
            }
          });

          this.webApiSession.on("RETURNED_DATA", data => {
            switch (this.webApiSession.getReaderDataType(data.type)) {
              case "CODELINE_DATA":
                // console.log("codeline data");
                // console.log(data);
                if (this.isBackCapture) {
                  if (data.codeline_data.DocType == "UNKNOWN DOCUMENT") {
                    console.log("Unknown Doc Type");
                  } else {
                    if (data.codeline_data.Line1) {
                      this.backMrz[0] = data.codeline_data.Line1;
                    }
                    if (data.codeline_data.Line2) {
                      this.backMrz[1] = data.codeline_data.Line2;
                    }
                    if (data.codeline_data.Line3) {
                      this.backMrz[2] = data.codeline_data.Line3;
                    }
                  }
                } else {
                  if (data.codeline_data.DocType == "UNKNOWN DOCUMENT") {
                    console.log("Unknown Doc Type");
                  } else {
                    if (data.codeline_data.Line1) {
                      this.frontMrz[0] = data.codeline_data.Line1;
                    }
                    if (data.codeline_data.Line2) {
                      this.frontMrz[1] = data.codeline_data.Line2;
                    }
                    if (data.codeline_data.Line3) {
                      this.frontMrz[2] = data.codeline_data.Line3;
                    }
                  }
                }
                break;

              default:
                console.log("Ignored Data Received ---" + JSON.stringify(data));
            }
          });
        }
      }

      if (localStorage.faceMatchSwitch) {
        this.faceMatch = JSON.parse(localStorage.faceMatchSwitch);
      }
      if (localStorage.twoSidedDocumentSwitch) {
        this.twoSidedDocuments = JSON.parse(
          localStorage.twoSidedDocumentSwitch
        );
      }
      if (localStorage.darkModeSwitch) {
        this.darkMode = JSON.parse(localStorage.darkModeSwitch);
      }
      if (localStorage.backgroundSwitch) {
        this.useBackground = JSON.parse(localStorage.backgroundSwitch);
      }
      if (localStorage.documentVerifySwitch) {
        this.documentVerifySwitch = JSON.parse(
          localStorage.documentVerifySwitch
        );
      }
      if (localStorage.rfVerifySwitch) {
        this.rfVerifySwitch = JSON.parse(localStorage.rfVerifySwitch);
      }
      if (localStorage.faceMatchVerifySwitch) {
        this.faceMatchVerifySwitch = JSON.parse(
          localStorage.faceMatchVerifySwitch
        );
      }

      this.getReaderSettings();
      this.webApiSession.on("SETTINGS_UPDATED", data => {
        if (data.status === "ok") {
          this.setsettingscomplete();
        }
      });
    }
  },
  watch: {
    documentType() {
      console.log(this.documentType);
    },

    darkMode(isOn) {
      this.$vuetify.theme.dark = isOn;
      localStorage.darkModeSwitch = isOn;
    },
    useBackground(isOn) {
      localStorage.backgroundSwitch = isOn;
    },
    isConnected(oldval, newVal) {
      if (newVal === false) {
        this.$router.push({ name: "connect" });
      }
    },
    readerSettings() {
      this.setReaderSettings();
    }
  },
  created() {},
  computed: {
    ...mapGetters(["features"]),
    ...mapGetters("webapi", [
      "readerSettings",
      "isConnected",
      "registerlisteners"
    ])
    // ...mapState({
    //   readerSettingsVisibility: state => state.nav.readerSettingsVisibility,
    //   drawerRightState: state => state.nav.drawerRight,
    //   drawerLeft: state => state.nav.drawerLeft
    // }),
  }
};
</script>
<style scoped>
.cards {
  padding: 20px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.transparent {
  background: transparent;
}
.bg {
  width: 100%;
  height: 100%;
  background: url("../../public/img/background_2.png") no-repeat center center;
  background-size: cover;
}
.button-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
