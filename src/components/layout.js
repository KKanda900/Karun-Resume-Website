import React from 'react'
import Footer from './footer'
import '../styles/index.scss'
import Header from './header'
import LayoutStyle from './layout-module.css'

const Layout = (props) => {
    return (
        <div className="container">
            <div className="content">
            <Header />
            {props.children}
            </div>
            <div align = "right">
            <Footer />
            </div>     
        </div>
    )
}

export default Layout