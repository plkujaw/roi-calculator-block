// Returns #000 or #fff depending on which has better contrast with the given color. For very dark backgrounds, always use white. For light backgrounds, use black.

export function getAccessibleOutlineColor(color) {
	let hex = color.replace("#", "");
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((x) => x + x)
			.join("");
	}
	if (hex.length !== 6) return "#005fcc";

	const r = parseInt(hex.substr(0, 2), 16) / 255;
	const g = parseInt(hex.substr(2, 2), 16) / 255;
	const b = parseInt(hex.substr(4, 2), 16) / 255;

	// Relative luminance (sRGB)
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	// Use a lower threshold for "dark" backgrounds
	return luminance < 0.5 ? "#fff" : "#000";
}
