<template>
  <div class="container-options">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectedPokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //LA emicion es un array de datos [pokemon.id, otherValue] si mandamos mas datos seria con ,
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.container-options {
  display: flex;
  justify-content: center;
}
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
