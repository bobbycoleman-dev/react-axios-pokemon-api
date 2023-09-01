import { useState } from "react";
import axios from "axios";
import FetchButton from "./components/FetchButton";
import PokemonList from "./components/PokemonList";

function App() {
	const [pokemonList, setPokemonList] = useState([]);

	const fetchPokemon = () => {
		axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then((response) => {
			console.log(response);
			setPokemonList(response.data.results);
		});
	};

	return (
		<div className="container mt-5 d-flex flex-column align-items-center">
			<FetchButton fetchPokemon={fetchPokemon} />
			<PokemonList pokemonList={pokemonList} />
		</div>
	);
}

export default App;
