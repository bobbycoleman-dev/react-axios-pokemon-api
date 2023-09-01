const FetchButton = (props) => {
	return (
		<div>
			<button className="btn btn-primary" onClick={() => props.fetchPokemon()}>
				Fetch Pokemon
			</button>
		</div>
	);
};

export default FetchButton;
