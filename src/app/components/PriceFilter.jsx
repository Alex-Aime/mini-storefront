'use client';

export default function PriceFilter({value, onChange}) {
    const priceRanges = [
        "All",
        "0-51",
        "52-156",
        "157-268",
        "269-501",
        "502-1001",
        "1002-2103"
    ];

    return (
        <div>
            <label htmlFor="price">
                Price Range
            </label>
            <select id="price" value= {value} onChange={(e) => onChange(e.target.value)}>
                {priceRanges.map((range) => {
                    return (
                    <option key={range} value={range}>
                        {range === "All" ? "All Prices" : `$${range.replace("-", "-$")}`}
                    </option>
                    )
                } )}
            </select>
        </div>
    );
};
