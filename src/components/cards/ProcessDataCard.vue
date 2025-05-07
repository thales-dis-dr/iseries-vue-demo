<template>
  <v-sheet :loading="loading">
    <v-row>
      <v-col>
        <v-window class="elevation-1">
          <v-sheet class="v-sheet--offset " color="success" elevation="6">
          </v-sheet>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle v-show="this.time"
            >{{ this.time }} secs</v-card-subtitle
          >

          <div class="row xs12 md12">
            <v-row align="center">
              <v-col align="center">
                <!--<v-img
            v-if="!data"
            height="200px"
            width="200px"
            lazy-src="../../../public/img/passport.jpg"
          >
            
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  v-if="loading"
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>-->

                <v-img
                  :src="portrait"
                  :key="portrait"
                  max-height="200px"
                  max-width="300px"
                  lazy-src="../../../public/img/passport.jpg"
                >
                  <template v-slot:placeholder>
                    <v-sheet>
                      <v-skeleton-loader v-show="loading" type="image" />
                    </v-sheet>
                  </template>
                </v-img>
                <v-card-text
                  >STATUS

                  <v-skeleton-loader
                    v-if="loading"
                    v-show="loading"
                    max-width="200"
                    type="list-item"
                  ></v-skeleton-loader>
                  <div v-else>
                    {{ status }}
                  </div>
                </v-card-text>

                <v-card-text
                  >CUSTOM DATA
                  <div v-if="data">{{ data }}</div>
                  <v-skeleton-loader
                    v-else
                    v-show="loading"
                    max-width="200"
                    type="list-item"
                  ></v-skeleton-loader>
                </v-card-text>
              </v-col>
            </v-row>
          </div>
        </v-window>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-col class="justify-center text-center">
        <v-btn v-show="!loading" color="primary" rounded @click="newCapture()">
          New Capture
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-sheet>
</template>

<script>
//import IDVResultItemCard from "@/components/cards/IDVResultItemCard.vue";
export default {
  name: "IDVCheckCard",
  props: {
    title: String,
    status: String,
    portrait: String,
    data: Object,
    loading: Boolean,
    faceMatchLoading: Boolean,
    rfLoading: Boolean,
    reset: Boolean,
    faceMatchData: Object,
    rfVerificationData: Object
  },
  data: () => ({
    started: null,
    running: false,
    content: "",
    image: "",
    firstName: "",
    rawDataDialog: false,
    rawRFDataDialog: false,
    rawFaceMatchDataDialog: false,
    documentVerifyOn: false,
    rfVerifyOn: false,
    faceMatchVerifyOn: false,
    time: null,
    start: 0,
    end: 0,
    totalChecks: 0,
    failedChecks: null
  }),
  mounted() {
    if (localStorage.documentVerifySwitch) {
      this.documentVerifyOn = JSON.parse(localStorage.documentVerifySwitch);
    }
    if (localStorage.rfVerifySwitch) {
      this.rfVerifyOn = JSON.parse(localStorage.rfVerifySwitch);
    }
    if (localStorage.faceMatchVerifySwitch) {
      this.faceMatchVerifyOn = JSON.parse(localStorage.faceMatchVerifySwitch);
    }
  },

  created() {},
  watch: {
    data: function() {
      if (this.portrait) {
        this.image = "data:image/jpg;base64," + this.data.result.portrait;
      } else {
        this.image = "../../../public/img/passport.jpg";
      }

      if (localStorage.documentVerifySwitch) {
        this.documentVerifyOn = JSON.parse(localStorage.documentVerifySwitch);
      }
      if (localStorage.rfVerifySwitch) {
        this.rfVerifyOn = JSON.parse(localStorage.rfVerifySwitch);
      }
      if (localStorage.faceMatchVerifySwitch) {
        this.faceMatchVerifyOn = JSON.parse(localStorage.faceMatchVerifySwitch);
      }

      if (this.data.result) {
        this.totalChecks = this.data.result.actions.length;

        this.data.result.actions.forEach(action => {
          if (action.score < action.threshold) {
            if (this.failedChecks) {
              this.failedChecks++;
            } else {
              this.failedChecks = 1;
            }
          }
        });
      }
    },
    loading: function() {
      if (this.loading) {
        this.start = new Date().getTime();
        this.time = null;
        this.failedChecks = null;
      } else {
        this.end = new Date().getTime();
        this.time = Math.trunc((this.end - this.start) / 1000);
      }
      if (localStorage.documentVerifySwitch) {
        this.documentVerifyOn = JSON.parse(localStorage.documentVerifySwitch);
      }
      if (localStorage.rfVerifySwitch) {
        this.rfVerifyOn = JSON.parse(localStorage.rfVerifySwitch);
      }
      if (localStorage.faceMatchVerifySwitch) {
        this.faceMatchVerifyOn = JSON.parse(localStorage.faceMatchVerifySwitch);
      }
    },
    faceMatchData: function() {},
    reset: function() {
      this.resetData();
      this.time = null;
    }
  },
  computed: {
    // a computed getter
    idvResults: function() {
      return this.data;
      // console.log(data_buffer.toString('hex'));
      // console.log(data_buffer.toString('utf8'))
    },
    idvFaceMatchResults: function() {
      return this.faceMatchData;
    },

    bytedata: function() {
      var data_buffer = Buffer.from(this.content, "base64");
      return data_buffer.toString("hex");
    }
  },
  methods: {
    resolveimage: function() {
      if (this.data) {
        return "data:image/jpg;base64," + this.data.result.portrait;
      } else {
        return "../../../public/img/passport.jpg";
      }
    },
    newCapture() {
      this.$emit("newcapture");
    },
    resetData: function() {
      this.data = {};
      this.failedChecks = null;
      this.totalChecks = 0;
    }
  }
};
</script>

<style scoped>
.cards {
  padding: 10px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.v-sheet--offset {
  top: 12px;
  position: relative;
}

.timer {
  display: inline;
}
</style>
