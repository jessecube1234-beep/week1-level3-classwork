// Imports
import { getPokemonAPI } from "./services/getPokemonService.js";
import PokemonComponent from "./components/pokemonComponent.js";

// Variables
const content = document.getElementById("content");
const mainForm = document.getElementById("mainForm");

// Inputs
const searchInput = document.getElementById("pokemonSearchInput");

// Main form event listener
mainForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const searchValue = searchInput.value.trim();

    if (searchValue.length > 0) {
        content.innerHTML = `
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `;

        const pokemonResponse = await getPokemonAPI(searchValue);

        if (pokemonResponse.success) {
            content.innerHTML = PokemonComponent(pokemonResponse.data);
        } else {
            content.innerHTML = `<p class="text-danger">Pokémon not found!</p>`;
        }
    }
});