import { useState, useReducer, useEffect } from "react";
import { menuItems } from "./data/db.ts";
import { ReducerConsumo, initialState } from "./reducers/consumo-reducer.ts";
import Item from "./components/partials/MenuItem.tsx";
import Consumo from "./components/partials/Consumo.tsx";
import Propina from "./components/partials/Propina.tsx";

function App() {
	const [state, dispatch] = useReducer(ReducerConsumo, initialState);
	const [menus] = useState(menuItems);

	useEffect(() => {
		if (state.menu.length === 0) {
			dispatch({ type: "get-percent", payload: { percent: 0 } });
		}
	}, [state.menu]);

	const exist = state.menu.length <= 0 ? "No hay nada en su consumo" : null;

	return (
		<>
			<header className="w-full bg-neutral-800 py-4 text-white">
				<h1 className="text-center text-xl font-medium sm:text-2xl">
					Calculadora de Propinas y consumo
				</h1>
			</header>
			<main className="w-11/12 max-w-7xl py-20 mx-auto grid grid-cols-1 gap-8 lg:gap:6 lg:grid-cols-2">
				<section className="flex flex-col gap-6 bg-white p-8 rounded">
					<h2 className="text-3xl text-blue-800 font-black">Menú</h2>
					<div className="flex flex-col gap-4">
						{menus.map((item) => (
							<Item item={item} key={item.id} dispatch={dispatch} />
						))}
					</div>
				</section>
				<section className="flex flex-col gap-6 p-8 rounded bg-white">
					<h2 className="text-3xl text-emerald-500 font-black">Consumo</h2>
					{exist ? (
						<p>{exist}</p>
					) : (
						state.menu.map((m) => (
							<Consumo item={m} key={m.id} dispatch={dispatch} />
						))
					)}
					{!exist && <Propina dispatch={dispatch} state={state} />}
				</section>
			</main>
		</>
	);
}

export default App;
