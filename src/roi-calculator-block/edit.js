/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { calculateResults } from "./calculatiorUtils";

export default function Edit({ attributes, setAttributes }) {
	const results = calculateResults(attributes);
	return (
		<div className="roi-calculator-block" {...useBlockProps()}>
			<div className="roi-calculator-block__percentage-increase">
				<label htmlFor="percentage-increase">
					{__("Percentage Increase", "roi-calculator-block")}
				</label>
				<input
					id="percentage-increase"
					type="range"
					min={1}
					max={100}
					step={1}
					value={attributes.percentageIncrease}
					onChange={(e) =>
						setAttributes({ percentageIncrease: Number(e.target.value) })
					}
				/>
				<span>{attributes.percentageIncrease}%</span>
			</div>
			<div className="roi-calculator-block__hours">
				<label htmlFor="hours">{__("Hours", "roi-calculator-block")}</label>
				<input
					id="hours"
					type="range"
					min={1}
					max={24}
					step={1}
					value={attributes.hours}
					onChange={(e) => setAttributes({ hours: Number(e.target.value) })}
				/>
				<span>{attributes.hours}</span>
			</div>
			<div className="roi-calculator-block__days">
				<label htmlFor="days">{__("Days", "roi-calculator-block")}</label>
				<input
					id="days"
					type="range"
					min={1}
					max={31}
					step={1}
					value={attributes.days}
					onChange={(e) => setAttributes({ days: Number(e.target.value) })}
				/>
				<span>{attributes.days}</span>
			</div>
			<div className="roi-calculator-block__weeks-per-year">
				<label htmlFor="weeks-per-year">
					{__("Weeks per Year", "roi-calculator-block")}
				</label>
				<input
					id="weeks-per-year"
					type="range"
					min={1}
					max={52}
					step={1}
					value={attributes.weeksPerYear}
					onChange={(e) =>
						setAttributes({ weeksPerYear: Number(e.target.value) })
					}
				/>
				<span>{attributes.weeksPerYear}</span>
			</div>
			<div className="roi-calculator-block__units-per-hour">
				<label htmlFor="units-per-hour">
					{__("Units per Hour", "roi-calculator-block")}
				</label>
				<input
					id="units-per-hour"
					type="number"
					min={0}
					step={1}
					value={attributes.unitsPerHour}
					onChange={(e) =>
						setAttributes({ unitsPerHour: Number(e.target.value) })
					}
				/>
			</div>
			<div className="roi-calculator-block__profit-per-unit">
				<label htmlFor="profit-per-unit">
					{__("Profit per Unit", "roi-calculator-block")}
				</label>
				<input
					id="profit-per-unit"
					type="number"
					min={0}
					step={0.01}
					value={attributes.profitPerUnit.toFixed(2)}
					onChange={(e) =>
						setAttributes({ profitPerUnit: parseFloat(e.target.value) })
					}
				/>
			</div>
			<div>Profit per year: {results.profitPerYear}</div>
			<div>Units per year: {results.unitsPerYear}</div>
			<div>Hours in a week 24/7: {results.hoursInWeek}</div>
			<div>Extra hours: {results.extraHours}</div>
			<div>Extra extraUnitsPerWeek: {results.extraUnitsPerWeek}</div>
		</div>
	);
}
