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
