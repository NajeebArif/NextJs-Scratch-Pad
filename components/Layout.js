import React from 'react'
import Navbar from './Navbar'
import ActiveResource from "components/ActiveResource";

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <ActiveResource />
            {children}
        </div>
    )
}
