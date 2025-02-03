import React from "react";
import { Link } from "react-router-dom";
import { rubelmia1, rubelmia1sm } from "../assets";
import "./home.css";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout />
      <div className="home-page">
        <div className="container">
          <main>
            <div className="clip-background"></div>
            <div className="content">
              <div className="content-item-image">
                <div className="home-image-div">
                  <img
                    className="content-item-image-iamge"
                    src={rubelmia1}
                    alt="rubelsimage"
                  />
                </div>
                <img
                  className="content-item-image-iamge-sm"
                  src={rubelmia1sm}
                  alt="rubelsimage"
                />
              </div>
              <div className="content-item-text">
                <div>
                  <h1 className="first-heading">
                    <div className="line"></div>
                    i'm rubel mia.
                  </h1>
                  <h1 className="second-heading">a web developer</h1>
                  <p className="para">
                    I'm a Dhaka, Bangladesh-based web developer focused on
                    crafting user-friendly experiences. I manage all aspects of
                    web development, from concept and requirements definition to
                    design, development, launch, maintenance, and user support.
                    I enjoy working closely with team members to produce
                    high-quality deliverables.
                  </p>
                  <div className="btn-main">
                    <button className="button">
                      <Link to="/about" className="btn-span-text">
                        more about me
                      </Link>
                    </button>
                    <i className="bx bx-right-arrow-alt btn-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
