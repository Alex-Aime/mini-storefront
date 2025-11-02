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
};

















export default function Welcome() {
    return (
        <h1> Welcome Everyone</h1>
    )
}