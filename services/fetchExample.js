import { getPokemonAPI, getAbilitiesAPI, getItemAPI } from './api.js';

async function fetchExample() {
  console.log("Fetching Pokémon...");
  const pokemon = await getPokemonAPI(1);
  console.log("Pokemon Result:", pokemon);

  console.log("\nFetching abilities...");
  const abilities = await getAbilitiesAPI();
  console.log("Abilities Result:", abilities);

  console.log("\nFetching item...");
  const item = await getItemAPI(100);
  console.log("Item Result:", item);
}

fetchExample();