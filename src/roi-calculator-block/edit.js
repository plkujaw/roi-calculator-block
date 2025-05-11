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
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

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
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const results = calculateResults(attributes);
	const blockProps = useBlockProps({ className: "roi-calculator" });

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Block Colors", "roi-calculator-block")}
					colorSettings={[
						{
							value: attributes.backgroundColor,
							onChange: (color) => setAttributes({ backgroundColor: color }),
							label: __("Background Color", "roi-calculator-block"),
						},
						{
							value: attributes.sliderColor,
							onChange: (color) => setAttributes({ sliderColor: color }),
							label: __("Slider Color", "roi-calculator-block"),
						},
						{
							value: attributes.textColor,
							onChange: (color) => setAttributes({ textColor: color }),
							label: __("Text Color", "roi-calculator-block"),
						},
						{
							value: attributes.accentColor,
							onChange: (color) => setAttributes({ accentColor: color }),
							label: __("Accent Color", "roi-calculator-block"),
						},
					]}
				/>
				<Button
					isSecondary
					onClick={() => {
						setAttributes({
							backgroundColor: metadata.attributes.backgroundColor.default,
							sliderColor: metadata.attributes.sliderColor.default,
							textColor: metadata.attributes.textColor.default,
							accentColor: metadata.attributes.accentColor.default,
						});
					}}
					style={{ margin: "0 16px 16px" }}
				>
					{__("Reset Colors to Default", "roi-calculator-block")}
				</Button>
			</InspectorControls>
			<div
				{...blockProps}
				style={{
					"--slider-color": attributes.sliderColor,
					"--roi-text-color": attributes.textColor,
					"--roi-bg-color": attributes.backgroundColor,
					"--roi-accent-color": attributes.accentColor,
				}}
			>
				<div className="roi-calculator__inputs">
					<div className="roi-calculator__row">
						<div className="roi-calculator__field roi-calculator__field--wide">
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
							<div className="slider-row">
								<input
									id="percentage-increase"
									type="range"
									min={1}
									max={100}
									step={1}
									value={attributes.percentageIncrease}
									onChange={(e) =>
										setAttributes({
											percentageIncrease: Number(e.target.value),
										})
									}
									style={{
										"--percent": `${
											((attributes.percentageIncrease - 1) / (100 - 1)) * 100
										}%`,
									}}
								/>
								<span className="slider-value">
									{attributes.percentageIncrease}%
								</span>
							</div>
						</div>
						<div className="roi-calculator__field roi-calculator__field--wide">
							<input
								type="text"
								value={attributes.hoursLabel}
								onChange={(e) => setAttributes({ hoursLabel: e.target.value })}
								placeholder={__(
									metadata.attributes.hoursLabel.default,
									"roi-calculator-block",
								)}
							/>
							<div className="slider-row">
								<input
									id="hours"
									type="range"
									min={1}
									max={24}
									step={1}
									value={attributes.hours}
									onChange={(e) =>
										setAttributes({ hours: Number(e.target.value) })
									}
									style={{
										"--percent": `${
											((attributes.hours - 1) / (24 - 1)) * 100
										}%`,
									}}
								/>
								<span className="slider-value">{attributes.hours}</span>
							</div>
						</div>
					</div>
					<div className="roi-calculator__row">
						<div className="roi-calculator__field roi-calculator__field--wide">
							<input
								type="text"
								value={attributes.daysLabel}
								onChange={(e) => setAttributes({ daysLabel: e.target.value })}
								placeholder={__(
									metadata.attributes.daysLabel.default,
									"roi-calculator-block",
								)}
							/>
							<div className="slider-row">
								<input
									id="days"
									type="range"
									min={1}
									max={31}
									step={1}
									value={attributes.days}
									onChange={(e) =>
										setAttributes({ days: Number(e.target.value) })
									}
									style={{
										"--percent": `${((attributes.days - 1) / (31 - 1)) * 100}%`,
									}}
								/>
								<span className="slider-value">{attributes.days}</span>
							</div>
						</div>
						<div className="roi-calculator__field roi-calculator__field--wide">
							<input
								type="text"
								value={attributes.weeksPerYearLabel}
								onChange={(e) =>
									setAttributes({ weeksPerYearLabel: e.target.value })
								}
								placeholder={__(
									metadata.attributes.weeksPerYearLabel.default,
									"roi-calculator-block",
								)}
							/>
							<div className="slider-row">
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
									style={{
										"--percent": `${
											((attributes.weeksPerYear - 1) / (52 - 1)) * 100
										}%`,
									}}
								/>
								<span className="slider-value">{attributes.weeksPerYear}</span>
							</div>
						</div>
					</div>
					<div className="roi-calculator__row">
						<div className="roi-calculator__field">
							<input
								type="text"
								value={attributes.unitsPerHourLabel}
								onChange={(e) =>
									setAttributes({ unitsPerHourLabel: e.target.value })
								}
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
						<div className="roi-calculator__field">
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
								value={attributes.profitPerUnit}
								onChange={(e) =>
									setAttributes({ profitPerUnit: e.target.value })
								}
								onBlur={(e) => {
									const val = parseFloat(e.target.value);
									if (!isNaN(val)) {
										setAttributes({ profitPerUnit: val.toFixed(2) });
									}
								}}
							/>
						</div>
					</div>
				</div>
				<div className="roi-calculator__divider"></div>
				<div className="roi-calculator__results">
					<div className="roi-calculator__results-row">
						<div className="roi-calculator__result roi-calculator__result--main">
							<div className="roi-calculator__field">
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
							</div>
							<div>
								{(results.profitPerYear || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</div>
						</div>
						<div className="roi-calculator__result roi-calculator__result--main">
							<div className="roi-calculator__field">
								<input
									type="text"
									value={attributes.unitsPerYearLabel}
									onChange={(e) =>
										setAttributes({ unitsPerYearLabel: e.target.value })
									}
									placeholder={__(
										metadata.attributes.unitsPerYearLabel.default,
										"roi-calculator-block",
									)}
								/>
							</div>
							<div>
								{Math.round(results.unitsPerYear || 0).toLocaleString(
									undefined,
									{
										maximumFractionDigits: 0,
									},
								)}
							</div>
						</div>
					</div>
					<div className="roi-calculator__results-row">
						<div className="roi-calculator__result">
							<div className="roi-calculator__field">
								<input
									type="text"
									value={attributes.hoursInWeekLabel}
									onChange={(e) =>
										setAttributes({ hoursInWeekLabel: e.target.value })
									}
									placeholder={__(
										metadata.attributes.hoursInWeekLabel.default,
										"roi-calculator-block",
									)}
								/>
							</div>
							<div>
								{(results.hoursInWeek || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</div>
						</div>
						<div className="roi-calculator__result">
							<div className="roi-calculator__field">
								<input
									type="text"
									value={attributes.extraHoursLabel}
									onChange={(e) =>
										setAttributes({ extraHoursLabel: e.target.value })
									}
									placeholder={__(
										metadata.attributes.extraHoursLabel.default,
										"roi-calculator-block",
									)}
								/>
							</div>
							<div>
								{(results.extraHours || 0).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</div>
						</div>
						<div className="roi-calculator__result">
							<div className="roi-calculator__field">
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
							</div>
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
		</>
	);
}
