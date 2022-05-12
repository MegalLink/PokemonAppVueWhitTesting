import getPokemonOptions from "@/helpers/getPokemonOptions";
import pokemonApi from "@/api/pokemonApi";
import { assert } from "@vue/compiler-core";

let apiSpy;

describe("getPokemonOptions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const data = { name: "a", id: 1 };

  it("", async () => {
    apiSpy = jest.spyOn(pokemonApi, "get");
    apiSpy.mockResolvedValue({ data: data });

    const res = await getPokemonOptions();
    console.log(res);
    expect(res).toStrictEqual([data, data, data, data]);
  });
});
