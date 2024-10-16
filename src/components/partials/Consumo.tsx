import { Dispatch } from "react";
import { ActionsConsumo } from "../../reducers/consumo-reducer";
import type { MenuItem } from "../../types";

type MenuProp = {
	item: MenuItem;
	dispatch: Dispatch<ActionsConsumo>;
};

function Consumo({ item, dispatch }: MenuProp) {
	const { id, name, price, quantity, total } = item;

	return (
		<>
			<div className="w-full border rounded p-4 flex gap-2 items-center justify-between">
				<div className="space-y-4">
					<div className="flex gap-2 items-center">
						<p>{name}</p>
						<p>- ${price}</p>
					</div>
					<div className="flex gap-2 items-center font-bold">
						<p>Cantidad: {quantity}</p>
						<p>- ${total}</p>
					</div>
				</div>
				<button
					className="w-8 h-8 rounded-full bg-red-600 text-white font-bold p-2 text-sm flex items-center justify-center"
					onClick={() => {
						dispatch({ type: "delete-item", payload: { id } });
					}}
				>
					<p>X</p>
				</button>
			</div>
		</>
	);
}

export default Consumo;
