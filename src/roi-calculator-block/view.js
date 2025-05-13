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
import { getAccessibleOutlineColor } from "./blockUtils";

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
				"--roi-outline-color": getAccessibleOutlineColor(props.backgroundColor),
			}}
		>
			<div className="roi-calculator__inputs">
				<div className="roi-calculator__row">
					<div className="roi-calculator__field">
						<label htmlFor="percentage-increase" className="screen-reader-text">
							{props.percentageIncreaseLabel ||
								__(
									metadata.attributes.percentageIncreaseLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.percentageIncreaseLabel ||
								__(
									metadata.attributes.percentageIncreaseLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								id="percentage-increase"
								type="range"
								min={1}
								max={100}
								value={inputs.percentageIncrease}
								disabled={true}
								style={{
									"--percent": `${(inputs.percentageIncrease / 100) * 100}%`,
								}}
								aria-valuenow={inputs.percentageIncrease}
								aria-valuemin={1}
								aria-valuemax={100}
								aria-label={
									props.percentageIncreaseLabel ||
									__(
										metadata.attributes.percentageIncreaseLabel.default,
										"roi-calculator-block",
									)
								}
							/>
							<span className="slider-value">{inputs.percentageIncrease}%</span>
						</div>
					</div>
					<div className="roi-calculator__field">
						<label htmlFor="hours" className="screen-reader-text">
							{props.hoursLabel ||
								__(
									metadata.attributes.hoursLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.hoursLabel ||
								__(
									metadata.attributes.hoursLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								id="hours"
								type="range"
								min={1}
								max={24}
								value={inputs.hours}
								onChange={(e) => handleChange("hours", Number(e.target.value))}
								style={{
									"--percent": `${(inputs.hours / 24) * 100}%`,
								}}
								aria-valuenow={inputs.hours}
								aria-valuemin={1}
								aria-valuemax={24}
								aria-label={
									props.hoursLabel ||
									__(
										metadata.attributes.hoursLabel.default,
										"roi-calculator-block",
									)
								}
							/>
							<span className="slider-value">{inputs.hours}</span>
						</div>
					</div>
				</div>
				<div className="roi-calculator__row">
					<div className="roi-calculator__field">
						<label htmlFor="days" className="screen-reader-text">
							{props.daysLabel ||
								__(
									metadata.attributes.daysLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.daysLabel ||
								__(
									metadata.attributes.daysLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								id="days"
								type="range"
								min={1}
								max={31}
								value={inputs.days}
								onChange={(e) => handleChange("days", Number(e.target.value))}
								style={{
									"--percent": `${(inputs.days / 31) * 100}%`,
								}}
								aria-valuenow={inputs.days}
								aria-valuemin={1}
								aria-valuemax={31}
								aria-label={
									props.daysLabel ||
									__(
										metadata.attributes.daysLabel.default,
										"roi-calculator-block",
									)
								}
							/>
							<span className="slider-value">{inputs.days}</span>
						</div>
					</div>
					<div className="roi-calculator__field">
						<label htmlFor="weeks-per-year" className="screen-reader-text">
							{props.weeksPerYearLabel ||
								__(
									metadata.attributes.weeksPerYearLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.weeksPerYearLabel ||
								__(
									metadata.attributes.weeksPerYearLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="slider-row">
							<input
								id="weeks-per-year"
								type="range"
								min={1}
								max={52}
								value={inputs.weeksPerYear}
								onChange={(e) =>
									handleChange("weeksPerYear", Number(e.target.value))
								}
								style={{
									"--percent": `${(inputs.weeksPerYear / 52) * 100}%`,
								}}
								aria-valuenow={inputs.weeksPerYear}
								aria-valuemin={1}
								aria-valuemax={52}
								aria-label={
									props.weeksPerYearLabel ||
									__(
										metadata.attributes.weeksPerYearLabel.default,
										"roi-calculator-block",
									)
								}
							/>
							<span className="slider-value">{inputs.weeksPerYear}</span>
						</div>
					</div>
				</div>
				<div className="roi-calculator__row">
					<div className="roi-calculator__field">
						<label htmlFor="units-per-hour" className="screen-reader-text">
							{props.unitsPerHourLabel ||
								__(
									metadata.attributes.unitsPerHourLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.unitsPerHourLabel ||
								__(
									metadata.attributes.unitsPerHourLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<input
							id="units-per-hour"
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
							aria-label={
								props.unitsPerHourLabel ||
								__(
									metadata.attributes.unitsPerHourLabel.default,
									"roi-calculator-block",
								)
							}
							aria-valuenow={inputs.unitsPerHour}
							aria-valuemin={0}
						/>
					</div>
					<div className="roi-calculator__field">
						<label
							htmlFor="profit-per-unit-currency"
							className="screen-reader-text"
						>
							{props.profitPerUnitLabel ||
								__(
									metadata.attributes.profitPerUnitLabel.default,
									"roi-calculator-block",
								)}
						</label>
						<span>
							{props.profitPerUnitLabel ||
								__(
									metadata.attributes.profitPerUnitLabel.default,
									"roi-calculator-block",
								)}
						</span>
						<div className="roi-calculator__currency-select-wrapper">
							<select
								id="profit-per-unit-currency"
								className="roi-calculator__currency-select"
								value={inputs.profitPerUnitCurrency}
								onChange={(e) =>
									handleChange("profitPerUnitCurrency", e.target.value)
								}
								disabled={isLoading}
								aria-label={
									props.profitPerUnitLabel ||
									__(
										metadata.attributes.profitPerUnitLabel.default,
										"roi-calculator-block",
									)
								}
							>
								{currencies.map((currency) => (
									<option key={currency.value} value={currency.value}>
										{currency.value}
									</option>
								))}
							</select>
							<input
								id="profit-per-unit"
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
								aria-label={
									props.profitPerUnitLabel ||
									__(
										metadata.attributes.profitPerUnitLabel.default,
										"roi-calculator-block",
									)
								}
								aria-valuenow={inputs.profitPerUnit}
								aria-valuemin={0}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="roi-calculator__divider"></div>
			<div className="roi-calculator__results" aria-live="polite">
				<dl className="roi-calculator__results-table">
					<div className="roi-calculator__results-row">
						<div className="roi-calculator__result roi-calculator__result--main">
							<dt className="roi-calculator__result-label">
								{props.profitPerYearLabel ||
									__(
										metadata.attributes.profitPerYearLabel.default,
										"roi-calculator-block",
									)}
							</dt>
							<dd className="roi-calculator__result-value">
								<span>{props.baseCurrency}</span>
								{(results.profitPerYear || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</dd>
						</div>
						<div className="roi-calculator__result roi-calculator__result--main">
							<dt className="roi-calculator__result-label">
								{props.unitsPerYearLabel ||
									__(
										metadata.attributes.unitsPerYearLabel.default,
										"roi-calculator-block",
									)}
							</dt>
							<dd className="roi-calculator__result-value">
								{Math.round(results.unitsPerYear || 0).toLocaleString(
									undefined,
									{
										maximumFractionDigits: 0,
									},
								)}
							</dd>
						</div>
					</div>
					<div className="roi-calculator__results-row">
						<div className="roi-calculator__result">
							<dt className="roi-calculator__result-label">
								{props.hoursInWeekLabel ||
									__(
										metadata.attributes.hoursInWeekLabel.default,
										"roi-calculator-block",
									)}
							</dt>
							<dd className="roi-calculator__result-value">
								{(results.hoursInWeek || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</dd>
						</div>
						<div className="roi-calculator__result">
							<dt className="roi-calculator__result-label">
								{props.extraHoursLabel ||
									__(
										metadata.attributes.extraHoursLabel.default,
										"roi-calculator-block",
									)}
							</dt>
							<dd className="roi-calculator__result-value">
								{(results.extraHours || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</dd>
						</div>
						<div className="roi-calculator__result">
							<dt className="roi-calculator__result-label">
								{props.extraUnitsPerWeekLabel ||
									__(
										metadata.attributes.extraUnitsPerWeekLabel.default,
										"roi-calculator-block",
									)}
							</dt>
							<dd className="roi-calculator__result-value">
								{Math.round(results.extraUnitsPerWeek || 0).toLocaleString(
									undefined,
									{
										maximumFractionDigits: 0,
									},
								)}
							</dd>
						</div>
					</div>
				</dl>
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
