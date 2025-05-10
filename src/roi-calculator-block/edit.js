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

import { calculateResults } from "./calculatorUtils";
import metadata from "./block.json";

export default function Edit({ attributes, setAttributes }) {
	const results = calculateResults(attributes);
	return (
		<div className="roi-calculator-block" {...useBlockProps()}>
			<div className="roi-calculator-block__percentage-increase">
				<input
					type="text"
					value={attributes.percentageIncreaseLabel}
					onChange={(e) =>
						setAttributes({ percentageIncreaseLabel: e.target.value })
					}
					placeholder={__(
						metadata.attributes.percentageIncreaseLabel.default,
						"roi-calculator-block",
					)}
				/>
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
				<input
					type="text"
					value={attributes.hoursLabel}
					onChange={(e) => setAttributes({ hoursLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.hoursLabel.default,
						"roi-calculator-block",
					)}
				/>
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
				<input
					type="text"
					value={attributes.daysLabel}
					onChange={(e) => setAttributes({ daysLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.daysLabel.default,
						"roi-calculator-block",
					)}
				/>
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
				<input
					type="text"
					value={attributes.weeksPerYearLabel}
					onChange={(e) => setAttributes({ weeksPerYearLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.weeksPerYearLabel.default,
						"roi-calculator-block",
					)}
				/>
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
				<input
					type="text"
					value={attributes.unitsPerHourLabel}
					onChange={(e) => setAttributes({ unitsPerHourLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.unitsPerHourLabel.default,
						"roi-calculator-block",
					)}
				/>
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
				<input
					type="text"
					value={attributes.profitPerUnitLabel}
					onChange={(e) =>
						setAttributes({ profitPerUnitLabel: e.target.value })
					}
					placeholder={__(
						metadata.attributes.profitPerUnitLabel.default,
						"roi-calculator-block",
					)}
				/>
				<input
					id="profit-per-unit"
					type="number"
					min={0}
					step={0.01}
					value={attributes.profitPerUnit.toFixed(2)}
					onChange={(e) =>
						setAttributes({ profitPerUnit: parseFloat(e.target.value) })
					}
					placeholder={__(
						metadata.attributes.profitPerUnitLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.profitPerUnit}</span>
			</div>
			<div>
				<input
					type="text"
					value={attributes.profitPerYearLabel}
					onChange={(e) =>
						setAttributes({ profitPerYearLabel: e.target.value })
					}
					placeholder={__(
						metadata.attributes.profitPerYearLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.profitPerYear}</span>
			</div>
			<div>
				<input
					type="text"
					value={attributes.unitsPerYearLabel}
					onChange={(e) => setAttributes({ unitsPerYearLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.unitsPerYearLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.unitsPerYear}</span>
			</div>
			<div>
				<input
					type="text"
					value={attributes.hoursInWeekLabel}
					onChange={(e) => setAttributes({ hoursInWeekLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.hoursInWeekLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.hoursInWeek}</span>
			</div>
			<div>
				<input
					type="text"
					value={attributes.extraHoursLabel}
					onChange={(e) => setAttributes({ extraHoursLabel: e.target.value })}
					placeholder={__(
						metadata.attributes.extraHoursLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.extraHours}</span>
			</div>
			<div>
				<input
					type="text"
					value={attributes.extraUnitsPerWeekLabel}
					onChange={(e) =>
						setAttributes({ extraUnitsPerWeekLabel: e.target.value })
					}
					placeholder={__(
						metadata.attributes.extraUnitsPerWeekLabel.default,
						"roi-calculator-block",
					)}
				/>
				<span>{results.extraUnitsPerWeek}</span>
			</div>
		</div>
	);
}
