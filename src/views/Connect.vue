<template>
  <section id="body">
    <section id="Connect" v-bind:class="{ shake }">
      <v-col class="text-right">
        <v-btn
          class="connections mx-3"
          color="white"
          icon
          @click.stop="showAppSettings = true"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-col>

      <v-card color="rgb(0,0,0,0.01)" flat>
        <v-card-actions>
          <v-col class="text-center">
            <v-btn
              color="success"
              raised
              background-color="rgb(0,0,0,0.5)"
              x-large
              rounded
              width="150"
              height="150"
              v-on:click="connect()"
              :loading="connecting"
              :disabled="connecting"
            >
              Begin
            </v-btn>
          </v-col>

          <!--<v-btn
              class="connections mx-3"
              color="white"
              icon
              @click.stop="showPrevConnections = true"
              :disabled="connecting"
            >
              <v-icon>mdi-history</v-icon>
            </v-btn>-->
        </v-card-actions>
        <form>
          <div v-bind:class="{ displayinfo, good, error, warning }">
            <p>{{ alert.message }}</p>
            <!--<p> v-show="input.ipaddress && input.id && input.key">{{ input.ipaddress}} / {{ login.id}} / {{input.key}}</p>-->
          </div>
        </form>
      </v-card>
    </section>
    <v-dialog v-model="showAddConnection" persistent max-width="290">
      <div></div>
      <v-card color="grey darken-2" flat outlined>
        <v-card-title color="white">
          Add a Reader
        </v-card-title>
        <v-card-text>
          <c-text-field
            type="text"
            :disabled="connecting"
            name="Name"
            v-model="addReader.friendlyName"
            prepend-inner-icon="mdi-rename"
            label="Name"
            hint="ie. Front Desk Reader"
            :readonly="readonlyIp"
          />

          <c-text-field
            type="text"
            :disabled="connecting"
            name="Device IP"
            v-model="addReader.ipaddress"
            prepend-inner-icon="mdi-ip-network-outline"
            label="Address"
            hint="ie. 192.168.1.101"
            :readonly="readonlyIp"
          />

          <c-text-field
            :disabled="connecting"
            type="text"
            name="Api ID"
            prepend-inner-icon="mdi-account-outline"
            v-model="addReader.id"
            label="ID"
          />
          <c-text-field
            name="Api Key"
            v-model="addReader.key"
            label="Key"
            prepend-inner-icon="mdi-lock-outline"
            :disabled="connecting"
            :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (passwordVisible = !passwordVisible)"
            :type="passwordVisible ? 'text' : 'password'"
          />
        </v-card-text>
        <v-card-actions>
          <v-col class="text-center">
            <v-btn
              color="success"
              outlined
              type="button"
              width="50%"
              v-on:click="showAddConnection = false"
              :loading="connecting"
              :disabled="connecting"
              >exit</v-btn
            >
            <v-col></v-col>
            <v-btn
              class="mx-3"
              color="success"
              type="button"
              width="70%"
              v-on:click="addNewConnection()"
              :loading="connecting"
              :disabled="connecting"
              >Add</v-btn
            >
          </v-col>

          <!--<v-btn
              class="connections mx-3"
              color="white"
              icon
              @click.stop="showPrevConnections = true"
              :disabled="connecting"
            >
              <v-icon>mdi-history</v-icon>
            </v-btn>-->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showPrevConnections" persistent max-width="290">
      <v-card>
        <v-list rounded three-line>
          <v-subheader>PREVIOUS CONNECTIONS</v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(connection, key) in previousConnections.slice().reverse()"
              :key="key"
              @click="
                connectTo(connection.ipaddress, connection.id, connection.key);
                showPrevConnections = false;
              "
            >
              <v-list-item-avatar>
                <v-img
                  v-if="connection.model == 'cr5400i'"
                  :src="require('../../public/img/readers/cr5400i-60x60.png')"
                ></v-img>
                <v-img
                  v-if="connection.model == 'at10ki'"
                  :src="require('../../public/img/readers/at10ki-60x60.png')"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  v-html="connection.serial"
                ></v-list-item-title>

                <v-list-item-subtitle
                  ><b>IP Address:</b>
                  {{ connection.ipaddress }}</v-list-item-subtitle
                >
                <v-list-item-subtitle
                  ><b>ID:</b> {{ connection.id }} <b>Key:</b>
                  {{ "********" }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary" @click="showPrevConnections = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-list>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showRemoveConnectionDialog" persistent max-width="290">
      <v-card
        ><v-col class="text-center">
          Delete reader named: {{ removeConnection.friendlyName }} ?
        </v-col>
        <v-card-actions>
          <v-col class="text-center">
            <v-btn @click="showRemoveConnectionDialog = false">
              Close
            </v-btn>
            <v-btn color="primary" @click="confirmRemovePreviousConnection()">
              Confirm
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showAppSettings" persistent max-width="500">
      <v-card>
        <v-list rounded three-line>
          Settings
          <v-subheader>Readers </v-subheader>
          <v-list-item-group v-model="selected" active-class="blue--text">
            <v-list-item
              v-for="(connection, key) in previousConnections.slice()"
              :key="key"
              :change="onFavorite"
            >
              <template v-slot:default="{ active }">
                <v-list-item-avatar>
                  <v-img
                    v-if="connection.model == 'cr5400i'"
                    :src="require('../../public/img/readers/cr5400i-60x60.png')"
                  ></v-img>
                  <v-img
                    v-if="connection.model == 'at10ki'"
                    :src="require('../../public/img/readers/at10ki-60x60.png')"
                  ></v-img>
                  <v-img
                    v-else
                    :src="require('../../public/img/readers/at10ki-60x60.png')"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-if="connection.friendlyName"
                    v-html="connection.friendlyName"
                  ></v-list-item-title>
                  <v-list-item-title
                    v-else
                    v-html="connection.serial"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    ><b>IP Address:</b>
                    {{ connection.ipaddress }}</v-list-item-subtitle
                  >
                  <v-list-item-subtitle
                    ><b>ID:</b> {{ connection.id }} <b>Key:</b>
                    {{ "********" }}</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-icon v-if="!active" color="grey lighten-1">
                  mdi-star-outline
                </v-icon>

                <v-icon v-else color="yellow darken-3">
                  mdi-star
                </v-icon>
                <v-btn icon @click="removePreviousConnection(connection)"
                  ><v-icon color="red">mdi-minus</v-icon></v-btn
                >
              </template>
            </v-list-item>
          </v-list-item-group>
          <v-col class="text-center">
            <v-btn icon @click="showAddConnection = true"
              ><v-icon color="green">mdi-plus</v-icon></v-btn
            >
          </v-col>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="closeAppSettings">
              Close
            </v-btn>
            <v-tooltip top v-model="showSaveError">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" color="primary" @click="saveAppSettings">
                  Save
                </v-btn>
              </template>
            </v-tooltip>
          </v-card-actions>
        </v-list>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Connect",
  data() {
    return {
      input: {
        ipaddress: "",
        id: "",
        key: "",
        jwt: null,
        port: null
      },
      addReader: {
        ipaddres: "",
        id: "",
        key: "",
        friendlyName: ""
      },
      selected: [0],
      alert: {
        message: "Add a Device in Settings"
      },
      showAppSettings: false,
      showRemoveConnectionDialog: false,
      currentReader: null,
      isAPreviousConnection: false,
      readonlyIp: false,
      readonlyPort: false,
      readonlyJwt: false,
      tab: null,
      passwordVisible: false,
      title: "iSeries Reader",
      displayinfo: true,
      good: false,
      error: false,
      warning: false,
      shake: false,
      connecting: false,
      previousConnections: [],
      removeConnection: {},
      showPrevConnections: false,
      showAddConnection: false,
      showSaveError: false,
      registerlisteners: false
    };
  },
  computed: {
    webApi: function() {
      return window.webApiModule;
    }
  },
  watch: {},
  methods: {
    ...mapActions("webapi", ["setConnection", "setRegisterListeners"]),
    listenersRegistered() {
      console.log("Listeners Registered");
      this.registerlisteners = true;
    },
    showModal() {
      //console.log(this.previousConnections);
    },
    onFavorite() {
      //console.log(this);
    },
    connectTo(ip, id, key) {
      this.input.ipaddress = ip;
      this.input.id = id;
      this.input.key = key;
      this.isAPreviousConnection = true;
      this.connect();
    },
    timeoutPromise(ms = 15000) {
      return new Promise((_, reject) => {
        setTimeout(reject.bind(this, "Connection Timed Out"), ms);
      });
    },
    startSession(webApi) {
      // vue looses this inside the promise, so save the only object we need
      return Promise.race([
        new Promise(resolve => {
          webApi.once("SESSION_IN_USE", () => {
            resolve(false);
            return true;
          });
          webApi.once("SESSION_OPENED", () => {
            resolve(true);
            return true;
          });
          webApi.start_session();
        }),
        this.timeoutPromise()
      ]);
    },
    openConnection(webApi, { jwt, ipaddress, id, key, port }) {
      // vue looses this inside the promise, so save the only object we need
      return Promise.race([
        new Promise((resolve, reject) => {
          webApi.once("CONNECTED", () => {
            resolve();
            return true;
          });
          webApi.once("AUTHENTICATED", () => {
            resolve();
            return true;
          });
          webApi.once("UNPROVISIONED_DEVICE", () => {
            reject("The Device is Unprovisioned");
            return true;
          });
          webApi.once("NOT_AUTHORIZED", () => {
            reject("Incorrect ID or Key!");
            return true;
          });
          webApi.once("INVALID_KEY", () => {
            reject("Incorrect ID or Key!");
            return true;
          });
          webApi.once("INTERNAL_ERROR", () => {
            reject("Reader Internal Error OccuredD");
            return true;
          });
          if (jwt) {
            webApi.open_jwt_connection(ipaddress, jwt, port);
          } else {
            webApi.open_connection(ipaddress, id, key, port);
          }
        }),
        this.timeoutPromise()
      ]);
    },
    getDeviceInfo(webApi) {
      return Promise.race([
        new Promise(resolve => {
          webApi.once("DEVICE_INFO", data => {
            resolve(data);
            return true;
          });
          webApi.get_device_info();
        }),
        this.timeoutPromise()
      ]);
    },
    async doConnection() {
      try {
        await this.openConnection(this.webApi, this.currentReader);

        this.alert.message = "Connected!";
        this.good = false;
        this.setConnection(this.webApi);
        this.$emit("authenticated", true);

        if (await this.startSession(this.webApi)) {
          this.displayinfo = false;
          this.good = true;
          this.alert.message = "Session started!";
          this.$emit("authenticated", true);

          const data = await this.getDeviceInfo(this.webApi);

          this.$emit("update-device-serial", data.serial);
          this.$loading.hide();
          //console.log(data);

          this.webApi.on("CLOSED", () => {
            this.webApi.removeAllListeners();
            console.log("Connection Closed");
          });

          if (!this.isAPreviousConnection) {
            this.addConnection(data.serial, data.model);
          }
          //this.$router.push({name:"dashboard",params: {deviceInfo: data,webApiSession: this.webApi }});

          return data;
        } else {
          this.displayinfo = false;
          this.error = true;
          this.$loading.hide();
          this.shake = true;
          this.alert.message = "Session is in Use";
          this.webApi.close_connection();
        }
      } catch (timeoutErr) {
        this.$loading.hide();
        this.warning = true;
        this.shake = true;
        console.error(timeoutErr);
        this.alert.message = timeoutErr; //"Connection Timed Out";
      }
    },
    async connect() {
      this.warning = false;
      this.error = false;
      this.displayinfo = true;
      //console.log("before connecting.. " + this.shake);
      this.shake = false;
      //console.log("connecting.. " + this.shake);
      this.connecting = true;
      if (this.currentReader === null) {
        this.alert.message = "No Device Available";
      } else {
        if (
          this.currentReader.ipaddress != "" &&
          (this.input.jwt ||
            (this.currentReader.id != "" && this.currentReader.key != ""))
        ) {
          this.alert.message = "Connecting...";
          this.$loading.show({ delay: 0, background: "rgba(0,0,0, 0.5)" }); //delay 0ms, default is 300ms

          let data = null;
          if ((data = await this.doConnection())) {
            this.$router.push({
              name: "capture",
              params: {
                deviceInfo: data,
                webApiSession: this.webApi,
                registerlisteners: this.registerlisteners
              }
            });
          }
        } else {
          if (this.currentReader.ipaddress == "") {
            this.shake = true;
            this.warning = true;
            this.alert.message = "Please enter a IP Address";
          } else if (this.currentReader.id == "") {
            this.shake = true;
            this.warning = true;
            this.alert.message = "Please enter an Admin ID";
          } else if (this.currentReader.key == "") {
            this.shake = true;
            this.warning = true;
            this.alert.message = "Please enter an Admin Key";
          }
        }
      }

      this.connecting = false;
    },
    closeAppSettings() {
      this.showAppSettings = false;
    },
    addNewConnection() {
      if (
        !this.addReader.ipaddress ||
        !this.addReader.id ||
        !this.addReader.key ||
        !this.addReader.friendlyName
      ) {
        console.log("adding new conneciton error");

        return;
      } else {
        let newConnection = {};
        newConnection.serial = null;
        newConnection.ipaddress = this.addReader.ipaddress;
        newConnection.id = this.addReader.id;
        newConnection.key = this.addReader.key;
        newConnection.model = null;
        newConnection.friendlyName = this.addReader.friendlyName;

        this.previousConnections.push(newConnection);

        this.saveConnections();
        this.showAddConnection = false;
      }
    },
    addConnection(serial, model) {
      if (!this.input.ipaddress || !this.input.id || !this.input.key) {
        return;
      }

      this.newConnection.serial = serial;
      this.newConnection.ipaddress = this.input.ipaddress;
      this.newConnection.id = this.input.id;
      this.newConnection.key = this.input.key;
      this.newConnection.model = model;
      this.newConnection.friendlyName = this.input.friendlyName;

      this.previousConnections.push(this.newConnection);

      this.saveConnections();
    },
    saveConnections() {
      const parsed = JSON.stringify(this.previousConnections);
      localStorage.setItem("previousConnections", parsed);
    },
    removePreviousConnection(connection) {
      this.removeConnection = connection;
      this.showRemoveConnectionDialog = true;
    },
    confirmRemovePreviousConnection() {
      let index = this.previousConnections.findIndex(
        obj => obj === this.removeConnection
      );
      if (index == this.currentReader.index) {
        this.currentReader = this.previousConnections[0];
      }
      this.previousConnections.splice(index, 1);
      this.saveConnections();
      this.showRemoveConnectionDialog = false;
    },
    saveAppSettings() {
      if (this.selected >= 0) {
        this.currentReader = this.previousConnections[this.selected];
        this.currentReader.index = this.selected;
      } else {
        this.currentReader.index = 0;
        this.currentReader = this.previousConnections[0];
      }

      const parsed = JSON.stringify(this.currentReader);
      localStorage.setItem("currentReader", parsed);

      if (this.currentReader.friendlyName) {
        this.alert.message = "Connecting to " + this.currentReader.friendlyName;
      } else if (this.currentReader.serial) {
        this.alert.message = "Connecting to " + this.currentReader.serial;
      } else {
        this.alert.message = "Connecting to " + this.currentReader.ip;
      }

      this.showAppSettings = false;
    }
  },

  async mounted() {
    if (this.$route.query.ip) {
      this.input.ipaddress = this.$route.query.ip;
      this.readonlyIp = !this.$route.query.edit;
    }
    if (this.$route.query.jwt) {
      this.input.jwt = this.$route.query.jwt;
      this.readonlyjwt = !this.$route.query.edit;
    }
    if (this.$route.query.port) {
      this.input.port = this.$route.query.port;
      this.readonlyPort = !this.$route.query.edit;
    }
    if (this.$route.query.id) {
      this.input.id = this.$route.query.id;
    }
    if (this.$route.query.key) {
      this.input.key = this.$route.query.key;
    }

    if (localStorage.getItem("darkModeSwitch")) {
      this.$vuetify.theme.dark = JSON.parse(localStorage.darkModeSwitch);
    }

    if (localStorage.getItem("previousConnections")) {
      try {
        this.previousConnections = JSON.parse(
          localStorage.getItem("previousConnections")
        );
      } catch (e) {
        localStorage.removeItem("previousConnections");
      }
    }
    if (localStorage.getItem("currentReader")) {
      try {
        this.currentReader = JSON.parse(localStorage.getItem("currentReader"));
        this.selected = this.currentReader.index;
        if (this.currentReader.friendlyName) {
          this.alert.message =
            "Connecting to " + this.currentReader.friendlyName;
        } else if (this.currentReader.serial) {
          this.alert.message = "Connecting to " + this.currentReader.serial;
        } else {
          this.alert.message = "Connecting to " + this.currentReader.ip;
        }
      } catch (e) {
        localStorage.removeItem("currentReader");
      }
    }

    if (this.$route.query.login) {
      await this.connect();
    }

    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    if (isIE) {
      this.$router.push({
        name: "unsupported"
      });
    }
  },
  created() {
    window.addEventListener("beforeunload", function(event) {
      console.log("Reloaded", event);
      this.setRegisterListeners(false);
    });
  }
};
</script>

<style scoped>
section#body {
  background-image: url("../../public/img/background_3.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
}

section#Connect {
  background-color: rgba(0, 0, 0, 0.52);
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

/* button {
  width: 60%;
  margin: 10px auto;
} */

.connections {
  background-color: rgba(0, 0, 0, 0.72);
  background-color: #444444;
  border-radius: 4px;
  height: 36px;
  width: 36px;
}

.connections:hover {
  background-color: #555555;
}

/* .buttonbar {
  padding: 0px 5px;
  margin: 0px 0;
} */

.displayinfo {
  background-color: rgba(33, 150, 243, 0.5) !important;
  width: 100%;
  text-align: center;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error {
  width: 100%;
  text-align: center;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #a90e00 !important;
  background-color: #ff3c41 !important;
}

.warning {
  width: 100%;
  text-align: center;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fb8c00 !important;
  border: 1px solid #fb8c00;
}

.good {
  width: 100%;
  text-align: center;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(76, 175, 80, 0.5);
  color: #416d50;
}

.displayinfo p {
  color: #e0dada;
  margin: auto;
  padding: 5px;
}
.error p {
  color: #e0dada;
  margin: auto;
  padding: 5px;
}
.warning p {
  color: #e0dada;
  margin: auto;
  padding: 5px;
}
.good p {
  color: #e0dada;
  margin: auto;
  padding: 5px;
}

@-webkit-keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate(5px, 0, 0);
  }
}

.shake {
  animation-name: shake;
  animation-duration: 0.5s;

  /* animation-fill-mode: both; */
}
</style>
