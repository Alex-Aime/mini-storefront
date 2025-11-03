'use client';

import ProductCard from "./ProductCard"

export default function ProductList({ products, onAdd, cart}) {
    if(!products.length){
        return <p>NO PRODUCTS MATCH THAT FILTER</p>  
    }

    return (
        <div>
            {products.map((product) =>(
                <ProductCard
                key= {product.id}
                product= {product}
                inCart= {!!cart[product.id]}
                onAdd= {() => onAdd(product)}/>
            ))}
        </div>
    )
}

