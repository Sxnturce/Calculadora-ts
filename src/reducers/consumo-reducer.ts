import { MenuItem } from "../types";

export type ActionsConsumo =
	| { type: "get-item"; payload: { menu: MenuItem } }
	| { type: "delete-item"; payload: { id: MenuItem["id"] } }
	| { type: "get-percent"; payload: { percent: number } }
	| { type: "clear-items" };

export type MenuProps = {
	menu: MenuItem[];
	percent: number;
};

export const initialState: MenuProps = {
	menu: [],
	percent: 0,
};

export const ReducerConsumo = (
	state: MenuProps = initialState,
	action: ActionsConsumo
) => {
	if (action.type === "get-item") {
		const menu = state.menu;
		const payloadMenu = action.payload.menu;
		let menuArr: MenuItem[] = [];

		const exist = menu.find((m) => m.id === payloadMenu.id);

		if (!exist) {
			menuArr = [
				...menu,
				{ ...payloadMenu, quantity: 1, total: payloadMenu.price },
			];
		} else {
			const newItem = { ...exist, quantity: exist.quantity + 1 };

			const mapMenu = menu.map((m) =>
				m.id === payloadMenu.id
					? {
							...m,
							...newItem,
							total: newItem.quantity * m.price,
					  }
					: m
			);
			menuArr = mapMenu;
		}
		return {
			...state,
			menu: menuArr,
		};
	}
	if (action.type === "delete-item") {
		const newList = state.menu.filter((m) => m.id !== action.payload.id);
		return {
			...state,
			menu: newList,
		};
	}
	if (action.type === "get-percent") {
		const percent = action.payload.percent;
		return {
			...state,
			percent,
		};
	}
	if (action.type === "clear-items") {
		return {
			menu: [],
			percent: 0,
		};
	}
	return state;
};
