import React from 'react'
import {Link, useLocation} from "react-router-dom"
import '../styles/pageheading.css'

export default function PageHeading(props) {
    const pathnames = useLocation().pathname.split('/').filter(path => path);
    const prevPath = "../"
    return(
        <>
            <header className='page-header'>
                <div>
                    <h1>{props.heading}</h1>
                    <section className='page-breadcrumb'>
                        <Link to='/'>home</Link>
                        {pathnames.map((path, index) => {
                            let decodedPath = decodeURIComponent(path)
                            let position = pathnames.length - index -1
                            return <Link to={prevPath.repeat(position)} relative='path' key={index} className='breadcrumb-link' title={decodedPath}>{decodedPath.toLowerCase()}</Link>
                        })}
                    </section>
                </div>
            </header>
            <div className='spacer wave'></div>
        </>
    )
}