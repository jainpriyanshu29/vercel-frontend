import React from 'react'
import "./index.css"
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import "./responsive.css"

const Signup = () => {

    const [mobile, setMobile] = useState(true)

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [topic, settopic] = useState("");
    const [filename, setfilename] = useState("");

    const navigate = useNavigate();

    // for image
    const onChangeFile = (e) => {
        setfilename(e.target.files[0])
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        // jb text ke saath image upload kr rhe ho tb FormData() use krte hai
        const formData = new FormData();

        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("phone_number", phone_number)
        formData.append("topic", topic)
        // jo name api me upload.single("myfile") me diya hai whi yha use krte hai
        formData.append("myfile", filename)


        const res = await axios.post("http://localhost:8800/signup", formData).then((res) => {
            alert(res.data.message);
            navigate("/login")
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




            <div className="sign">
                <img src="image/reg1.jpg" />
            </div>


            <div className="us">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <h4>Register Here</h4>

                    <div className="name">
                        <label>Enter Your User Name</label><br />
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
                        <label>Enter Your Password</label><br />
                        <input type="password" placeholder="Enter Your Password"
                            required
                            onChange={(event) => setpassword(event.target.value)}
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
                        <label>Upload Your Domain Image</label><br />
                        <input className="upload" type="file"
                            required
                            onChange={onChangeFile}
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

export default Signup