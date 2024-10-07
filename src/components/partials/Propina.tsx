type PropinaProp = {
	subtotal: number;
	setPercent: React.Dispatch<React.SetStateAction<number>>;
	propina: number;
	total: number;
	saveChange: () => void;
};

function Propina({
	subtotal,
	setPercent,
	propina,
	total,
	saveChange,
}: PropinaProp) {
	const idPercent = [
		{
			id: "tip-10",
			value: 0.1,
			label: "10%",
		},
		{
			id: "tip-20",
			value: 0.2,
			label: "20%",
		},
		{
			id: "tip-50",
			value: 0.5,
			label: "50%",
		},
	];
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
								setPercent(+e.target.value);
							}}
						/>
					</div>
				))}
				<div className="mt-4 flex flex-col gap-6">
					<h2 className="font-bold text-xl">Totales y propina</h2>
					<div className="flex flex-col gap-1">
						<p>
							Subotal a pagar: <span className="font-bold">${subtotal}</span>
						</p>
						<p>
							Propina:{" "}
							<span className="font-bold">${propina ? propina : "0.00"}</span>
						</p>
						<p>
							Total a pagar: <span className="font-bold">${total}</span>
						</p>
					</div>
					<button
						className="w-full bg-black/90 text-white text-center font-bold py-2 hover:bg-white hover:ring-2 hover:text-blue-700  transition-all ease-in-out"
						onClick={() => {
							saveChange();
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
