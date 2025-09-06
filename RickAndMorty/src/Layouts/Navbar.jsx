export const Navbar = () => {
	return (
		<nav className="w-full flex flex-col justify-center items-center bg-gray-800 text-white p-4">
			<div className="w-full flex flex-row justify-between">
				<img className="w-20 h-10" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
				<div className="flex flex-row gap-4">
					<div className="group flex flex-col items-start">
						<a className="text-white" href="https://rickandmortyapi.com/">
							Api Original
						</a>
						<span className="block w-0 h-1 bg-white transition-all duration-150 group-hover:w-full"></span>
					</div>

					<div className="group flex flex-col items-start">
						<a href="https://rickandmortyapi.com/documentation">Doc Api</a>
						<span className="block w-0 h-1 bg-white transition-all duration-150 group-hover:w-full"></span>
					</div>
				</div>
			</div>
			<h1 className="text-2xl text-center my-8">Esto es una prueba de consumo de la api de rick y morty</h1>
		</nav>
	);
};

export default Navbar;










