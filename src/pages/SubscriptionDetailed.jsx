import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useLoaderData, useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading';
import '../styles/subscriptiondetailed.css'

export function loader(db) {
    return collection(db, "subscription-plans")
}

export default function SubscriptionsDetailed() {
    // we handle all the logic here instead of the loader function due to hooks not being allowed in loader
    const [plan, setPlan] = useState(null)
    const plansRef = useLoaderData()
    const planName = useParams().id
    async function GetData() {
        const q = query(plansRef, where("type", "==", planName));
        const planSnapshot = await getDocs(q)
        const plan = planSnapshot.docs.map(doc => doc.data())
        setPlan(plan[0])
    }   
    useEffect(() => {
        GetData()
    }, [])

    return(
        <>
            <PageHeading heading={!plan ? 'loading...' : `${plan.plan} Details...`} />
            <main>
                {
                    !plan ? <div className='loading-container'></div>  : (
                        <div id='subscription-detail-page'>
                            <section id='detailed-plan' className={`${plan.type}`}>
                                <h3>{plan.plan}</h3>
                                <h1>${plan.cost} <span className="understated-text">/month</span></h1>
                                <p>{plan.description}</p>
                            </section>
                            <section id='stripe-payment'>
                                <table width='100%'>
                                    <tbody>
                                        <tr>
                                            <td width='95%' id='table-plan-name'>{plan.plan}</td>
                                            <td width='5%'>${plan.cost}</td>
                                        </tr>
                                        <tr>
                                            <td><br /></td>
                                            <td><br /></td>
                                        </tr>
                                        <tr>
                                            <td width='90%'>Subtotal:</td>
                                            <td width='10%'>${plan.cost}</td>
                                        </tr>
                                        <tr>
                                            <td width='90%'>Tax:</td>
                                            <td width='10%'>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td><hr /></td>
                                            <td><hr /></td>
                                        </tr>
                                        <tr>
                                            <td>Total:</td>
                                            <td>${plan.cost}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h1 className='classical-cta'>Pay Now</h1>
                            </section>
                            
                        </div>
                    )
                }
            </main>
        </>
    )
}