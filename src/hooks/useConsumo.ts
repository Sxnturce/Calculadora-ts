import { useState, useMemo, useEffect } from "react";

import type { MenuItem } from "../types";

export function useConsumo() {
	const [menu, setMenu] = useState<MenuItem[]>([]);
	const [subtot, setSubTot] = useState(0);
	const [percent, setPercent] = useState(0);
	const [propina, setPropina] = useState(0);
	const [tot, setTot] = useState(0);

	useMemo(() => {
		const result = menu.reduce((prev, item) => {
			return prev + item.total;
		}, 0);

		if (menu.length > 0) {
			setPercent(0);
			setPropina(0);
		}
		setSubTot(result);
	}, [menu]);

	useEffect(() => {
		function calculatePropina() {
			setPropina(subtot * percent);
		}
		calculatePropina();
	}, [menu, percent]);

	useEffect(() => {
		function calculateTot() {
			setTot(subtot + propina);
		}
		calculateTot();
	}, [menu, propina]);

	function getItem(item: MenuItem) {
		const exist = menu.find((m) => m.id === item.id);
		if (!exist) {
			setMenu([...menu, { ...item, quantity: 1, total: item.price }]);
			return;
		}

		const newItem = { ...exist, quantity: (exist.quantity += 1) };

		const newMenu = menu.map((m) =>
			m.id === item.id
				? {
						...m,
						...newItem,
						total: m.quantity * m.price,
				  }
				: m
		);
		setMenu(newMenu);
	}

	function deleteItem(id: MenuItem["id"]) {
		const newList = menu.filter((m) => m.id !== id);
		setMenu(newList);
	}

	function saveChange() {
		setMenu([]);
		setPropina(0);
		setPercent(0);
	}

	return {
		getItem,
		menu,
		deleteItem,
		subtot,
		setPercent,
		propina,
		tot,
		saveChange,
	};
}
