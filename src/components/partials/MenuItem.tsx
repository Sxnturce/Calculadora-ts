import { Dispatch } from "react";
import { ActionsConsumo } from "../../reducers/consumo-reducer";
import type { MenuItem } from "../../types";

type ItemProps = {
	item: MenuItem;
	dispatch: Dispatch<ActionsConsumo>;
};

function Item({ item, dispatch }: ItemProps) {
	const { name, price } = item;
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
