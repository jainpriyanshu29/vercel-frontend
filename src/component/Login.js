import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Dashboard from './Dashboard'
import "./index.css"
import "./responsive.css"


const Login = () => {

    const [mobile, setMobile] = useState(true)


    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [data, setdata] = useState(null)

    // define useNavigate Function
    const navigate = useNavigate();


    const tokens = localStorage.getItem("token");
    useEffect(() => {
        if (!tokens) {
            navigate("/login");
        } else {
            navigate("/userpanel");
        }
    }, []);


    const onSubmit = async (event) => {
        event.preventDefault();

        // frontend to backend 
        // fetch data login to database
        const obj = {
            email: email,
            password: password
        }

        const res = await axios.post("http://localhost:8800/login", obj);
        if (res.data.success) {
            localStorage.setItem("token", res.data.token);
            navigate("/userpanel");
        } else {
            alert(res.data.message);
            navigate("/login");
        }

    }


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
                    </ul>

                    <div className={mobile ? "burger" : "burger"} onClick={() => setMobile(!mobile)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
            </div>


            <div className="sign">
                <img src="image/log2.png" />
            </div>


            <div className="us">
                <form onSubmit={onSubmit}>
                    <h4>Login Here</h4>

                    <div className="name">
                        <label>Enter Your Email</label><br />
                        <input type="email" placeholder="Enter Your Email"
                            required
                            onChange={(event) => setemail(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Enter Your Password</label><br />
                        <input type="password" placeholder="Enter Your Password"
                            required
                            onChange={(event) => setpassword(event.target.value)}
                        />
                    </div>

                    <div className="button">
                        <input className="button-1" type="submit" value="Login" />
                    </div>
                </form>
            </div>
            {
                null & <Dashboard data={"hello"} />
            }

            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>
        </>

    )
}

export default Login