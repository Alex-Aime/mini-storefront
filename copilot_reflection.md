# Reflection — Chart work (today)


Date: 2025-12-07

Summary
- Integrated a Pie chart into the Next.js storefront that reads real product data from the existing API route (/api/products).
- Chose Recharts (browser chart library) and added a client component so it renders only on the client.
- Wired the chart into the Catalog component so it uses the same in-memory app state (products) and updates when stock changes.

What I changed / added
- Added: src/app/components/StockPieChart.jsx
  - Client component (`'use client'`) using Recharts.
  - Computes stock totals by category from the products prop (no hard-coded data).
  - Includes title, tooltip, and legend.
  - Explicit color mapping for Electronics, Furniture, Appliances and a fallback palette.
  - Uses CSS class names: `chart-card`, `chart-title`, `chart-empty` for styling.
- Modified: src/app/components/Catalog.jsx
  - Imported and rendered `<StockPieChart products={products} />` inside the aside so chart is connected to app state.

I used copilot as a guide or another professor to help me setup and install the charts I needed.

The command used was `npm install recharts`

A suggestion that copilot gave me was to create a entire app for the chart but I just wanted to add it onto the web.

A time where copilot saved me time was the structure of the code it let me have a format for the code.

