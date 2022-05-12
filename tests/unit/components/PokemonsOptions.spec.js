import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import pokemonsMock from "../mocks/pokemons.mock";

describe("PokemonPicture Component Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: { pokemons: pokemonsMock },
    });
  });
  it("Should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Should match li with information pokemon with array data", () => {
    const li = wrapper.findAll("li");
    expect(li.length).toBe(4);
    for (let i = 0; i < li.length; i++) {
      const liPokemonName = li[i].text();
      const liId = li[i].attributes("key");
      expect(liPokemonName == pokemonsMock[i].name);
      expect(liId == pokemonsMock[i].id);
    }
  });

  it("Should emmit id from li selected", () => {
    const firstLi = wrapper.find("li");
    const li = wrapper.findAll("li");
    firstLi.trigger("click");
    expect(wrapper.emitted("selectedPokemon")).toEqual([[pokemonsMock[0].id]]);
    expect(li.length).toBe(4);
  });
});
