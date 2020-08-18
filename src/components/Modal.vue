<template>
  <v-dialog v-model="modal" max-width="600">
    <v-card>
      <v-card-title class="headline">
        Корабль: {{ modalData.starship_class }}</v-card-title
      >
      <v-card-text class="text-left">
        <h4>Название коробля: {{ modalData.name }}</h4>
        <p>Модель: {{ modalData.model }}</p>
        <p>Кол-во пассажиров: {{ modalData.passengers }}</p>
        <p>Класс коробля: {{ modalData.starship_class }}</p>
        <p>Экипаж: {{ modalData.crew }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalData: {
      type: [Array, Object],
      required: true,
    },
    dialog: Boolean,
  },
  data() {
    return {
      modal: null,
    }
  },
  watch: {
    dialog(v) {
      v ? (this.modal = this.dialog) : (this.modal = !this.dialog)
    },
  },
}
</script>
