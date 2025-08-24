# 🚗 Flex Inventory

A vehicle inventory demo application built with **Next.js App Router**,
**TypeScript**, **Tailwind CSS v4 + DaisyUI**, and tested with **React
Testing Library + Jest**.

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Next.js (App Router) + TypeScript**
-   **Tailwind CSS v4 + DaisyUI**
-   **React Testing Library + Jest** (via `next/jest`)
-   Project structure under `src/`
    -   `src/app`
    -   `src/components`
    -   `src/lib`

------------------------------------------------------------------------

## ⚡ Project Setup & Running

``` bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open the app at: <http://localhost:3000>

------------------------------------------------------------------------

## ✅ Tests

Unit tests use **Jest** with **next/jest** and **React Testing
Library**.

Run all tests:

``` bash
npm test
```

### Test Coverage

-   `src/lib/utils.test.ts` → `isValidZip`, `sortVehicles`
-   `src/components/ZipSearch.test.tsx` → input sanitization, button
    state, submit behavior
-   `src/components/FiltersPanel.test.tsx` → checkbox toggles, **Clear
    all**

------------------------------------------------------------------------

## 📂 Project Structure

    src/
     ├─ app/             # App Router layouts & pages
     ├─ components/      # Reusable UI (FiltersPanel, Sorter, VehicleCard, ZipSearch, Modal, ErrorBanner)
     ├─ lib/             # Utilities, types, and data (utils, types, vehicles)
    public/
     └─ vehicles/        # Vehicle images used by VehicleCard

------------------------------------------------------------------------

## ✨ Key Features

-   🔍 **ZIP-based search** (5-digit input validation & sanitization)
-   💡 **Modal prompts** on initial load
-   🎛 **Filters Panel**
    -   Sticky on desktop
    -   DaisyUI collapsible sections
    -   Checkboxes for Make and Color
    -   **Clear all** option
    -   Multi-select logic (`empty = All`)
-   ↕️ **Sorter Control**
    -   Compact **chip-style trigger** with icon + label
    -   DaisyUI dropdown menu (Price high/low, Model)
-   📦 **Vehicle Grid**
    -   Responsive vehicle cards
    -   Image zoom on hover
    -   Price badge + specs
-   🎨 **Theming & Styling**
    -   Dark gradient background
    -   Translucent header with blur + indigo border
    -   High-contrast checkboxes for dark mode

------------------------------------------------------------------------

## 🚀 How to Use

1.  Start the dev server (`npm run dev`) and open the app.
2.  Enter a **5-digit ZIP code** (e.g., `02116`, `10001`, `94105`).
3.  Use the **Filters panel** (left side) to select **Makes** and
    **Colors**.
4.  Use the **Sorter chip** to sort results (Price high/low, Model).
5.  Hover over vehicle cards to view **image zoom effect**.

------------------------------------------------------------------------

## 🧪 Testing Details

-   **Unit Tests**
    -   `isValidZip`, `sortVehicles` → `src/lib/utils.test.ts`
    -   `ZipSearch` input sanitization + submit →
        `src/components/ZipSearch.test.tsx`
    -   `FiltersPanel` toggles & clear all →
        `src/components/FiltersPanel.test.tsx`

------------------------------------------------------------------------

## 🎨 Tailwind v4 + DaisyUI Components

-   **Card**
-   **Menu**
-   **Collapse**
-   **Modal**
-   **Checkbox**
-   **Button**

------------------------------------------------------------------------

## 📊 Data

-   Static demo data located in:

    ``` ts
    src/lib/vehicles.ts
    ```

-   Vehicle images stored in:

        public/vehicles/

------------------------------------------------------------------------

## 📸 Screenshots (Optional)

> *(Add screenshots or GIFs of the UI here for a better developer
> experience)*

------------------------------------------------------------------------

## 📄 License

MIT License -- free to use and modify.
