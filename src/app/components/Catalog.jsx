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
        .then(res => res.json)
        .then(data => setProducts(data))
        .catch(() => setError("Can't load products.."))
        .finally(() => setLoading(false));
     }, [])













};

















