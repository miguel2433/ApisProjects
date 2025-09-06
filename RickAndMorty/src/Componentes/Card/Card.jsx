function Card({ name, image, gender, species, origin, onClick }) {
	return (
		<div
			className="rounded p-2 cursor-pointer hover:shadow-lg"
			onClick={onClick} // disparar el detalle
		>
			<h1 className="bg-gray-900 text-white text-center text-xl font-bold rounded-t-xl">{name}</h1>
			<img className="w-full rounded-b-xl" src={image} alt={name} />
		</div>
	);
}

export default Card;

