import React from 'react'
import SubscriptionPlan from './SubscriptionPlan'
import '../styles/subscriptionplans.css'

export default function PaymentPlans(props) {
    return(
        <section id="plans">
            {props.plans.map(plan => <SubscriptionPlan type={plan.type} plan={plan.plan} cost={plan.cost} description={plan.description} key={plan.type}/>)}
        </section>
    )
}