<template>
  <h1>¿Quien es este pokémon?</h1>
  <PokemonPicture :pokemonId="3" :reveal="false" />
  <PokemonOptions />
</template>
<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptins";
getPokemonOptions();
export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>
