import React, { useState } from "react";
import Layout from "./Layout";
import {
  carlogo,
  foodlogo,
  youtubelogo,
  gallerylogo,
  gadgetlogo,
  dashboardlogo,
  carproject,
  galleryhome,
  dashboardo,
  youtubemobile,
  gadgethome,
  foodhome,
  carlogin,
  carallorder,
  carshop1,
  gallerybottom,
  gadgetproducts,
  gallerydetails,
  dashboard1,
  youtubedetails,
  youtubehome,
  youtubehome1,
  foodmiddle,
  gadgetdetails,
  payment,
} from "../assets";
import "./portfolio.css";

const Portfolio = () => {
  const [car, setCar] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [gadget, setGadget] = useState(false);
  const [food, setFood] = useState(false);

  function openModal(modal) {
    if (modal === "car") {
      setCar(true);
    } else if (modal === "gallery") {
      setGallery(true);
    } else if (modal === "dashboard") {
      setDashboard(true);
    } else if (modal === "youtube") {
      setYoutube(true);
    } else if (modal === "gadget") {
      setGadget(true);
    } else if (modal === "food") {
      setFood(true);
    }
  }
  function closeModal(name) {
    setCar(false);
    setGallery(false);
    setDashboard(false);
    setYoutube(false);
    setGadget(false);
    setFood(false);
  }

  return (
    <>
      <Layout />
      <div className="portfolio-outer">
        <div className="modal-overlay hidden" onClick={closeModal}></div>
        <div className="hidden-sections">
          {car && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">dealership project</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>Car-dealership</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>
                        react, javascript, node-js, express-js, mongoDB,
                        firebase, material UI
                      </span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:{" "}
                      <a href="https://github.com/RubelShahriar/car-app">
                        github.com/Rubel/car-app
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://autosaleszone.netlify.app">
                        autosaleszone.netlify.app{" "}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={carproject} alt="project" />
                  <img src={carshop1} alt="project" />
                  <img src={carlogin} alt="project" />
                  <img src={carallorder} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
          {gallery && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">gallery project</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>SharePic</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>
                        react, javascript, sanity, google oauth, material UI,
                        masonry-layout, loader-spinner, uuid
                      </span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:{" "}
                      <a href="https://github.com/RubelShahriar/share-pic">
                        github.com/Rubel/share-pic
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://sharepicmedia.netlify.app">
                        sharepicmedia.netlify.app
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={galleryhome} alt="project" />
                  <img src={gallerybottom} alt="project" />
                  <img src={gallerydetails} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
          {dashboard && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">dashboard project</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>Admin Dashboard</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>
                        react, javascript, chartjs, react-chartjs-2,
                        react-router-dom, sASS
                      </span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:{" "}
                      <a href="https://github.com/RubelShahriar/dashboard">
                        github.com/Rubel/dashboard
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://eco-dashboard.netlify.app/">
                        eco-dashboard.netlify.app
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={dashboard1} alt="project" />
                  <img src={dashboardo} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
          {youtube && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">youtube project</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>YouTube</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>
                        react, javascript, rapid Api, react-router-dom, axios,
                        react-player, icons-material
                      </span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:{" "}
                      <a href="https://github.com/RubelShahriar/youtube">
                        github.com/Rubel/youtube
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://youtubemedia.netlify.app/">
                        youtubemedia.netlify.app
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={youtubehome} alt="project" />
                  <img src={youtubehome1} alt="project" />
                  <img src={youtubedetails} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
          {gadget && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">gadget project</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>gadgetsPro</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>
                        nextjs, javascript, react-icons, react-hot-toast,
                        sanity, canvas-confetti, stripe
                      </span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:
                      <a href="https://github.com/RubelShahriar/nextjs-ecommerce-app">
                        github.co/Rubel/ecommerce
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://gadgetsproeco.vercel.app/">
                        gadgetsproeco.vercel.app/
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={gadgethome} alt="project" />
                  <img src={gadgetproducts} alt="project" />
                  <img src={gadgetdetails} alt="project" />
                  <img src={payment} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
          {food && (
            <div>
              <section className="modal">
                <i className="bx bx-x-circle modal-close"></i>
                <h2 className="modal-h2">food landing page</h2>
                <div className="modal-grid">
                  <div className="modal-left">
                    <p>
                      <i className="bx bxl-nodejs"></i>project:{" "}
                      <span>food-landing-page</span>
                    </p>
                    <p>
                      <i className="bx bx-coin-stack"></i>stack:{" "}
                      <span>HTML, CSS, javascript, box-icons</span>
                    </p>
                  </div>
                  <div className="modal-right">
                    <p>
                      <i className="bx bxl-github"></i>github:{" "}
                      <a href="https://github.com/RubelShahriar/food-landing-page">
                        github.com/rubel/food-app
                      </a>
                    </p>
                    <p>
                      <i className="bx bx-link-external"></i>preview:
                      <a href="https://freshfoodapp.netlify.app/">
                        freshfoodapp.netlify.app
                      </a>
                    </p>
                  </div>
                </div>
                <div className="modal-images">
                  <img src={foodhome} alt="project" />
                  <img src={foodmiddle} alt="project" />
                </div>
              </section>
              <div className="modal-overlay" onClick={closeModal}></div>
            </div>
          )}
        </div>
        <main className="portfolio">
          <div className="container">
            <div className="cmn-heading">
              <h1 className="title">
                my <span className="heading-last-word">portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            <h3 className="portfolio-heading3">
              Here are a few past projects i've worked on. Want to see more?
              <a href="mailto:mr.rubelshahriar@gmail.com">Email me!</a>
            </h3>
            <div className="portfolio-grid">
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("car")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={carproject}
                  alt=""
                />
                <div className="image-overlay">
                  <img
                    className="image-overlay-inner-image"
                    src={carlogo}
                    alt=""
                  />
                  <h1>car dealership</h1>
                </div>
                <h3 className="portfolio-image-heading3">dealership project</h3>
              </div>
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("gallery")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={galleryhome}
                  alt=""
                />
                <div className="image-overlay image-overlay-5">
                  <img
                    className="image-overlay-inner-image"
                    src={gallerylogo}
                    alt=""
                  />
                  <h1>gallery app</h1>
                </div>
                <h3 className="portfolio-image-heading3">gallery project</h3>
              </div>
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("dashboard")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={dashboardo}
                  alt=""
                />
                <div className="image-overlay image-overlay-2">
                  <img
                    className="image-overlay-inner-image"
                    src={dashboardlogo}
                    alt=""
                  />
                  <h1>sales dashboard</h1>
                </div>
                <h3 className="portfolio-image-heading3">dashboard project</h3>
              </div>
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("youtube")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={youtubemobile}
                  alt=""
                />
                <div className="image-overlay image-overlay-4">
                  <img
                    className="image-overlay-inner-image"
                    src={youtubelogo}
                    alt=""
                  />
                  <h1>youtube app</h1>
                </div>
                <h3 className="portfolio-image-heading3">youtube project</h3>
              </div>
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("gadget")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={gadgethome}
                  alt=""
                />
                <div className="image-overlay image-overlay-3">
                  <img
                    className="image-overlay-inner-image"
                    src={gadgetlogo}
                    alt=""
                  />
                  <h1>gadgets pro</h1>
                </div>
                <h3 className="portfolio-image-heading3">gadgets project</h3>
              </div>
              <div
                className="portfolio-grid-item"
                onClick={() => openModal("food")}
              >
                <img
                  className="portfolio-grid-item-image"
                  src={foodhome}
                  alt=""
                />
                <div className="image-overlay image-overlay-1">
                  <img
                    className="image-overlay-inner-image"
                    src={foodlogo}
                    alt=""
                  />
                  <h1>food landing page</h1>
                </div>
                <h3 className="portfolio-image-heading3">food landing page</h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
