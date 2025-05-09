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

function ROICalculatorFrontEnd(props) {
	const [inputs, setInputs] = useState({ ...props });

	const handleChange = (key, value) => {
		setInputs((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<div className="roi-calculator-block">
			<div>
				<label>Percentage Increase</label>
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
				<label>Hours</label>
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
				<label>Days</label>
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
				<label>Weeks per Year</label>
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
				<label>Units per Hour</label>
				<input
					type="number"
					min={0}
					value={inputs.unitsPerHour}
					onChange={(e) => handleChange("unitsPerHour", Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Profit per Unit</label>
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
