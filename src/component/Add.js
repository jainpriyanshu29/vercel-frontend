import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import "./responsive.css"

const Add = () => {

    const [mobile, setMobile] = useState(true)

    const [author, setauthor] = useState("");
    const [title, settitle] = useState("");
    const [article, setarticle] = useState("");
    const [filename, setfilename] = useState("");

    const navigate = useNavigate();

    //use jwt token
    let tokens = localStorage.getItem("token")
    console.log(tokens);
    const config = { headers: { Authorization: "Bearer " + tokens } };

    // for image
    const onChangeFile = (e) => {
        setfilename(e.target.files[0])
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        // jb text ke saath image upload kr rhe ho tb FormData() use krte hai
        const formData = new FormData();

        formData.append("author", author)
        formData.append("title", title)
        formData.append("article", article)
        // jo name api me upload.single("myfile") me diya hai whi yha use krte hai
        formData.append("mypost", filename)


        try {
            const res = await axios.post("http://localhost:8800/add", formData, config);
            if (res.data.success) {
                navigate("/userpanel")
                // console.log(res.data);
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            alert(error.message);
        }



    }




    return (

        <>
            <div className="container">
                <h1>Add<span>Blog</span></h1>

                <div className="nav">
                    <ul className={mobile ? "hide__navbar ul" : "show__navbar ul"}>
                        <li><a className="btn" href="/userpanel">Home</a></li>
                        <li><a className="btn" href="/contact">Contact</a></li>
                    </ul>

                    <div className={mobile ? "burger" : "burger"} onClick={() => setMobile(!mobile)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                </div>
            </div>

            <div className="add">
                <img src="image/blog1.jpg" />
            </div>


            <div className="us">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <h4>Add New Article</h4>

                    <div className="name">
                        <label>Author Name</label><br />
                        <input type="text" placeholder="Author Name"
                            required
                            onChange={(event) => setauthor(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Title</label><br />
                        <input type="text" placeholder="Your Title"
                            required
                            onChange={(event) => settitle(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Article</label><br />
                        <input type="text" placeholder="Article here"
                            required
                            onChange={(event) => setarticle(event.target.value)}
                        />
                    </div>
                    <div className="name">
                        <label>Choose Article Image</label><br />
                        <input className="upload" type="file"

                            onChange={onChangeFile}
                        />
                    </div>

                    <div className="button">
                        <input className="button-1" type="submit" value="Post Article" />
                    </div>
                </form>
            </div>


            <div className="footer">
                <div className="footer-content">Copyright @ All Rights Reserved</div>
            </div>
        </>

    )
}

export default Add