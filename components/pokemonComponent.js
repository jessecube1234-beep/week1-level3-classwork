export default function PokemonComponent(data) {
    const types = data.types.map(t => t.type.name).join(", ");

    return `
        <div class="pokemon-card">

            <img 
                src="${data.sprites.front_default}" 
                alt="${data.name}"
            />

            <p><strong>Name:</strong> ${data.name} - <strong>ID:</strong> ${data.id}</p>

            <p><strong>Pokemon Weight:</strong> ${data.weight}</p>

            <p><strong>Pokemon Height:</strong> ${data.height}</p>

            <p><strong>Pokemon Types:</strong> ${types}</p>

        </div>
    `;
}