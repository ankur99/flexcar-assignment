Flex Inventory

Tech Stack
Next.js (App Router), TypeScript
Tailwind CSS v4 + DaisyUI
React Testing Library + Jest (next/jest)
Project structure under src/ (src/app, src/components, src/lib)

Project Setup/Running the App
npm install
npm run dev
Open http://localhost:3000

Tests
Unit tests use Jest with next/jest and React Testing Library.

Run all tests:
npm test

Project Structure
src/app: App Router layouts/pages
src/components: Reusable UI components (FiltersPanel, Sorter, VehicleCard, ZipSearch, Modal, ErrorBanner)
src/lib: Utilities, types, and data (utils, types, vehicles)
public/vehicles: Vehicle images used by VehicleCard

Key Features
ZIP-based search
Modal prompts on initial load
Input sanitization (digits only) and validation
Filters panel on the left (desktop sticky)
DaisyUI collapsible sections
Checkbox options for Make and Color
Clear all action
Multi-select logic: empty = “All”
Sorter control
Compact “chip-style” trigger with icon + label
DaisyUI dropdown menu (Price high/low, Model)
Vehicle grid
Responsive cards
Image zoom on hover
Price badge and basic specs
Theming and Styling
Dark professional gradient background
Translucent header with blur and subtle indigo-tinted border
High-contrast checkboxes on dark backgrounds


How to Use
Launch the dev server and open the app.
Enter a 5-digit ZIP code (e.g., 02116, 10001, or 94105).
Use the left-side Filters panel to select Makes and Colors.
Use the Sorter chip to change sorting (Price high/low, Model).
Hover over vehicle cards to see the image zoom effect.

Testing Details
Unit Tests:
src/lib/utils.test.ts: isValidZip and sortVehicles
src/components/ZipSearch.test.tsx: input sanitization, button state, submit behavior
src/components/FiltersPanel.test.tsx: checkbox toggles and “Clear all”

Tailwind v4 and DaisyUI 
Chosen components: card, menu, collapse, modal, checkbox, button.

Data
Vehicle data is static (src/lib/vehicles.ts) for demo purposes.











