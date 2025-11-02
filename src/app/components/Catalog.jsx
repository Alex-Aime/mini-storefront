'use client';
import { useState, useEffect, useRef } from "react";
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

    const productsRef = useRef([])
    const intervalRef = useRef(null)

    useEffect(() => {
        let cancelled = false;
        setLoading(true)
        setError(null)


        fetch("/api/products")
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch products")
            return res.json()
        })

        .then((data) => {
            if (cancelled) return
            setProducts(data)
            productsRef.current = data

        })

        .catch((err) => {
            if (cancelled) return
            setError(err.message || "Unknown error")

        })

        .finally(() => {
            if (!cancelled) setLoading(false)
        });

    return () => {
        cancelled = true
    }
    
    
    
    
    
    }, [])













};

















