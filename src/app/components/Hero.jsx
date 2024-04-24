import Link from 'next/link'
import React from 'react'


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="left">
                    <h3>Hello , this is Sudhanshu Kumar.</h3>
                    <p>From the heart of Vasu and Shaalu (kr...) baby of my baby (sudha baby) Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
                    <Link href={"/men"}><button>Shop Now</button></Link>
                </div>
                <div className="right">
                    <div className="r_left">
                        <div className="ltop">
                            <img src={"short1.jpg"} alt="" />
                        </div>
                        <div className="lbottom">
                            <img src={"short2.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="r_right">
                        <img src={"long1.jpg"} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
