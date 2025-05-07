<template>
  <v-card :loading="loading">
    <v-card-text class="text-area">
      <v-layout row wrap>
        <v-flex md12 xs12>
          <li>
            <label>Data</label>
            {{ data }}
          </li>
        </v-flex>
        <v-flex md12 xs12>
          <li>
            <label>Bytes</label>
            {{ bytedata }}
          </li>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>

      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text class="dialog-area">
            <v-layout row wrap>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Data </label>
                  {{ data }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Raw Bytes</label>
                  {{ bytedata }}
                </li>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "barcode-data-card",
  data: () => ({
    dialog: false,
    rawDataDialog: false
  }),
  props: {
    title: String,
    content: String,
    loading: Boolean
  },
  computed: {
    // a computed getter
    data: function() {
      var data_buffer = Buffer.from(this.content, "base64");
      return data_buffer.toString("utf8");
      // console.log(data_buffer.toString('hex'));
      // console.log(data_buffer.toString('utf8'))
    },
    bytedata: function() {
      var data_buffer = Buffer.from(this.content, "base64");
      return data_buffer.toString("hex");
    }
  },
  methods: {}
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
