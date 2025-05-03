import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./singlepost.css"
import "./responsive.css"


const SingleBlog = () => {
  const tokens = localStorage.getItem("token");
  const config = { headers: { Authorization: "Bearer " + tokens } };
  const { id } = useParams();


  const [postdata, setPostdata] = useState(null);
  const [mobile, setMobile] = useState(true)



  useEffect(() => {
    if (id) {
      GetSinglePost();
    }
  }, [id])

  const GetSinglePost = async () => {
    const Singledta = await axios.get(`http://localhost:8800/blog/${id}`, config);
    if (Singledta.data.success) {
      setPostdata(Singledta.data.data);
      console.log(Singledta.data.data);
    }
  }





  return (
    <>
      <div className="container">
        <h1>
          Hello<span>Guys</span>
        </h1>

        <div className="nav">
          <ul className={mobile ? "hide__navbar ul" : "show__navbar ul"}>
            <li>
              <a className="btn" href="/userpanel">
                Home
              </a>
            </li>
            <li>
              <a className="btn" href="/addblog">
                Add Blog
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

      

      <div>
        {postdata ? (
          <section id="content">
            <article>
              <header>
                <h2>Title : {postdata.title}</h2>
                <div className="meta">

                  <strong>
                    <span>Posted by :</span>{" "}
                    {postdata.author}
                    <br />
                    <br></br>
                    <span>Posted Date :</span>
                    {postdata.postdate}{" "}
                  </strong>
                </div>

                <div className="meta">
                <strong>  <span>author email :</span> {postdata.email} </strong>
                </div>
              </header>

              <p className="article"><span>Your Article:</span> {postdata.article}</p>
            </article>
          </section>
        ) : (
          <div
            style={{
              height: "100vh",
              background: "#cdd4cf",
              color: "black",
              display: "grid",
              placeItems: "center",
            }}
          >
            <p>loading....</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleBlog;