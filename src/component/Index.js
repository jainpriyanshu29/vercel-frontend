import React from 'react'
import "./index.css"
import "./responsive.css"
import { useState } from 'react'


const Index = () => {

    const [mobile, setMobile] = useState(true)

    return (
        <>
            <div className="container">
                <h1>Blog<span>Website</span></h1>

                <div className="nav">
                    <ul className={mobile ? "hide__navbar ul" : "show__navbar ul"}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a className="btn" href="/signup">Sign up</a></li>
                        <li><a className="btn" href="/login">Log in</a></li>
                        <li><a className="btn" href="/login">Add Blog</a></li>
                    </ul>


                    <div className={mobile ? "burger" : "burger"} onClick={()=>setMobile(!mobile)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
            </div>

            <div className="bg">
                <div className="bg-title">Latest <span>Blog</span>
                    <h3>Your Source of Great Content</h3>
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>

        </>
    )
}

export default Index