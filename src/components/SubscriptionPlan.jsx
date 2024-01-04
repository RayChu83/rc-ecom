import React from 'react'
import { Link } from 'react-router-dom'

export default function SubscriptionPlan({type, plan, cost, description}) {
    return(
        <div className={`plan ${type}`}>
            <Link to={`/subscriptions/${type}`}>
                <h3>{plan}</h3>
                <h1>${cost} <span className="understated-text">/month</span></h1>
                <div className="plan-details">
                    <small>{description}</small>
                </div>
                <button className="purchase-plan">Buy Now</button>
            </Link>     
        </div>
    )
}