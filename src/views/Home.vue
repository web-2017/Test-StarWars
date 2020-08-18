<template>
  <div class="home">
    <h1>Ships info</h1>
    <Table v-if="ships" :ships.sync="ships" @switchPage="switchPage" />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "../components/Table"
import { starWorsApi } from "../api"
import { mapGetters } from "vuex"

export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      ships: null,
    }
  },
  mounted() {
    // get respone
    this.getResponse()
  },
  methods: {
    async getResponse() {
      this.$store.dispatch("fetchResponse", starWorsApi.starships).then(() => {
        this.ships = this.getShips
      })
    },
    async switchPage(id) {
      console.log("switchPage", id)
      this.$store.dispatch(
        "fetchResponseSwitchPage",
        `http://swapi.dev/api/starships/?page=${id}`
      )
      this.ships = this.getShips
    },
  },
  computed: {
    ...mapGetters(["getShips"]),
  },
}
</script>
