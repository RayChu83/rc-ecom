import React from 'react'
 import {collection, getDocs} from "firebase/firestore"

import PageHeading from '../components/PageHeading'
import SubscriptionPlans from '../components/SubscriptionPlans'
import { useLoaderData } from 'react-router-dom'

export async function loader(db) {
    const plansCollection = collection(db, "subscription-plans")
    const plansSnapshot = await getDocs(plansCollection)
    const plansList = plansSnapshot.docs.map(doc => doc.data())
    return plansList
}

export default function Home() {
    const plansList = useLoaderData()
    return(
        <>
            <PageHeading heading="Welcome to Ray Chu"/>
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem blanditiis sed eaque molestiae sint, illo ipsum tempora magnam necessitatibus debitis accusamus. Aut, ipsam? Quasi, recusandae ipsam officiis provident corporis obcaecati ab alias, ut laboriosam eius dolorem saepe ipsa deserunt aperiam voluptates. Ipsa possimus magnam beatae. Totam laborum iure ea suscipit?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quos, cum aut voluptate sunt quae quam quo blanditiis ipsam cupiditate voluptatibus odio dolores iusto non molestiae impedit, iure expedita reiciendis debitis? Commodi temporibus incidunt, odio nulla alias amet, eligendi labore deserunt ad beatae officiis. Voluptate iusto minima, dicta fuga sint saepe, officiis debitis voluptatem impedit dignissimos ipsum deleniti quas a. A quam ducimus voluptatem odio fuga, illum ea labore eaque earum facilis odit totam provident.</p>
                <SubscriptionPlans plans={plansList}/>
            </main>
        </>
    )
}