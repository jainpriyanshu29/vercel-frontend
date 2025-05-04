import React, { Fragment } from 'react'
import "./dash.css"
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./responsive.css"


const Dashboard = () => {

  const [mobile, setMobile] = useState(true)

  const [blogs, setblogs] = useState([]);
  const tokens = localStorage.getItem("token");
  const config = { headers: { Authorization: "Bearer " + tokens } };

  //get
  useEffect(() => {
    Fetechdata();
  }, []);

  const Fetechdata = async () => {
    try {
      const mydata = await axios.get("https://vercel-blog-backend.onrender.com/getdata", config);
      if (mydata.data.success) {
        setblogs(mydata.data.data);
        console.log(mydata.data.data);
      } else {
        alert(mydata.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

// delete api
  const deleteTask = async (id) => {
    // if (confirm("Are you sure you want to delete this task")) {
    const res = await axios.delete(
      `http://localhost:8800/delete-task/${id}`
    );
    Fetechdata();
    // }
  }





  return (
    <>
      <div className="container">
        <h1>
          Hello<span>Guys</span>
        </h1>

        <div className="nav">
          <ul className={mobile ? "hide__navbar ul" : "show__navbar ul"}>
            <li onClick={() => { localStorage.removeItem("token") }}>
              <a className="btn" href="/login">
                Logout
              </a>
            </li>
            <li>
              <a className="btn" href="/addblog">
                Add Blog
              </a>
            </li>
            <li>
              <a className="btn" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <div className={mobile ? "burger" : "burger"} onClick={() => setMobile(!mobile)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

        </div>
      </div>

      {/* background image */}
      <div className="sign">
        <img src="image/banner.jpg" />
      </div>

      {
        blogs.length > 0 && <div className='main-div'>

          {
            blogs.map(x => {
              console.log(x);
              return <div class="card">

                <div class="inner-card">
                  {/* <h1>{x.author}</h1> */}
                  <p className='para'>{x.title}</p>
                  <div class="img-wrapper">
                    {
                      //add  image here
                      <img src={'image/blog2.jpg'} alt='images' />
                    }
                  </div>
                  <div class="content">
                    {/* <p>{x.article}</p> */}
                  </div>
                  <div class="btn-wrapper">
                    <Link to={`/blog/${x._id}`}> <button className="view-btn" data-src="https://source.unsplash.com/collection/190727/901x601">View</button></Link>
                  </div>
                  <br />
                  <div class="btn-wrapper">
                    <button onClick={() => deleteTask(x._id)} className="delete-btn" data-src="https://source.unsplash.com/collection/190727/901x601">Delete</button>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      }
    </>
  );
}

export default Dashboard