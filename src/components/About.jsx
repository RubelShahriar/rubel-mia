import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css";
import Layout from "./Layout";

const About = () => {
  return (
    <>
      <Layout />
      <div className="about-main">
        <div className="container">
          <div className="cmn-heading">
            <h1 className="title">
              about <span className="heading-last-word">me</span>
            </h1>
            <span className="title-bg">resume</span>
          </div>
          <section className="personal-info">
            <div className="container">
              <div className="grid-layout">
                <div className="info-item">
                  <h1>personal infos</h1>
                  <div className="info-left-inner-flex">
                    <div>
                      <ul>
                        <li>
                          first name: <span>rubel</span>
                        </li>
                        <li>
                          age:{" "}
                          <span>{new Date().getFullYear() - 2000} years</span>
                        </li>
                        <li>
                          freelance:{" "}
                          <span className="custom-clr">available</span>
                        </li>
                        <li>
                          phone: <span>+8801309515101</span>
                        </li>
                        <li>
                          skype:{" "}
                          <NavLink
                            className="custom-clr"
                            to="https://join.skype.com/invite/y50GkRTrfV58"
                          >
                            Rubel Mia
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>
                          last name: <span>mia</span>
                        </li>
                        <li>
                          nationality: <span>bangladeshi</span>
                        </li>
                        <li>
                          address: <span>dhaka, bangladesh</span>
                        </li>
                        <li>
                          email:
                          <a
                            className="custom-clr lowercase"
                            href="mailto:mr.rubelshahriar@gmail.com"
                          >
                            mr.rubelshahriar@gmail.com
                          </a>
                        </li>
                        <li>
                          language: <span>english, bangla, korean</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="btn-main">
                    <button className="button">
                      <span className="btn-span-text">
                        <a href="https://drive.google.com/file/d/1AN-BcKOfRwPybpdZVO2AFXd2p2pMuxe1">
                          download cv
                          {/* https://drive.google.com/file/d/1AN-BcKOfRwPybpdZVO2AFXd2p2pMuxe1/view?usp=sharing */}
                        </a>
                      </span>
                    </button>
                    <i className="bx bxs-cloud-download btn-arrow"></i>
                  </div>
                </div>
                <div className="credits-item">
                  <div className="credits-info-wrapper">
                    <h3>01</h3>
                    <p>
                      years of <span>experience</span>
                    </p>
                  </div>
                  <div className="credits-info-wrapper">
                    <h3>47</h3>
                    <p>
                      completed<span> projects</span>
                    </p>
                  </div>
                  <div className="credits-info-wrapper">
                    <h3>21</h3>
                    <p>
                      happy <span> customers</span>
                    </p>
                  </div>
                  <div className="credits-info-wrapper">
                    <h3>23</h3>
                    <p>
                      latest<span>technologies</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="separator" />
          <section className="skills-main">
            <h1 className="about-secondary-title">my skills</h1>
            <div className="skills-grid-layout">
              <div className="progress-wrap">
                <div className="progress react">
                  <span>100%</span>
                </div>
                <p>react</p>
              </div>
              <div className="progress-wrap">
                <div className="progress javascript">
                  <span>100%</span>
                </div>
                <p>javascript</p>
              </div>
              <div className="progress-wrap">
                <div className="progress redux">
                  <span>100%</span>
                </div>
                <p>redux</p>
              </div>
              <div className="progress-wrap">
                <div className="progress typescript">
                  <span>100%</span>
                </div>
                <p>typescript</p>
              </div>
              <div className="progress-wrap">
                <div className="progress sass">
                  <span>100%</span>
                </div>
                <p>sass</p>
              </div>
              <div className="progress-wrap">
                <div className="progress nodejs">
                  <span>100%</span>
                </div>
                <p>node js</p>
              </div>
              <div className="progress-wrap">
                <div className="progress mongodb">
                  <span>100%</span>
                </div>
                <p>mongo db</p>
              </div>
              <div className="progress-wrap">
                <div className="progress expressjs">
                  <span>100%</span>
                </div>
                <p>express js</p>
              </div>
            </div>
          </section>
          <hr className="separator" />
          <section className="experiences">
            <h1 className="about-secondary-title">experience & education</h1>
            <div className="experiences-grid">
              <div className="exp-grid-item">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2022/06 - 2022/08</span>
                    <h5>
                      web developer (intern) <span className="place">CIT</span>
                    </h5>
                    <p>
                      Worked at an official environment and teams, designed and
                      developed a few projects for production, group work and
                      solved problem with team members.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2022/01 - 2022/06</span>
                    <h5>
                      freelance developer{" "}
                      <span className="place">upwork/fiverr</span>
                    </h5>
                    <p>
                      Worked as a freelance developer from jan 2022 to june
                      2022.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2022/06 - 2022/08</span>
                    <h5>
                      think in a redux way
                      <span className="place">learn with summit</span>
                    </h5>
                    <p>
                      Learned redux library from basic to advance. Also Learned
                      redux-thunk, redux-toolkit, async thunk, reducers etc.
                      Finally build 4 redux web app.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="exp-grid-item">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2021/06 - 2021/12</span>
                    <h5>
                      complete web development
                      <span className="place">programming hero</span>
                    </h5>
                    <p>
                      Learned complete web dev from programming hero in 2021.
                      Technologies i Learned from here: React, data fetching,
                      server side rendering, and web APIs.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2020/01 - 2020/06</span>
                    <h5>
                      responsive web design
                      <span className="place">creative it institute</span>
                    </h5>
                    <p>
                      Learned HTML, CSS, SASS language, basic javascript, add
                      plugins and slider to html, bootstrap etc. Desinged
                      multiple landing page with mobile responsive
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bx bxs-briefcase"></i>
                    </div>
                    <span className="date">2016/06 - 2018/02</span>
                    <h5>
                      higher secondary
                      <span className="place">universal college sylhet</span>
                    </h5>
                    <p>Higher secondary education</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
