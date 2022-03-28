import React from 'react'
import MobileNav from '../MobileNav'
import Header from '../Header'
import Footer from '../Footer'
import Top from '../Top'

const Layout = (props) => {
    return (
        <div className="layout">
            <MobileNav />
            <Header />
                {props.children}
            <Footer />
            <Top />
        </div>
    )
}

export default Layout