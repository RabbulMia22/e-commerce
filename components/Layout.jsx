import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto px-4">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout