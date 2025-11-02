'use client';
import { useState, useEffect } from "react";
import ProductList from "./ProductList"
import StatusMessage from "./StatusMessage"
import CartSummary from "./CartSummary"
import PriceFilter from "./PriceFilter"
import ProductCard from "./ProductCard"
import CategoryFilter from "./CategoryFilter"


export default function Catalog(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError]= useState(null)

    const [category, setCategory] = useState("All")
    const [priceArea, setPriceArea] = useState("All")

    const [cart, setCart] = useState({})

    

    useEffect(() => {
        fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            console.log("API returned:", data)
            setProducts(data)})
        .catch(() => setError("Can't load products.."))
        .finally(() => setLoading(false));
     }, []);


    useEffect(() => {
        if (!products.length) return
        const interval = setInterval(() => {
            setProducts(prev => prev.map(p => ({ ...p,
                stock: Math.max(0, p.stock + (Math.random() < 0.5 ? -1: 0))
            })))
        },5000)

        return () => clearInterval(interval)},
        [products]);


    const filtered = products.filter(p =>{
        if (category !== "All" && p.category !== category) return false
        if (priceArea === "All") return true
        const [min, max] = priceArea.split("-").map(Number)
        return p.price >= min && p.price <= max
    })


    const categories =["All", ...new Set(products.map(p => p.category))];

    const addToCart = (product) => {
        if (!product.stock || cart[product.id]) return
        setCart(c => ({...c, [product.id]: product }))
    };

    const removeFromCart = (id) => {
        const copy = {...cart}
        delete copy[id]
        setCart(copy)
    };

    const resetCart = () => setCart({})



    return (
        <section>
            <aside>
                <CategoryFilter categories= {categories} value= {category} onChange = {setCategory} />
                <PriceFilter value= {priceArea} onChange= {setPriceArea}/>
                <CartSummary cart= {cart} onDecrement = {removeFromCart} onReset = {resetCart} />
            </aside>

            <div>
                <StatusMessage loading = {loading} error = {error} count= {filtered.length} />
                {!loading && !error && ( <ProductList products = {filtered} onAdd = {addToCart} cart= {cart}/>)}
            </div>
        </section>
            
        
        
        
    )





};

















