import type { MenuItem } from "../../types";
import useConsumo from "../../hooks/useConsumo";

type ItemProps = {
	item: MenuItem;
};

function Item({ item }: ItemProps) {
	const { name, price } = item;
	const { dispatch } = useConsumo();
	return (
		<>
			<button
				className="p-4 flex items-center justify-between ring-gray-200 ring-2 hover:ring-2 hover:ring-blue-600 rounded hover:bg-sky-100 transition-all ease-in-out"
				onClick={() => {
					dispatch({ type: "get-item", payload: { menu: item } });
				}}
			>
				<h1>{name}</h1>
				<p className="font-black">${price}</p>
			</button>
		</>
	);
}

export default Item;
