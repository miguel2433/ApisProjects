import { useState, useEffect } from "react";
import Card from "./Componentes/Card/Card.jsx";
import DetailCard from "./Componentes/DetailCard/DetailCard.jsx";
function App() {
	const [characters, setCharacters] = useState([]);
	const [detailMode, setDetailMode] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character/?page=1")
			.then((res) => res.json())
			.then((data) => setCharacters(data.results))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="w-[80%] mx-auto pb-10 flex justify-center items-center flex-col">
      <h1 className="m-8 text-4xl font-bold text-center">Rick And Morty Characters</h1>
			{detailMode ? (
          <DetailCard 
          name={selectedCharacter.name} 
          image={selectedCharacter.image}
          status={selectedCharacter.status}
          gender={selectedCharacter.gender}
          species={selectedCharacter.species}
          origin={selectedCharacter.origin} 
          onClick={() => setDetailMode(false)}>
          </DetailCard>
			) : (
				// Modo lista: muestra todos los personajes
				<div className="grid grid-cols-3 gap-8">
					{characters.map((character) => (
						<Card
							key={character.id}
							name={character.name}
							image={character.image}
							gender={character.gender}
							onClick={() => {
								setSelectedCharacter(character);
								setDetailMode(true);
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;

