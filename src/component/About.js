import React from 'react'
import "./index.css"
import "./responsive.css"
import { useState } from 'react'

const About = () => {

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


            <div className="about">
                <img src="image/about.jpg" />
            </div>

            <div className="about-content">
                <div className="content">
                    <h2>About Blog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nihil consectetur veniam quos adipisci
                        pariatur ea sit, voluptas magnam laboriosam quo cupiditate, natus error qui asperiores amet! Ducimus,
                        quae voluptatem?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus saepe esse est. Adipisci,
                        necessitatibus. Neque necessitatibus nulla excepturi odio eius enim magni natus corporis reiciendis.
                        Voluptates, quisquam excepturi. Eius!</p>
                </div>

                <div className="image">
                    <img className="about-image" src="image/ban.png" />
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>

        </>

    )
}

export default About