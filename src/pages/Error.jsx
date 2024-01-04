import React from 'react'
import { Link} from "react-router-dom"
import PageHeading from '../components/PageHeading'
import '../styles/error.css'

export default function Error() {
    return(
        <>
            <PageHeading heading="404 Error"/>
            <main id='error-page'>  
                <h2>The page you were trying to look for does not exist, Sorry!</h2>
                <Link to="/" className='classical-cta dark-bg'>Return Back To Home</Link>
            </main>
        </>
    )
}