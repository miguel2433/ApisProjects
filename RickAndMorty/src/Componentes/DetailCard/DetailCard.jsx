function DetailCard({ name, image,status, gender, species, origin, onClick }) {
	return (
		<div
			className="w-[50%] flex flex-row p-2 "
		>
			<img className="w-48 h-48 rounded-l-xl" src={image} alt={name} />
			<div className=" bg-gray-600 pl-4 w-full flex flex-col rounded-r-xl justify-start  items-start">
				<h1 className=" text-white text-xl font-bold rounded-t-xl">{name}</h1>
				<h1>{gender}</h1>
				<p className="mt-4 flex items-center gap-2">
					{status === "Alive" ? (
						<span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
					) : (
						<span className="h-2 w-2 rounded-full bg-red-500 inline-block"></span>
					)}
					<span>
						{status} - {species}
					</span>
				</p>

				<h1 className="mt-2 text-xl font-bold">Origin </h1>
				<p>{origin.name}</p>
                <button className="mr-4 mt-0.5 self-end bg-gray-950 py-0.5 px-2 rounded-xl cursor-pointer" onClick={onClick}>Volver</button>
			</div>
		</div>
	);
}

export default DetailCard;





