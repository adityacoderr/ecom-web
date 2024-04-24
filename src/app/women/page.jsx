"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Products from '@/app/components/Products'

import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <Products heading={"TWEED"} />
            <Products heading={"LED"} />
            <Products heading={"SUEED"} />
            <Footer />
        </>
    )
}

export default page
