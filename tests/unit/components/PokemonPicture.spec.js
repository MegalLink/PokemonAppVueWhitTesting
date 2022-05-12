import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";
describe("PokemonPicture Component Tests", () => {
  it("Should match snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 1, reveal: false },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render just one image when reveal is false", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: 100, reveal: false },
    });
    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img2).toBeUndefined();
  });

  it("should render two images when reveal is true", () => {
    const pokemonID = 50;
    const wrapper = shallowMount(PokemonPicture, {
      props: { pokemonId: pokemonID, reveal: true },
    });
    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img2.exists()).toBeTruthy();
    expect(img1.attributes("src")).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`
    );
  });
});
