const baseUrl = 'https://pokeapi.co/api/v2';

/* Using Axios - Async Await */
async function getPokemonAPI(pokemonName) {
    const endpoint = `${baseUrl}/pokemon/${pokemonName}`;

    try {
        const response = await axios.get(endpoint);

        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
}

async function getAbilitiesAPI() {
    const endpoint = `${baseUrl}/ability`;

    try {
        const response = await axios.get(endpoint);

        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
}

async function getItemAPI(itemId) {
    const endpoint = `${baseUrl}/item/${itemId}`;

    try {
        const response = await axios.get(endpoint);

        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            error
        };
    }
}

export { getPokemonAPI, getAbilitiesAPI, getItemAPI };