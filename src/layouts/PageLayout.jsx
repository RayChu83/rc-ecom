import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function PageLayout() {
    return(
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    )
}