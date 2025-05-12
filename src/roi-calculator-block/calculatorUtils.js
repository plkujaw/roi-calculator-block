export function calculateResults({
	percentageIncrease,
	hours,
	days,
	weeksPerYear,
	unitsPerHour,
	profitPerUnit,
}) {
	const hoursInWeek = hours * days;
	const extraHours = hoursInWeek * (percentageIncrease / 100);
	const extraUnitsPerWeek = unitsPerHour * extraHours;
	const unitsPerYear = extraUnitsPerWeek * weeksPerYear;
	const profitPerYear = unitsPerYear * profitPerUnit;

	return {
		hoursInWeek,
		extraHours,
		extraUnitsPerWeek,
		unitsPerYear,
		profitPerYear,
	};
}

export function convertProfitPerUnit(profitPerUnit, conversionRate) {
	const profit = parseFloat(profitPerUnit);
	if (isNaN(profit)) return 0;
	return profit * conversionRate;
}

export function safeNumber(value) {
	if (value === "" || value === null || value === undefined) return 0;
	const n = Number(value);
	return isNaN(n) ? 0 : n;
}
