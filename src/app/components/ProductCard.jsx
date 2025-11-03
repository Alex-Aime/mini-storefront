'use client';
export default function ProductCard({product, inCart, onAdd}) {
    const OutOfStock = product.stock <= 0

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p className={`stock-status-sm mb3 ${OutOfStock ? "stock-status-red-600" : "stock-status-green-600"}`}>
                {OutOfStock ? "Out of Stock": `${product.stock} in stock`}
            </p>
            <button className={`w-full py-2 mt auto rounded text-white transition
                ${OutOfStock || inCart ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                onClick={onAdd}
                disabled={OutOfStock || inCart}>
                {inCart ? "In Cart" : "Add to Cart"}
            </button>
        </div>
    )
}