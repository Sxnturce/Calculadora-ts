import { Dispatch, useMemo } from "react";
import { idPercent } from "../../data/Propina";
import { ActionsConsumo, MenuProps } from "../../reducers/consumo-reducer";

type PropinaProp = {
	dispatch: Dispatch<ActionsConsumo>;
	state: MenuProps;
};

function Propina({ dispatch, state }: PropinaProp) {
	const subtot = useMemo(() => {
		const result = state.menu.reduce((prev, item) => {
			return prev + item.total;
		}, 0);
		return result;
	}, [state.menu]);

	const propina = useMemo(() => {
		return subtot * state.percent;
	}, [state.menu, state.percent]);

	const tot = useMemo(() => {
		return subtot + propina;
	}, [state.menu, propina]);

	return (
		<>
			<div className="p-4">
				<h2 className="font-bold mb-1 text-xl">Propina:</h2>
				{idPercent.map((percent) => (
					<div key={percent.id} className="flex gap-2 items-center">
						<label className="font-semibold">{percent.label}</label>
						<input
							type="radio"
							name="percent"
							value={percent.value}
							onChange={(e) => {
								dispatch({
									type: "get-percent",
									payload: { percent: +e.target.value },
								});
							}}
						/>
					</div>
				))}
				<div className="mt-4 flex flex-col gap-6">
					<h2 className="font-bold text-xl">Totales y propina</h2>
					<div className="flex flex-col gap-1">
						<p>
							Subotal a pagar: <span className="font-bold">${subtot}</span>
						</p>
						<p>
							Propina:{" "}
							<span className="font-bold">${propina ? propina : "0.00"}</span>
						</p>
						<p>
							Total a pagar: <span className="font-bold">${tot}</span>
						</p>
					</div>
					<button
						className="w-full bg-black/90 text-white text-center font-bold py-2 hover:bg-white hover:ring-2 hover:text-blue-700  transition-all ease-in-out"
						onClick={() => {
							dispatch({ type: "clear-items" });
						}}
					>
						Guardar Orden
					</button>
				</div>
			</div>
		</>
	);
}

export default Propina;
