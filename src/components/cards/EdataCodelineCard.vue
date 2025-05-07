<template>
  <v-card :loading="loading">
    <v-card-text class="text-area">
      <v-layout row wrap>
        <v-flex md6 xs3>
          <li>
            <label>Type</label>
            {{ content.DocType }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Issuer</label>
            {{ content.IssuingState }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Number</label>
            {{ content.DocNumber }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Surname</label>
            {{ content.Surname }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Given Name</label>
            {{ content.Forenames }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Nationality</label>
            {{ content.Nationality }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Date of Birth</label>
            {{ dob }}
          </li>
        </v-flex>
        <v-flex md6 xs3>
          <li>
            <label>Sex</label>
            {{ content.Sex }}
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
                  <label>Type</label>
                  {{ content.DocType }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Issuer</label>
                  {{ content.IssuingState }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Number</label>
                  {{ content.DocNumber }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Surname</label>
                  {{ content.Surname }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Given Name</label>
                  {{ content.Forenames }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Nationality</label>
                  {{ content.Nationality }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Date of Birth</label>
                  {{ dob }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Sex</label>
                  {{ content.Sex }}
                </li>
              </v-flex>
              <v-flex lg3 md6>
                <li>
                  <label>Date of Expiration</label>
                  {{ expiration }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Expired</label>
                  {{ content.ExpiredDocumentFlag }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Optional Data 1</label>
                  {{ content.OptionalData1 }}
                </li>
              </v-flex>
              <v-flex lg3 md6 xs12>
                <li>
                  <label>Optional Data 2</label>
                  {{ content.OptionalData2 }}
                </li>
              </v-flex>
              <v-flex xs12>
                <li>
                  <label>MRZ Lines</label>
                  <pre>{{ content.Line1 }}</pre>
                  <pre>{{ content.Line2 }}</pre>
                  <pre>{{ content.Line3 }}</pre>
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
  name: "EdataCodelineCard",
  data: () => ({
    dialog: false
  }),
  props: {
    title: String,
    content: Object,
    loading: Boolean
  },
  computed: {
    dob: function() {
      return this.makeDate(
        this.content.DateOfBirth.Day,
        this.content.DateOfBirth.Month,
        this.content.DateOfBirth.Year
      );
    },
    expiration: function() {
      return this.makeDate(
        this.content.ExpiryDate.Day,
        this.content.ExpiryDate.Month,
        this.content.ExpiryDate.Year
      );
    }
  },
  methods: {
    makeDate(day, month, year) {
      const date = new Date(year, month - 1, day); // 2009-11-10
      return (
        day.toString() +
        " " +
        date.toLocaleString("default", { month: "short" }) +
        " " +
        year
      );
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
