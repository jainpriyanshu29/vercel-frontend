import React from 'react'
import "./index.css"
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import "./responsive.css"

const Contact = () => {


    const [mobile, setMobile] = useState(true)


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [topic, settopic] = useState("");
    const [message, setmessage] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: name,
            email: email,
            phone_number: phone_number,
            topic: topic,
            message: message
        }

        const res = await axios.post("http://localhost:8800/contact", data).then((res) => {
            alert(res.data.message);
            navigate("/")
        });

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
                        <li><a className="btn" href="/login">Add Blog</a></li>
                    </ul>

                    <div className={mobile ? "burger" : "burger"} onClick={() => setMobile(!mobile)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
            </div>




            <div className="contact">
                <img src="image/contact.jpg" />
            </div>


            <div className="us">
                <form onSubmit={onSubmit}>
                    <h4>Contact Us</h4>

                    <div className="name">
                        <label>Enter Your Name</label><br />
                        <input type="text" placeholder="Enter Your Name"
                            required
                            onChange={(event) => setname(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Enter Your Email</label><br />
                        <input type="email" placeholder="Enter Your Email"
                            required
                            onChange={(event) => setemail(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Enter Your Phone Number</label><br />
                        <input type="number" placeholder="Enter Your Phone Number"
                            required
                            onChange={(event) => setphone_number(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Enter Your Topic</label><br />
                        <input type="text" placeholder="Ex :- Food , Technology , Games"
                            required
                            onChange={(event) => settopic(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Message</label><br />
                        <input type="text" placeholder="Enter Message"
                            required
                            onChange={(event) => setmessage(event.target.value)}
                        />
                    </div>

                    <div className="button">
                        <input className="button-1" type="submit" value="Submit" />
                    </div>
                </form>
            </div>

            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>
        </>

    )
}

export default Contact