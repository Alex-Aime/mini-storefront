'use client';

export default function CategoryFilter({categorgies, value, onChange}) {
    return (
        <div>
            <label htmlFor="category">
                Category
            </label>
            <select id="category" value={value} onChange={(e) => onChange(e.target.value)}>
                {categorgies.map((cat) => (
                    <option key={cat} value={cat}> 
                        {cat}
                    </option>))}
            </select>
        </div>
    )
}