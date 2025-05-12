/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
// console.log("Hello World! (from create-block-roi-calculator-block block)");
/* eslint-enable no-console */

import { render, useState, useEffect } from "@wordpress/element";
import {
	calculateResults,
	convertProfitPerUnit,
	safeNumber,
} from "./calculatorUtils";
import metadata from "./block.json";
import { __ } from "@wordpress/i18n";
import { useCurrencies, useConversionRate } from "./currencyUtils";

function ROICalculatorFrontEnd(props) {
	const [inputs, setInputs] = useState({ ...props });
	const [selectedCurrency, setSelectedCurrency] = useState(
		props.baseCurrency || "GBP",
	);
	const { currencies, isLoading } = useCurrencies();
	const conversionRate = useConversionRate(
		inputs.profitPerUnitCurrency,
		props.baseCurrency,
	);

	const handleChange = (key, value) => {
		setInputs((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	// Calculate safe values for calculations
	const safeUnitsPerHour = safeNumber(inputs.unitsPerHour);
	const safeProfitPerUnit = safeNumber(inputs.profitPerUnit);
	const profitPerUnitInBase = convertProfitPerUnit(
		safeProfitPerUnit,
		conversionRate,
	);
	const results = calculateResults({
		...inputs,
		unitsPerHour: safeUnitsPerHour,
		profitPerUnit: profitPerUnitInBase,
	});

	return (
		<div
			className="roi-calculator"
			style={{
				"--slider-color": props.sliderColor,
				"--roi-text-color": props.textColor,
				"--roi-bg-color": props.backgroundColor,
				"--roi-accent-color": props.accentColor,
			}}
		>
			<div className="roi-calculator__inputs">
				<div className="roi-calculator__row">
					<div className="roi-calculator__field roi-calculator__field--wide">
						<span>
							{props.percentageIncreaseLabel ||
								__(
									metadata.attributes.percentageIncreaseLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								type="range"
								min={1}
								max={100}
								value={inputs.percentageIncrease}
								onChange={(e) =>
									handleChange("percentageIncrease", Number(e.target.value))
								}
								style={{
									"--percent": `${
										((inputs.percentageIncrease - 1) / (100 - 1)) * 100
									}%`,
								}}
							/>
							<span className="slider-value">{inputs.percentageIncrease}%</span>
						</div>
					</div>
					<div className="roi-calculator__field roi-calculator__field--wide">
						<span>
							{props.hoursLabel ||
								__(
									metadata.attributes.hoursLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								type="range"
								min={1}
								max={24}
								value={inputs.hours}
								onChange={(e) => handleChange("hours", Number(e.target.value))}
								style={{
									"--percent": `${((inputs.hours - 1) / (24 - 1)) * 100}%`,
								}}
							/>
							<span className="slider-value">{inputs.hours}</span>
						</div>
					</div>
				</div>
				<div className="roi-calculator__row">
					<div className="roi-calculator__field roi-calculator__field--wide">
						<span>
							{props.daysLabel ||
								__(
									metadata.attributes.daysLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								type="range"
								min={1}
								max={31}
								value={inputs.days}
								onChange={(e) => handleChange("days", Number(e.target.value))}
								style={{
									"--percent": `${((inputs.days - 1) / (31 - 1)) * 100}%`,
								}}
							/>
							<span className="slider-value">{inputs.days}</span>
						</div>
					</div>
					<div className="roi-calculator__field roi-calculator__field--wide">
						<span>
							{props.weeksPerYearLabel ||
								__(
									metadata.attributes.weeksPerYearLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								type="range"
								min={1}
								max={52}
								value={inputs.weeksPerYear}
								onChange={(e) =>
									handleChange("weeksPerYear", Number(e.target.value))
								}
								style={{
									"--percent": `${
										((inputs.weeksPerYear - 1) / (52 - 1)) * 100
									}%`,
								}}
							/>
							<span className="slider-value">{inputs.weeksPerYear}</span>
						</div>
					</div>
				</div>
				<div className="roi-calculator__row">
					<div className="roi-calculator__field">
						<span>
							{props.unitsPerHourLabel ||
								__(
									metadata.attributes.unitsPerHourLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<input
							type="number"
							min={0}
							step={1}
							value={inputs.unitsPerHour}
							onChange={(e) => handleChange("unitsPerHour", e.target.value)}
							onBlur={(e) => {
								const val = parseInt(e.target.value, 10);
								if (!isNaN(val)) {
									handleChange("unitsPerHour", val.toString());
								}
							}}
						/>
					</div>
					<div className="roi-calculator__field">
						<span>
							{props.profitPerUnitLabel ||
								__(
									metadata.attributes.profitPerUnitLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="roi-calculator__currency-select-wrapper">
							<select
								className="roi-calculator__currency-select"
								value={inputs.profitPerUnitCurrency}
								onChange={(e) =>
									handleChange("profitPerUnitCurrency", e.target.value)
								}
								disabled={isLoading}
							>
								{currencies.map((currency) => (
									<option key={currency.value} value={currency.value}>
										{currency.value}
									</option>
								))}
							</select>
							<input
								type="number"
								min={0}
								step={0.01}
								value={inputs.profitPerUnit}
								onChange={(e) => handleChange("profitPerUnit", e.target.value)}
								onBlur={(e) => {
									const val = parseFloat(e.target.value);
									if (!isNaN(val)) {
										handleChange("profitPerUnit", val.toFixed(2));
									}
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="roi-calculator__divider"></div>
			<div className="roi-calculator__results">
				<div className="roi-calculator__results-row">
					<div className="roi-calculator__result roi-calculator__result--main">
						{props.profitPerYearLabel ||
							__(
								metadata.attributes.profitPerYearLabel.default,
								"roi-calculator-block",
							)}
						<div>
							<span>{props.baseCurrency}</span>
							{(results.profitPerYear || 0).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</div>
					</div>
					<div className="roi-calculator__result roi-calculator__result--main">
						{props.unitsPerYearLabel ||
							__(
								metadata.attributes.unitsPerYearLabel.default,
								"roi-calculator-block",
							)}
						<div>
							{Math.round(results.unitsPerYear || 0).toLocaleString(undefined, {
								maximumFractionDigits: 0,
							})}
						</div>
					</div>
				</div>
				<div className="roi-calculator__results-row">
					<div className="roi-calculator__result">
						{props.hoursInWeekLabel ||
							__(
								metadata.attributes.hoursInWeekLabel.default,
								"roi-calculator-block",
							)}
						<div>
							{(results.hoursInWeek || 0).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</div>
					</div>
					<div className="roi-calculator__result">
						{props.extraHoursLabel ||
							__(
								metadata.attributes.extraHoursLabel.default,
								"roi-calculator-block",
							)}
						<div>
							{(results.extraHours || 0).toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
						</div>
					</div>
					<div className="roi-calculator__result">
						{props.extraUnitsPerWeekLabel ||
							__(
								metadata.attributes.extraUnitsPerWeekLabel.default,
								"roi-calculator-block",
							)}
						<div>
							{Math.round(results.extraUnitsPerWeek || 0).toLocaleString(
								undefined,
								{
									maximumFractionDigits: 0,
								},
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Render the block on the frontend
document
	.querySelectorAll(".wp-block-create-block-roi-calculator-block")
	.forEach((el) => {
		// Parse attributes from data attributes or use defaults
		const props = JSON.parse(el.dataset.attributes || "{}");
		render(<ROICalculatorFrontEnd {...props} />, el);
	});
