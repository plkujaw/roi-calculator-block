# ROI Calculator Block

An accessible, responsive Gutenberg block for WordPress that calculates estimated annual profit and productivity improvements based on user inputs (working hours, units, profit per unit, and more).

## Setup & Installation

### For WordPress Users

1. **Install the plugin**:
   - Download the latest release as a ZIP file from https://github.com/plkujaw/roi-calculator-block/releases
   - Upload the ZIP file via the WordPress dashboard: Plugins > Add Plugin > Upload Plugin.
2. **Activate the plugin** in your WordPress admin (Plugins > Installed Plugins).

### For Developers

1. **Clone the repository** into your WordPress `wp-content/plugins` directory (or move it there after cloning):
   ```sh
   git clone https://github.com/plkujaw/roi-calculator-block
   mv roi-calculator-block /path/to/your/wp-content/plugins/
   cd /path/to/your/wp-content/plugins/roi-calculator-block
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Build the block:**
   ```sh
   npm run build
   # For development: npm start
   ```
4. **Activate the plugin** in your WordPress admin (Plugins > Installed Plugins).

## Block Attributes & Customisation

- **All block customisation is done directly from the WordPress editor via block options (sidebar/Inspector Controls).**
- **Labels:** All input and result labels are editable via the block sidebar (Inspector Controls).
- **Colours:** Customise background, text, slider, and accent colours.
- **Currency:** Select base and profit-per-unit currencies. Currency conversion is handled automatically.
- **Sliders & Inputs:** Adjust working hours, days, weeks, units per hour, and profit per unit.
- **Results:** Semantic, accessible results section with live updates.
- **Responsive:** Layout adapts to all screen sizes.

### Editor vs Frontend Adjustments

**In the editor (block options/sidebar):**
- Set up all labels, default values, available currencies, block colours, and the percentage increase (which is only settable by the editor and not adjustable by site visitors).
- All settings are independent per block instance, allowing multiple calculators with different configurations on the same site.

**On the front end (site visitors):**
- Adjust calculation inputs such as working hours, days, weeks, units per hour, and profit per unit.
- See live updates to results based on their input.

## Dependencies & Prerequisites

- **WordPress 6.0+** (Gutenberg editor enabled)
- **Node.js & npm** for local development/build
- **Frankfurter API** (free and does not require an API key at the time of release)

## Technical Overview

This block is built with React and modern JavaScript, following WordPress Gutenberg best practices. Key technical details:

- **Component Structure:**
  - `edit.js` handles the block's editor interface, Inspector Controls, and attribute management.
  - `view.js` renders the interactive calculator on the frontend, using the same calculation logic.
  - Shared logic (calculations, currency conversion, input sanitisation) is abstracted into utility files:
    - `calculateResults`, `convertProfitPerUnit`, `safeNumber` in `calculatorUtils.js`
    - `useCurrencies`, `useConversionRate` in `currencyUtils.js`
    - `getAccessibleOutlineColor` in `blockUtils.js`

- **Attribute Flow:**
  - Block attributes (labels, colours, currencies, percentage increase, etc.) are stored per block instance and managed via Gutenberg's attribute system.
  - Editor changes update attributes in real time; these are saved in the post content and passed to the frontend.

- **Calculation & Currency:**
  - All user input is validated and converted to safe numbers using `safeNumber` before calculations.
  - The Frankfurter API is used to provide the list of available currencies, select the base currency for the block, and perform currency conversion (handled in the `useConversionRate` custom React hook).
  - The main calculation function (`calculateResults`) computes annual profit, units, and productivity gains based on all inputs and the selected currencies.

- **Rendering:**
  - The block is fully interactive in both the editor and on the frontend, with consistent logic and styling.
  - Semantic HTML and ARIA attributes ensure accessibility.
  - All styles are modular SCSS, using BEM conventions for maintainability.

This modular, extensible structure makes it easy to add new features, adjust calculations, or customise the UI as needed.

## Calculation Logic

The ROI Calculator estimates annual profit and productivity improvements based on user-provided values:

- **Inputs:**
  - Percentage increase (expected improvement)
  - Working hours per day
  - Working days per week
  - Working weeks per year
  - Units produced per hour
  - Profit per unit (with currency selection and conversion)

- **Main Results:**
  - **Profit per year:** Total estimated profit per year, factoring in all inputs and currency conversion.
  - **Units per year:** Total units produced per year.
  - **Extra hours, extra units per week:** Productivity gains based on the percentage increase.

The calculation logic is modular and can be extended in `calculatorUtils.js`.

## Extending the Block

- **Attributes:** See `block.json` for all configurable attributes.
- **Logic:** Calculation and currency logic is in `calculatorUtils.js` and `currencyUtils.js`. All user input is sanitised and validated using the `safeNumber` utility before calculations.
- **Styling:** SCSS in `src/roi-calculator-block/style.scss` (modular, BEM-style classes). The outline colour for focused inputs/selects is dynamically generated based on the background colour for optimal accessibility (see `blockUtils.js`).
- **Accessibility:** All inputs and results use semantic HTML and ARIA attributes. The results section uses `<dl>` (definition list), `<dt>` (term), and `<dd>` (description) to semantically group result labels and values—this improves accessibility for screen readers and provides clear structure for all users.
- **Frontend:** The block is rendered both in the editor and on the frontend (`edit.js` and `view.js`).

For further customisation, follow the structure and conventions in the existing codebase. All logic and UI are modular and easy to extend.
