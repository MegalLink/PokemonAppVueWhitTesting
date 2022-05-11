<template>
  <div class="container-pokemon">
    <img class="hidden-pokemon" :src="imgSrc" alt="pokemon" />
    <img v-if="reveal" class="fade-in" :src="imgSrc" alt="pokemon" />
  </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 1,
    },
    reveal: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>
<style scoped>
/* Pokemon Picture */
.container-pokemon {
  height: 200px;
}

img {
  position: absolute;
  height: 200px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>
