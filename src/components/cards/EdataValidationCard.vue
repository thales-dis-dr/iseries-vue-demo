<template>
  <v-card :loading="loading">
    <v-card-text class="text-area">
      <v-layout row wrap>
        <v-flex md6 xs6>
          <li>
            <label>DG1</label>
            {{ validationCode(content.SCDG1_VALIDATE) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>DG2</label>
            {{ validationCode(content.SCDG2_VALIDATE) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>Signed Attributes</label>
            {{ validationCode(content.SCSIGNEDATTRS_VALIDATE) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>Signature</label>
            {{ validationCode(content.SCSIGNATURE_VALIDATE) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>BAC Status</label>
            {{ tristate(content.SCBAC_STATUS) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>SAC Status</label>
            {{ tristate(content.SAC_STATUS) }}
          </li>
        </v-flex>
        <v-flex md6 xs6>
          <li>
            <label>Active Authentication</label>
            {{ tristate(content.ACTIVE_AUTHENTICATION) }}
          </li>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EdataValidationCard",
  props: {
    title: String,
    content: Object,
    loading: Boolean
  },
  computed: {},
  methods: {
    tristate(value) {
      switch (value) {
        case -1:
          return "Failed";
        case 0:
          return "Not Checked";
        case 1:
          return "Succeeded";
      }
    },
    validationCode(value) {
      switch (value) {
        case -1:
          return "Not Checked";
        case 0:
          return "Invalid";
        case 1:
          return "OK";
        case 2:
          return "RFID_VC_VALID_WITH_REVOKED_CERT";
        case 3:
          return "RFID_VC_NO_DSC_LOADED";
        case 4:
          return "RFID_VC_NO_DSC_LOADED";
      }
    }
  }
};
</script>

<style scoped>
.text-area h1 {
  display: block;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5c5c5c;
  font-size: x-large;
}
.text-area ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.text-area li {
  display: block;
  padding: 9px;
  border: 0px solid #dddddd;
  margin-bottom: 5px;
  border-radius: 3px;
}

.text-area li > label {
  display: block;
  float: left;
  margin-top: -19px;
  height: 12px;
  padding: 2px 5px 2px 0px;
  color: #696969;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-small;
}

.text-area pre {
  padding: 2px 2px 2px 5px;
  margin-left: 5px;
  color: #b9b9b9;
  font-size: x-small;
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
}

.dialog-area ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.dialog-area li {
  display: block;
  padding: 9px;
  border: 0px solid #dddddd;
  margin-bottom: 5px;
  border-radius: 3px;
  font-size: large;
}

.dialog-area li > label {
  display: block;
  float: left;
  margin-top: -19px;
  height: 12px;
  padding: 2px 5px 2px 0px;
  color: #696969;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
}

.dialog-area pre {
  padding: 2px 2px 2px 5px;
  margin-left: 5px;

  font-size: x-small;
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
}
</style>
