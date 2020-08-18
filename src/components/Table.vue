<template>
  <v-card>
    <p>{{ currentUser.name }}</p>
    <Modal :modalData="currentUser" :dialog.sync="dialog" />
    <p>{{ dialog }}</p>
    <v-card-title>
      star wars
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :loading="loading"
      loading-text="Loading... Please wait"
      dense
      :headers="headers"
      :items="shipsData"
      :search="search"
      :items-per-page="10"
      :options.sync="options"
      @click:row="currentRow"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import Modal from "./Modal"
export default {
  components: { Modal },
  props: {
    ships: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      options: {},
      currentUser: [],
      loading: false,
      search: "",
      headers: [
        { text: "crew", value: "crew" },
        { text: "passengers", value: "passengers" },
        { text: "starship class", value: "starship_class" },
        { text: "cost", value: "cost_in_credits" },
        { text: "max speed", value: "max_atmosphering_speed" },
        { text: "manufacturer", value: "manufacturer" },
        { text: "model", value: "model" },
      ],
      shipsData: [
        {
          crew: "",
          passengers: "",
          starship_class: "",
          cost_in_credits: "",
          max_atmosphering_speed: "",
          manufacturer: "",
          model: "",
        },
      ],
    }
  },
  watch: {
    // listen pagination
    options(e) {
      console.log("Page count", e)
      this.switchPage(e)
    },
    // if props "ships" changes
    ships() {
      this.describeShips()
    },
  },
  mounted() {
    // set data handler
    this.describeShips()
  },
  methods: {
    describeShips() {
      this.loading = true
      this.ships.results.forEach((item) => {
        const obj = {
          name: item.name,
          crew: item.crew,
          passengers: item.passengers,
          starship_class: item.starship_class,
          cost_in_credits: item.cost_in_credits,
          max_atmosphering_speed: item.max_atmosphering_speed,
          manufacturer: item.manufacturer,
          model: item.model,
        }

        this.shipsData.push(obj)
      })
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    // current row
    currentRow(el) {
      console.log(el)
      this.dialog = !this.dialog
      this.currentUser = el
    },
    // swith page
    async switchPage({ page }) {
      this.loading = true
      this.$emit("switchPage", page)
      this.loading = false
    },
  },
}
</script>
