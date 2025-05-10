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
console.log("Hello World! (from create-block-roi-calculator-block block)");
/* eslint-enable no-console */

import { render, useState } from "@wordpress/element";
import { calculateResults } from "./calculatorUtils";
import metadata from "./block.json";
import { __ } from "@wordpress/i18n";

function ROICalculatorFrontEnd(props) {
	const [inputs, setInputs] = useState({ ...props });

	const handleChange = (key, value) => {
		setInputs((prev) => ({
			...prev,
			[key]: value,
		}));
	};
	const results = calculateResults(inputs);

	return (
		<div className="roi-calculator-block">
			<div>
				<span>
					{props.percentageIncreaseLabel ||
						__(
							metadata.attributes.percentageIncreaseLabel.default,
							"roi-calculator-block",
						)}
				</span>
				<input
					type="range"
					min={1}
					max={100}
					value={inputs.percentageIncrease}
					onChange={(e) =>
						handleChange("percentageIncrease", Number(e.target.value))
					}
				/>
				<span>{inputs.percentageIncrease}%</span>
			</div>
			<div>
				<span>
					{props.hoursLabel ||
						__(metadata.attributes.hoursLabel.default, "roi-calculator-block")}
				</span>
				<input
					type="range"
					min={1}
					max={24}
					value={inputs.hours}
					onChange={(e) => handleChange("hours", Number(e.target.value))}
				/>
				<span>{inputs.hours}</span>
			</div>
			<div>
				<span>
					{props.daysLabel ||
						__(metadata.attributes.daysLabel.default, "roi-calculator-block")}
				</span>
				<input
					type="range"
					min={1}
					max={31}
					value={inputs.days}
					onChange={(e) => handleChange("days", Number(e.target.value))}
				/>
				<span>{inputs.days}</span>
			</div>
			<div>
				<span>
					{props.weeksPerYearLabel ||
						__(
							metadata.attributes.weeksPerYearLabel.default,
							"roi-calculator-block",
						)}
				</span>
				<input
					type="range"
					min={1}
					max={52}
					value={inputs.weeksPerYear}
					onChange={(e) => handleChange("weeksPerYear", Number(e.target.value))}
				/>
				<span>{inputs.weeksPerYear}</span>
			</div>
			<div>
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
					value={inputs.unitsPerHour}
					onChange={(e) => handleChange("unitsPerHour", Number(e.target.value))}
				/>
			</div>
			<div>
				<span>
					{props.profitPerUnitLabel ||
						__(
							metadata.attributes.profitPerUnitLabel.default,
							"roi-calculator-block",
						)}
				</span>
				<input
					type="number"
					min={0}
					step={0.01}
					value={inputs.profitPerUnit.toFixed(2)}
					onChange={(e) =>
						handleChange("profitPerUnit", parseFloat(e.target.value))
					}
				/>
			</div>
			<div>
				{inputs.profitPerYearLabel ||
					__(
						metadata.attributes.profitPerYearLabel.default,
						"roi-calculator-block",
					)}
				{results.profitPerYear}
			</div>
			<div>
				{inputs.unitsPerYearLabel ||
					__(
						metadata.attributes.unitsPerYearLabel.default,
						"roi-calculator-block",
					)}
				{results.unitsPerYear}
			</div>
			<div>
				{inputs.hoursInWeekLabel ||
					__(
						metadata.attributes.hoursInWeekLabel.default,
						"roi-calculator-block",
					)}
				{results.hoursInWeek}
			</div>
			<div>
				{inputs.extraHoursLabel ||
					__(
						metadata.attributes.extraHoursLabel.default,
						"roi-calculator-block",
					)}
				{results.extraHours}
			</div>
			<div>
				{inputs.extraUnitsPerWeekLabel ||
					__(
						metadata.attributes.extraUnitsPerWeekLabel.default,
						"roi-calculator-block",
					)}
				{results.extraUnitsPerWeek}
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
