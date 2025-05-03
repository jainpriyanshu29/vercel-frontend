import React from 'react'
import './index.css'
import "./responsive.css"
import { useState } from 'react'

const Blog = () => {

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

                    <div className={mobile ? "burger" : "burger"} onClick={() => setMobile(!mobile)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
            </div>


            <div className="blog">
                <img src="image/img1.jpg" />
            </div>


            <div className="blogger">
                <div className="blog-content">
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nihil consectetur veniam quos adipisci
                        pariatur ea sit, voluptas magnam laboriosam quo cupiditate, natus error qui asperiores amet! Ducimus,
                        quae voluptatem?</p>
                </div>

                <div className="image">
                    <img className="blog-image" src="image/Code Bug.png" />
                </div>
            </div>

            <div className="blogger-1">
                <div className="blog-content">
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nihil consectetur veniam quos adipisci
                        pariatur ea sit, voluptas magnam laboriosam quo cupiditate, natus error qui asperiores amet! Ducimus,
                        quae voluptatem?</p>
                </div>

                <div className="image">
                    <img className="blog-image" src="image/Technology.png" />
                </div>
            </div>

            <div className="blogger-2">
                <div className="blog-content">
                    <h2>Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nihil consectetur veniam quos adipisci
                        pariatur ea sit, voluptas magnam laboriosam quo cupiditate, natus error qui asperiores amet! Ducimus,
                        quae voluptatem?</p>
                </div>

                <div className="image">
                    <img className="blog-image" src="image/Web Ads.png" />
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>
        </>

    )
}

export default Blog