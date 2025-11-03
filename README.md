# React + Next.js Mini-Storefront
✅ Part 1 — Environment Setup (Required)
Create Your Project Using the Command Line
Open your terminal and run:

npx create-next-app@latest mini-storefront
Answer the prompts exactly:

Prompt	Correct Answer
Would you like to use TypeScript?	❌ No
Would you like to use ESLint?	✅ Yes
Would you like to use Tailwind CSS?	✅ Yes
Use src/ directory?	✅ Yes
Use App Router?	✅ Yes
Customize import alias?	❌ No
Then:

cd mini-storefront
npm install
npm run dev
Visit ➜ http://localhost:3000 Links to an external site. ✅

✅ Part 2 — Project Requirements
You are building a Mini-Storefront where shoppers can:

Browse products
Filter by category and price
Add items to a cart
View cart totals
See product stock update over time
View loading, error, and empty states
🧩 Required Files & Components
📌 Use this structure inside src/app:

src/
 ├── app/
 │   ├── page.jsx              // Server Component
 │   ├── api/
 │   │   └── products/route.js // API route returning JSON
 │   └── components/
 │       ├── Catalog.jsx
 │       ├── ProductList.jsx
 │       ├── ProductCard.jsx
 │       ├── CategoryFilter.jsx
 │       ├── PriceFilter.jsx
 │       ├── CartSummary.jsx
 │       └── StatusMessage.jsx
📍 All components in components/ must begin with:

'use client';
✅ Functional Specifications
Area	Requirement
Components + JSX	Reusable components with correct JSX rules
Lists with Keys	Use stable product IDs as keys
Props + Callbacks	Parent → Child data; Child → Parent events
State	useState with immutable updates
Controlled Inputs	Category + price filters
Conditional Rendering	Loading, error, and empty results
Effects	Fetch products + simulate inventory count changes
Cleanup	stop interval/WebSocket on unmount
Lifting State	Filters and cart stored in Catalog.jsx
No TypeScript	.jsx only
🧠 Component Behavior Details
Component	Must Include
Catalog.jsx	Fetch API data (initial load), shared state for filters + cart, interval stock updates with cleanup
ProductList.jsx	Maps products to cards (key={id})
ProductCard.jsx	Disable Add button if out of stock; show “Out of stock”
CategoryFilter + PriceFilter	Controlled inputs that update parent state
CartSummary.jsx	Show item count + total price; decrement and reset actions
StatusMessage.jsx	Shows correct message based on state (loading, error, or empty)
🧪 API Requirement
Create this file:

📁 src/app/api/products/route.js

Example (you must include at least 8–12 items across 3+ categories):

export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 }
  ];
  return Response.json(products);
}
