import React from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import PageHeading from '../components/PageHeading'
import Product from '../components/Product'
import '../styles/products.css'
import { useLoaderData } from 'react-router-dom'

export async function loader(db) {
    const productsCollection = collection(db, "products")
    const q = query(productsCollection, orderBy("creation", "desc"))
    const productsSnapshot = await getDocs(q)
    const productsList = productsSnapshot.docs.map(doc => doc.data())
    return productsList
}

export default function Products() {
    const productsList = useLoaderData()
    return(
        <>
            <PageHeading heading="Our Products"/>
            <main id='products'>
                {productsList.map(product => <Product product={product} key={product.creation.seconds}/>)}
            </main>
        </>
    )
}