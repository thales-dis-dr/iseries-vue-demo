<template>
  <v-row justify="center">
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-dialog v-model="exitDialog" max-width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon dark v-bind="attrs" v-on="on">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">Settings Not Saved</v-card-title>
              <v-card-text
                >Any changes made will not be saved to the reader</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="exitDialog = false"
                  >Go back</v-btn
                >
                <v-btn color="primary" text @click="closeReaderSettings"
                  >Exit</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-toolbar-title>Reader Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="saveReaderSettings">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-tabs grow center-active v-model="tab">
            <v-tab :key="Imaging">
              Imaging
            </v-tab>

            <v-tab-item :key="Imaging">
              <div class="ma-4 pa-2">
                <v-select
                  v-if="showReaderSettings.data_to_send.visible_image"
                  v-model="visSelect"
                  :loading="isLoading"
                  :items="visibleSelection"
                  label="Visible Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-select
                  v-if="showReaderSettings.data_to_send.uv_image"
                  :items="uvSelection"
                  v-model="uvSelect"
                  :loading="isLoading"
                  label="UltraViolet Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-select
                  v-if="showReaderSettings.data_to_send.ir_image"
                  :items="irSelection"
                  v-model="irSelect"
                  :loading="isLoading"
                  label="Infrared Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-select
                  v-if="showReaderSettings.data_to_send.photo_image"
                  v-model="photoSelect"
                  :loading="isLoading"
                  :items="photoSelection"
                  label="Photo Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-select
                  v-if="showReaderSettings.data_to_send.coax_visible_image"
                  v-model="coaxVisSelect"
                  :disabled="coaxVisSelect === '' || coaxVisSelect == undefined"
                  :loading="isLoading"
                  :items="coaxVisSelection"
                  label="Coax Visible Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-select
                  v-if="showReaderSettings.data_to_send.coax_ir_image"
                  v-model="coaxIrSelect"
                  :disabled="coaxIrSelect === '' || coaxIrSelect == undefined"
                  :loading="isLoading"
                  :items="coaxIrSelection"
                  label="Coax IR Image"
                  outlined
                  prepend-icon="mdi-image-outline"
                ></v-select>

                <v-slider
                  v-if="scaleFactorSelect"
                  v-model="scaleFactorSelect"
                  :loading="isLoading"
                  label="Scale Factor"
                  prepend-icon="mdi-vector-combine"
                  max="100"
                  min="50"
                  step="1"
                  thumb-label
                  ticks
                ></v-slider>
                <v-switch
                  v-if="showReaderSettings.img.use_binned_capture"
                  v-model="binnedImageSelect"
                  :loading="isLoading"
                  label="Binned Capture"
                  prepend-icon="mdi-vector-combine"
                ></v-switch>

                <v-switch
                  v-if="
                    showReaderSettings.data_to_send.auto_orientation_barcode
                  "
                  v-model="autoOrientationBarcodeSelect"
                  :loading="isLoading"
                  label="Auto Orientation Barcode"
                  prepend-icon="mdi-barcode-scan"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.auto_orientation_face"
                  v-model="autoOrientationFaceSelect"
                  :loading="isLoading"
                  label="Auto Orientation Face"
                  prepend-icon="mdi-face-recognition"
                ></v-switch>
              </div>
            </v-tab-item>

            <v-tab :key="barcodes">
              BARCODES
            </v-tab>

            <v-tab-item :key="barcodes">
              <div class="ma-4 pa-2">
                <v-switch
                  v-if="showReaderSettings.data_to_send.onedbarcodes"
                  v-model="onedbarcodeSelect"
                  :loading="isLoading"
                  label="1D Barcodes"
                  prepend-icon="mdi-barcode"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.qrcode"
                  v-model="qrcodeSelect"
                  :loading="isLoading"
                  label="QR Codes"
                  prepend-icon="mdi-qrcode"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.azteccode"
                  v-model="azteccodeSelect"
                  :loading="isLoading"
                  label="Aztec Codes"
                  prepend-icon="mdi-qrcode"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.datamatrix"
                  v-model="dataMatrixSelect"
                  :loading="isLoading"
                  label="Data Matrix Codes"
                  prepend-icon="mdi-qrcode"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.pdf417"
                  v-model="pdf417ImageSelect"
                  :loading="isLoading"
                  label="PDF417 Barcodes"
                  prepend-icon="mdi-qrcode"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.aamva"
                  v-model="aamvaImageSelect"
                  :loading="isLoading"
                  :disabled="!pdf417ImageSelect"
                  label="AAMVA Parsing"
                  messages="PDF417 Required"
                  prepend-icon="mdi-card-account-details-outline"
                ></v-switch>

                <v-switch
                  v-if="showReaderSettings.data_to_send.barcode_image"
                  v-model="barcodeImageSelect"
                  :loading="isLoading"
                  label="Show Barcode Image"
                  prepend-icon="mdi-image-outline"
                ></v-switch>
              </div>
            </v-tab-item>

            <v-tab :key="eData">
              EDATA
            </v-tab>

            <v-tab-item :key="eData">
              <div class="ma-4 pa-2">
                <v-switch
                  v-if="showReaderSettings.data_to_send.smart_card"
                  v-model="rfSelect"
                  :loading="isLoading"
                  label="RF - Smartcard"
                  prepend-icon="mdi-smart-card-outline"
                ></v-switch>
              </div>
            </v-tab-item>

            <v-tab :key="detect">
              Detection
            </v-tab>

            <v-tab-item :key="detect">
              <div class="ma-4 pa-2">
                <v-switch
                  v-if="showReaderSettings.doc_detect.dark_objects"
                  v-model="dark_objectsSelect"
                  :loading="isLoading"
                  label="Dark Object"
                  hint="Enable to detect cell phones"
                  prepend-icon="mdi-cellphone"
                ></v-switch>
                <v-switch
                  v-if="showReaderSettings.img.use_visible_for_barcode"
                  v-model="use_visible_for_barcodeSelect"
                  :loading="isLoading"
                  label="Use Visible for Barcode"
                  prepend-icon="mdi-barcode-scan"
                ></v-switch>
              </div>
            </v-tab-item>
          </v-tabs>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ReaderSettings",
  props: {
    showDialog: Boolean
  },
  data: () => ({
    settingsTabs: [],
    exitDialog: false,
    tab: null,
    notifications: false,
    sound: true,
    widgets: false,
    isLoading: true,
    Imaging: "Imaging",
    eData: "eData",
    barcodes: "Barcodes",
    detect: "Detect",
    dark_objectsSelect: false,
    use_visible_for_barcodeSelect: false,
    rfSelect: false,
    qrcodeSelect: false,
    barcodeImageSelect: false,
    dataMatrixSelect: false,
    azteccodeSelect: false,
    onedbarcodeSelect: false,
    autoOrientationFaceSelect: false,
    autoOrientationBarcodeSelect: false,
    binnedImageSelect: false,
    scaleFactorSelect: null,
    pdf417ImageSelect: false,
    aamvaImageSelect: false,
    visSelect: "",
    uvSelect: "",
    irSelect: "",
    photoSelect: "",
    coaxIrSelect: "",
    coaxVisSelect: "",
    visibleSelection: ["Off", "Gray", "Color"],
    uvSelection: ["Off", "Normal", "Subtract"],
    irSelection: ["Off", "Normal", "Cropped"],
    photoSelection: ["Off", "Gray", "Color"],
    coaxIrSelection: ["Off", "Normal"],
    coaxVisSelection: ["Off", "Normal"],
    showReaderSettings: {
      data_to_send: {
        aamva: true,
        auto_orientation_barcode: true,
        auto_orientation_face: true,
        auto_orientation_magstripe: false,
        auto_orientation_mrz: false,
        azteccode: true,
        barcode_image: true,
        codeline_data: false,
        datamatrix: true,
        ir_image: true,
        onedbarcodes: true,
        pdf417: true,
        photo_image: true,
        qrcode: true,
        smart_card: true,
        uv_image: true,
        visible_image: true,
        coax_ir_image: true,
        coax_visible_image: true
      },
      doc_detect: {
        active_reader: false,
        active_reader_bottom_offset: false,
        active_reader_white_threshold: false,
        active_video: false,
        active_video_count_threshold: false,
        active_video_white_threshold: false,
        auto_insert_document: false,
        boxes_white_threshold: false,
        crop_to_laminate: false,
        dark_objects: true,
        delay: false,
        locate_top: false,
        movement: false,
        search_area_multiplier: false,
        use_binned_for_detect: false,
        use_first_image_captured_for_locate: false,
        use_ir_for_detect: false
      },
      img: {
        anti_glare_ir: false,
        anti_glare_vis: false,
        barcode_threads: false,
        check_visible_ocr: false,
        enhanced_dark_object_barcode_decoding: false,
        enhanced_ocr: false,
        face_find: false,
        face_find_passport: false,
        needs_debarrel: false,
        scale_down_barcode_dpi: false,
        use_ambient_for_barcode_dark_objects: false,
        use_binned_capture: true,
        use_visible_for_barcode: true,
        scaleFactor: true
      },
      logging: {
        log_level: false
      },
      ocr: {
        despeckle_codeline_image: false,
        scale_down_dpi: false,
        visa_label_check: false
      },
      rf_config: {
        bac_fallback_enabled: false,
        cert_type_checking_enabled: false,
        check_csc_revocation: false,
        check_dsc_revocation: false,
        chip_in_use_timeout: false,
        csc_crl_mode: false,
        default_chip_baud_rate: false,
        doc_signer_cert_mode: false,
        dsc_crl_mode: false,
        eac_enabled: false,
        external_csc_mode: false,
        external_cvcerts_mode: false,
        external_dsc_mode: false,
        external_private_key_mode: false,
        force_extended_apdu: false,
        max_apdu_attempts: false,
        open_chip_timeout: false,
        pace_cam_enabled: false,
        read_binary_buffer_size: false,
        read_binary_use_efatr_if_present: false,
        read_edl: false,
        read_epassport: false,
        read_idl: false,
        sac_enabled: false,
        select_lds_application: false,
        terminal_access_rights: false,
        terminal_type: false,
        validate_security_setup_fields: false
      },
      rf_data_to_send: {
        active_authentication: false,
        air_baud_rate: false,
        bac_status: false,
        chip_authentication_status: false,
        chip_id: false,
        crosscheck_efcom_efsod: false,
        dg10_file: false,
        dg10_file_edl: false,
        dg11_file: false,
        dg11_file_edl: false,
        dg12_file: false,
        dg12_file_edl: false,
        dg13_file: false,
        dg13_file_edl: false,
        dg14_file: false,
        dg14_file_edl: false,
        dg15_file: false,
        dg16_file: false,
        dg1_edl_data: false,
        dg1_file: false,
        dg1_file_edl: false,
        dg1_mrz_data: false,
        dg2_face_jpeg: false,
        dg2_file: false,
        dg2_file_edl: false,
        dg3_file: false,
        dg3_file_edl: false,
        dg3_fingerprints: false,
        dg4_file: false,
        dg4_file_edl: false,
        dg5_file: false,
        dg5_file_edl: false,
        dg6_edl_face_jpeg: false,
        dg6_file: false,
        dg6_file_edl: false,
        dg7_edl_fingerprints: false,
        dg7_file: false,
        dg7_file_edl: false,
        dg8_file: false,
        dg8_file_edl: false,
        dg9_file: false,
        dg9_file_edl: false,
        doc_signer_cert: false,
        ef_card_access_file: false,
        ef_card_security_file: false,
        ef_chip_security_file: false,
        ef_com_file: false,
        ef_cvca_file: false,
        ef_sod_file: false,
        efcom_dg_map: false,
        efsod_hash_map: false,
        passive_authentication: false,
        sac_status: false,
        terminal_authentication_status: false,
        validate_dgs: false,
        validate_doc_signer_cert: false,
        validate_signature: false,
        validate_signed_attrs: false
      },
      sound: {
        beep_enabled: false
      }
    }
  }),
  methods: {
    ...mapActions("webapi", ["saveSettings"]),
    closeReaderSettings() {
      this.$emit("close");
    },
    async saveReaderSettings() {
      this.readerSettings.settings.data_to_send.visible_image = this.visibleSelection.indexOf(
        this.visSelect
      );
      this.readerSettings.settings.data_to_send.uv_image = this.uvSelection.indexOf(
        this.uvSelect
      );
      this.readerSettings.settings.data_to_send.ir_image = this.irSelection.indexOf(
        this.irSelect
      );
      this.readerSettings.settings.data_to_send.photo_image = this.photoSelection.indexOf(
        this.photoSelect
      );
      this.readerSettings.settings.data_to_send.coax_visible_image = this.coaxVisSelection.indexOf(
        this.coaxVisSelect
      );
      this.readerSettings.settings.data_to_send.coax_ir_image = this.coaxIrSelection.indexOf(
        this.coaxIrSelect
      );

      this.readerSettings.settings.data_to_send.smart_card = this.rfSelect;
      this.readerSettings.settings.img.use_binned_capture = this.binnedImageSelect;
      if (this.scaleFactorSelect != null) {
        this.readerSettings.settings.img.scaleFactor = this.scaleFactorSelect;
        if (this.readerSettings.settings.img.scaleFactor != 100) {
          this.readerSettings.settings.img.use_binned_capture = false;
          this.binnedImageSelect = false;
        }
      }

      this.readerSettings.settings.img.use_visible_for_barcode = this.use_visible_for_barcodeSelect;

      this.readerSettings.settings.data_to_send.auto_orientation_barcode = this.autoOrientationBarcodeSelect;
      this.readerSettings.settings.data_to_send.auto_orientation_face = this.autoOrientationFaceSelect;
      this.readerSettings.settings.data_to_send.onedbarcodes = this.onedbarcodeSelect;
      this.readerSettings.settings.data_to_send.qrcode = this.qrcodeSelect;
      this.readerSettings.settings.data_to_send.azteccode = this.azteccodeSelect;
      this.readerSettings.settings.data_to_send.datamatrix = this.dataMatrixSelect;
      this.readerSettings.settings.data_to_send.barcode_image = this.barcodeImageSelect;
      this.readerSettings.settings.data_to_send.pdf417 = this.pdf417ImageSelect;
      this.readerSettings.settings.data_to_send.aamva = this.aamvaImageSelect;

      this.readerSettings.settings.doc_detect.dark_objects = this.dark_objectsSelect;

      await this.saveSettings(this.readerSettings);
      //TODO Add saving reading settings
      //TODO Send message to save message or emit to parent component the settings JSON object for Reader Settings
      this.$emit("close");
    },
    getTabs() {
      if (this.readerSettings) {
        for (var key in this.readerSettings.settings) {
          //console.log(key + this.readerSettings.settings[key]);
          this.settingsTabs.push({
            tab: key,
            settings: this.readerSettings.settings[key]
          });
        }

        this.visSelect = this.visibleSelection[
          this.readerSettings.settings.data_to_send.visible_image
        ];
        this.uvSelect = this.uvSelection[
          this.readerSettings.settings.data_to_send.uv_image
        ];
        this.irSelect = this.irSelection[
          this.readerSettings.settings.data_to_send.ir_image
        ];
        this.photoSelect = this.photoSelection[
          this.readerSettings.settings.data_to_send.photo_image
        ];
        this.coaxVisSelect = this.coaxVisSelection[
          this.readerSettings.settings.data_to_send.coax_visible_image
        ];
        this.coaxIrSelect = this.coaxIrSelection[
          this.readerSettings.settings.data_to_send.coax_ir_image
        ];

        this.rfSelect = this.readerSettings.settings.data_to_send.smart_card;
        this.scaleFactorSelect = this.readerSettings.settings.img.scaleFactor
          ? this.readerSettings.settings.img.scaleFactor
          : null;
        this.binnedImageSelect = this.readerSettings.settings.img.use_binned_capture;
        this.use_visible_for_barcodeSelect = this.readerSettings.settings.img.use_visible_for_barcode;
        this.autoOrientationBarcodeSelect = this.readerSettings.settings.data_to_send.auto_orientation_barcode;
        this.autoOrientationFaceSelect = this.readerSettings.settings.data_to_send.auto_orientation_face;

        this.onedbarcodeSelect = this.readerSettings.settings.data_to_send.onedbarcodes;
        this.qrcodeSelect = this.readerSettings.settings.data_to_send.qrcode;
        this.azteccodeSelect = this.readerSettings.settings.data_to_send.azteccode;
        this.dataMatrixSelect = this.readerSettings.settings.data_to_send.datamatrix;
        this.barcodeImageSelect = this.readerSettings.settings.data_to_send.barcode_image;
        this.pdf417ImageSelect = this.readerSettings.settings.data_to_send.pdf417;
        this.aamvaImageSelect = this.readerSettings.settings.data_to_send.aamva;

        this.dark_objectsSelect = this.readerSettings.settings.doc_detect.dark_objects;

        this.isLoading = false;
      }
    },
    increment_scaleFactor() {
      this.scaleFactorSelect++;
    },
    decrement_scaleFactor() {
      this.scaleFactorSelect++;
    }
  },
  computed: {
    // ...mapGetters("readerSettings", { showDialog: state => state.isOpen }),
    ...mapGetters("webapi", ["readerSettings"])
  },
  mounted() {
    console.log("mounted");
    this.getTabs();
  },
  watch: {
    readerSettings() {
      this.settingsTabs = [];
      this.getTabs();
    },
    pdf417ImageSelect: function() {
      if (!this.pdf417ImageSelect) {
        this.aamvaImageSelect = false;
      }
    },
    scaleFactorSelect: function() {
      if (this.scaleFactorSelect != null && this.scaleFactorSelect != 100) {
        this.binnedImageSelect = false;
      }
    },
    binnedImageSelect: function() {
      if (
        this.binnedImageSelect &&
        this.scaleFactorSelect != null &&
        this.scaleFactorSelect != 100
      ) {
        this.scaleFactorSelect = 100;
      }
    }
  }
};
</script>
