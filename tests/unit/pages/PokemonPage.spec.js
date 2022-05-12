import { shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import pokemonsMock from "../mocks/pokemons.mock";
describe("Test PokemonPage", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });
  it("should match snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should call getPokemonArray on mount", () => {
    //Como es de un mount el spy debemos ponerlo antes por que todavia no ha sido llamado,
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      "getPokemonArray"
    );
    //Ejecutamos el componente
    shallowMount(PokemonPage);

    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  it("should call getPokemonArray on mount", () => {
    //Ejecutamos el componente
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
  });

  it("should existe PokemonPicture and PokemonOptions Components", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    const optionsComponent = wrapper.find("pokemon-options-stub");
    const pictureComponent = wrapper.find("pokemon-picture-stub");
    expect(pictureComponent.exists()).toBeTruthy();
    expect(optionsComponent.exists()).toBeTruthy();
    expect(pictureComponent.attributes("pokemonid")).toBe("100");
    expect(optionsComponent.attributes("pokemons")).toBeTruthy();
  });

  it("should change showPokemon,showAnser to true and change message when checkAnswer function is triggered", async () => {
    const pokemonMatch = pokemonsMock[1];
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonMatch,
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    //wrapper.vm i so powerfull :D
    await wrapper.vm.checkAnswer(pokemonMatch.id);
    const h2Message = wrapper.find("h2");
    expect(h2Message.exists()).toBeTruthy();
    expect(h2Message.text()).toBe(`Correcto, es ${pokemonMatch.name}`);
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.vm.showAnswer).toBeTruthy();
    await wrapper.vm.checkAnswer(123);
    expect(h2Message.text()).toBe(`Nop, es ${pokemonMatch.name}`);
  });
});
