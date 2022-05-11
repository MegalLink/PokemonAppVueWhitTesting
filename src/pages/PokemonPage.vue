<template>
  <h1 v-if="!pokemon">Espere porfavor</h1>
  <div v-else>
    <h1>¿Quien es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :reveal="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selectedPokemon="checkAnswer" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>
<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  mounted() {
    this.getPokemonArray();
  },
  methods: {
    async getPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId == this.pokemon.id) {
        this.message = `Correcto, es ${this.pokemon.name}`;
      } else {
        this.message = `Nop, es ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon = null;
      this.getPokemonArray();
    },
  },
};
</script>
