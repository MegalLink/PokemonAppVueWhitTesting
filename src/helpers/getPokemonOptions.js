import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonNames = async ([a, b, c, d]) => {
  const promisesArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [rA, rB, rC, rD] = await Promise.all(promisesArr);
  return [
    { name: rA.data.name, id: rA.data.id },
    { name: rB.data.name, id: rB.data.id },
    { name: rC.data.name, id: rC.data.id },
    { name: rD.data.name, id: rD.data.id },
  ];
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
  return pokemons;
};

export default getPokemonOptions;
