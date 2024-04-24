"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Products from '@/app/components/Products'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage = () => {
    // const router = useRouter();

    return (
        <>
            <Header />
            <Products heading={"TWEED's"} />
            <Products heading={" PYJAMA's"} />
            <Footer />
        </>

    )
};
export default ProductPage;
