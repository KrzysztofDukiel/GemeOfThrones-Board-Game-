<script>

// import draggable from "../../../Vue.Draggable/src/vuedraggable"

import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      kwadrat: { x: 100, y: 100 }, // Początkowe położenie kwadratu
      test: ["cos", "do", "sprawdzenia"],
      list: [
        { id: 1, text: 'Element 1' },
        { id: 2, text: 'Element 2' },
        { id: 3, text: 'Element 3' },
      ],
    };
  },
  methods: {
    onMove(evt) {
      // Obsługa zdarzenia przeciągania
      const { offsetTop, offsetLeft } = evt.draggedContext.element;
      this.kwadrat = {
        x: offsetLeft,
        y: offsetTop,
      };
    },
    handleChange(event) {
      // Zdarzenie wywoływane po zmianie pozycji elementów w liście
      console.log('Zmiana pozycji:', event);
    },
    handleDrop(event) {
      // Zdarzenie wywoływane po upuszczeniu elementu na obszarze
      // Tutaj możesz zapamiętać pozycję elementu
      const droppedItem = JSON.parse(event.dataTransfer.getData('text/plain'));
      console.log('Element upuszczony:', droppedItem);
    },
  },
};
</script>

<template>
  cos
  <div>
    <!-- Zdjęcie mapy -->
   

    <!-- Kwadrat, który można przeciągać -->
    <draggable v-model="test" :options="{ move: onMove }">
     
      <template #item="{ element }"> 
      <li>{{ element }}</li>
      </template>
    </draggable>
  </div>
  <div>
    <!-- Lista z elementami do przeciągania -->
    <draggable v-model="list" group="items" @change="handleChange">
      <template #item="{ element }"> 
        {{ element.text }}
      
      </template>
    </draggable>

    <!-- Obszar, na który można przeciągać elementy -->
    <div @drop="handleDrop" @dragover.prevent>
      <img src="../assets/9PlayersMap.jpg" alt="Mapa" style="position: relative;">
    </div>
  </div>
</template>

<style scoped>
.kwadrat {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
}
[draggable] {
  cursor: grab;
}
</style>
