'use client';

export default function CategoryFilter({categories, value, onChange}) {
    return (
        <div>
            <label htmlFor="category">
                Category
            </label>
            <select id="category" value={value} onChange={(e) => onChange(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}> 
                        {cat}
                    </option>))}
            </select>
        </div>
    )
}