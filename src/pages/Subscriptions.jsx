import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SubscriptionPlans from '../components/SubscriptionPlans'
import PageHeading from './../components/PageHeading';

export default function Subscriptions() {
    const plansList = useLoaderData()
    return(
        <>
            <PageHeading heading="Our Subscriptions"/>
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officiis temporibus accusamus tempora itaque enim ullam eos deserunt possimus expedita ratione numquam rem minus fuga neque harum, dolorem praesentium exercitationem provident voluptas nam eius excepturi. Doloribus fugiat cupiditate repellendus praesentium.</p>
                <SubscriptionPlans plans={plansList}/>
            </main>
        </>
    )
}