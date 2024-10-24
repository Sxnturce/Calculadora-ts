import { Dispatch, createContext } from "react";
import { MenuProps, ActionsConsumo } from "../reducers/consumo-reducer";

type ContextProp = {
	state: MenuProps;
	dispatch: Dispatch<ActionsConsumo>;
};

const MenuContext = createContext<ContextProp>({} as ContextProp);

export default MenuContext;
