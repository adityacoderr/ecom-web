"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'
import HamburgerMenu from './Hamburgermenu';


const Header = () => {

    const [change, setChange] = useState("");
    function call() {

    }
    return (
        <>
            <div className="navbar">
                <ul>
                    <h2>Stranger Things</h2>
                </ul>
                <ul className='navright'>
                    <Link href={"/"}><li>Home</li></Link>
                    <li className='shop'>Shop
                        <div className="dibba">
                            <ul><Link href={"/men"}><li>MEN</li></Link>
                                <Link href={"/women"}><li>WOMEN</li></Link></ul>
                        </div>
                    </li>
                    <Link href={"/contact"}><li>Contact Me</li></Link>

                </ul>
                <HamburgerMenu />
                {/* <div className="search">
                    <input type="text" placeholder='Enter something..' onChange={call}/>
                    <h3><i class="ri-search-line"></i></h3>
                </div> */}
            </div>

        </>
    )
}

export default Header
