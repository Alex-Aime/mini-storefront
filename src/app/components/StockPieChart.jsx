'use client';

import React, { useMemo } from 'react';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function StockPieChart({ products = [] }) {
  // build totals from real app state (not hard-coded)
  const data = useMemo(() => {
    const totals = products.reduce((acc, p) => {
      const cat = p.category || 'Uncategorized';
      acc[cat] = (acc[cat] || 0) + (p.stock || 0);
      return acc;
    }, {});
    return Object.entries(totals).map(([name, value]) => ({ name, value }));
  }, [products]);

  // explicit category colors
  const categoryColors = {
    Electronics: '#2E86DE', // blue
    Furniture:   '#E67E22', // orange
    Appliances:  '#27AE60', // green
    // add more explicit mappings if you need
  };

  // fallback palette for any unspecified categories
  const fallbackColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

  if (!data.length) {
    return <div className="chart-empty">No stock data available</div>;
  }

  return (
    <section className="chart-card" aria-label="Stock by category">
      <h3 className="chart-title">Stock by Category</h3>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <RePieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, i) => {
                const color = categoryColors[entry.name] || fallbackColors[i % fallbackColors.length];
                return <Cell key={`cell-${i}`} fill={color} />;
              })}
            </Pie>
            <Tooltip formatter={(value) => [`${value}`, 'Stock']} />
            <Legend verticalAlign="bottom" height={36} />
          </RePieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}