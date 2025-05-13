# ROI Calculator Block

A customizable, accessible, and responsive ROI Calculator Gutenberg block for WordPress.

## Setup & Installation

1. **Clone the repository** and navigate to the plugin directory:
   ```sh
   git clone <repo-url>
   cd roi-calculator-block
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

## Block Attributes & Customization

- **Labels:** All input and result labels are editable via the block sidebar (Inspector Controls).
- **Colors:** Customize background, text, slider, and accent colors.
- **Currency:** Select base and profit-per-unit currencies. Currency conversion is handled automatically.
- **Sliders & Inputs:** Adjust working hours, days, weeks, units per hour, and profit per unit.
- **Results:** Semantic, accessible results section with live updates.
- **Responsive:** Layout adapts to all screen sizes.

## Dependencies & Prerequisites

- **WordPress 6.0+** (Gutenberg editor enabled)
- **Node.js & npm** for local development/build
- **Frankfurter API** (for currency conversion)

## Extending the Block

- **Attributes:** See `block.json` for all configurable attributes.
- **Logic:** Calculation and currency logic is in `calculatorUtils.js` and `currencyUtils.js`.
- **Styling:** SCSS in `src/roi-calculator-block/style.scss` (modular, BEM-style classes).
- **Accessibility:** All inputs and results use semantic HTML and ARIA attributes.
- **Frontend:** The block is rendered both in the editor and on the frontend (`edit.js` and `view.js`).

For further customization, follow the structure and conventions in the existing codebase. All logic and UI are modular and easy to extend.