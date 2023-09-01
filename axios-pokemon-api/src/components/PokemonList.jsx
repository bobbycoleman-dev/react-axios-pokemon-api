import React from "react";

const PokemonList = (props) => {
	return (
		<div className="mt-3 w-25">
			<ul className="list-group">
				{props.pokemonList.map((pokemon, idx) => {
					return (
						<li key={idx} className="list-group-item">
							{idx + 1}: {pokemon.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PokemonList;
