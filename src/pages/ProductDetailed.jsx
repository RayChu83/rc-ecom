import React, {useState, useEffect} from 'react'
import PageHeading from '../components/PageHeading'
import { useParams, useLoaderData } from 'react-router-dom'
import { collection, getDocs, query, where, Timestamp} from "firebase/firestore";
import '../styles/productdetailed.css'

export function loader(db) {
    return collection(db, "products")
}

export default function Product() {
    // we handle all the logic here instead of the loader function due to hooks not being allowed in loader
    const [product, setProduct] = useState(null)
    const [productDetails, setProductDetails] = useState({})
    const productRef = useLoaderData()
    const productTitle = useParams().title
    async function GetData() {
        const q = query(productRef, where("title", "==", productTitle));
        const productSnapshot = await getDocs(q)
        const product = productSnapshot.docs.map(doc => doc.data())
        // returns a array of one product, the product the user chose
        setProduct(product[0])
        const productCreation = new Date(product[0].creation.seconds * 1000)
        setProductDetails({Brand : product[0].brand, 
                            Color : product[0].color, 
                            Category : product[0].type, 
                            Created : `${productCreation.getFullYear()}`})
    }
    useEffect(() => {
        GetData()
    }, [])
    return(
        <>
            <PageHeading heading="Product Page"/>
            <main>
                {!product ? <div className='loading-container'></div> : (
                    <div id="product-details">
                    <aside className="product-details-img">
                        <div className="product-details-img-container">
                            <img src={product.image} alt=""/>
                        </div>
                    </aside>
                    <section>
                        <h2 className='product-title'>{product.title}</h2>
                        <p>{product.description}</p>
                        <h1 className='product-price'><span className='understated-text'>$</span>{product.cost}</h1>
                        <table id='product-table'>
                            <tbody>
                                {Object.keys(productDetails).map((keyName, i) => (
                                    <tr key={i}>
                                        <td width='40%'>{keyName}</td>
                                        <td width='60%'>{productDetails[keyName]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    <button className='purchase-plan'>Buy Now</button>
                    </section>
                </div>
                )}
            </main>
        </>
    )
}