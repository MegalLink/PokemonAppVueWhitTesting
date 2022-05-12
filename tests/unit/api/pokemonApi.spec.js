import pokemonApi from "@/api/pokemonApi";
import { assert } from "@vue/compiler-core";

describe("pokemonApi", () => {
  it("should be configured", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
