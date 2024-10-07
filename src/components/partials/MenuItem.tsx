import type { MenuItem } from "../../types";

type ItemProps = {
	item: MenuItem;
	event: (item: MenuItem) => void;
};

function Item({ item, event }: ItemProps) {
	const { name, price } = item;
	return (
		<>
			<button
				className="p-4 flex items-center justify-between ring-gray-200 ring-2 hover:ring-2 hover:ring-blue-600 rounded hover:bg-sky-100 transition-all ease-in-out"
				onClick={() => {
					event(item);
				}}
			>
				<h1>{name}</h1>
				<p className="font-black">${price}</p>
			</button>
		</>
	);
}

export default Item;
