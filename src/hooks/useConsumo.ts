import { useContext } from "react";
import MenuContext from "../context/MenuContext";

function useConsumo() {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("useConsumo cannot use within ProviderMenu");
	}

	const { state, dispatch } = context;
	return {
		state,
		dispatch,
	};
}

export default useConsumo;
