import { useReducer } from "react";
import { ReducerConsumo, initialState } from "../reducers/consumo-reducer.ts";
import MenuContext from "./MenuContext.ts";

type ProviderProp = {
	children: React.ReactNode;
};

const MenuProvider = ({ children }: ProviderProp) => {
	const [state, dispatch] = useReducer(ReducerConsumo, initialState);

	return (
		<MenuContext.Provider value={{ state, dispatch }}>
			{children}
		</MenuContext.Provider>
	);
};
export default MenuProvider;
