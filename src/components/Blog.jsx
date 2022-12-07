import React, { useState } from "react";
import "./blog.css";
import Layout from "./Layout";
import {
  blogasyncjs,
  blogerrorhandling,
  blogpromises,
  blogredux,
  blogroadmap,
} from "../assets";

const Blog = () => {
  const [redux, setRedux] = useState(false);
  const [async, setAsync] = useState(false);
  const [roadmap, setRoadmap] = useState(false);
  const [promise, setPromise] = useState(false);
  const [errorhandling, setErrorhandling] = useState(false);

  function openModal(modal) {
    if (modal === "redux") {
      setRedux(true);
    } else if (modal === "async") {
      setAsync(true);
    } else if (modal === "roadmap") {
      setRoadmap(true);
    } else if (modal === "promise") {
      setPromise(true);
    } else if (modal === "errorhandling") {
      setErrorhandling(true);
    }
  }
  function closeModal(name) {
    setRedux(false);
    setAsync(false);
    setRoadmap(false);
    setPromise(false);
    setErrorhandling(false);
  }

  return (
    <>
      <Layout />
      <div className="hidden-sections">
        {redux && (
          <div>
            <section className="modal">
              <i className="bx bx-x-circle modal-close"></i>
              <h2 className="modal-h2">details</h2>
              <div className="modal-small-heading">
                <small>
                  <i className="bx bxs-user"></i>Rubel
                </small>
                <small>
                  <i className="bx bxs-calendar"></i>18 April 2022
                </small>
                <small>
                  <i className="bx bxs-purchase-tag"></i>redux, react,
                  javascript, state
                </small>
              </div>
              <h1 className="modal-h1">
                A beginner’s guide to Redux with React
              </h1>
              <div className="modal-images">
                <img src={blogredux} alt="project" />
              </div>
              <div className="modal-details-text">
                <p>
                  When a component initiates a change (the blue circle), this
                  change is communicated to the other components one step at a
                  time. This may seem simple enough when we only have 10
                  components, but what about an app with 20, 50 or 100
                  components? As an app becomes larger, debugging can quickly
                  become tricky, as we lose sight of how information is passed
                  from one component to another.
                </p>
                <p>
                  On the right is the same React app with Redux. This time, when
                  a component initiates a change, that information goes straight
                  from it (the blue circle) to our store (the green circle).
                  From there, the change is then communicated directly to all
                  the components that need to update.
                </p>
                <p>
                  Redux, therefore, makes it much easier to diagnose problems: a
                  problem will either be in the component that initiated the
                  change (the blue circle) or in the code related to Redux
                  itself.
                </p>
                <p>
                  Redux is a state container for JavaScript apps. It is most
                  commonly paired with React, where it takes control of state
                  away from React components and gives it to a centralised place
                  called a ‘store’.
                </p>
                <p>
                  When a component initiates a change (the blue circle), this
                  change is communicated to the other components one step at a
                  time. This may seem simple enough when we only have 10
                  components, but what about an app with 20, 50 or 100
                  components? As an app becomes larger, debugging can quickly
                  become tricky, as we lose sight of how information is passed
                  from one component to another. On the right is the same React
                  app with Redux. This time, when a component initiates a
                  change, that information goes straight from it (the blue
                  circle) to our store (the green circle). From there, the
                  change is then communicated directly to all the components
                  that need to update. Redux, therefore, makes it much easier to
                  diagnose problems: a problem will either be in the component
                  that initiated the change (the blue circle) or in the code
                  related to Redux itself.
                </p>
              </div>
            </section>
            <div className="modal-overlay" onClick={closeModal}></div>{" "}
          </div>
        )}

        {async && (
          <div>
            {" "}
            <section className="modal">
              <i className="bx bx-x-circle modal-close"></i>
              <h2 className="modal-h2">details</h2>
              <div className="modal-small-heading">
                <small>
                  <i className="bx bxs-user"></i>Rubel
                </small>
                <small>
                  <i className="bx bxs-calendar"></i>18 April 2022
                </small>
                <small>
                  <i className="bx bxs-purchase-tag"></i>redux, react,
                  javascript, state
                </small>
              </div>
              <h1 className="modal-h1">
                Asynchronous JavaScript – Callbacks, Promises, and Async/Await
                Explained
              </h1>
              <div className="modal-images">
                <img src={blogasyncjs} alt="project" />
              </div>
              <div className="modal-details-text">
                <p>
                  If you've been learning JavaScript for a while now, then
                  you've probably heard the term "asynchronous" before.
                </p>
                <p>
                  This is because JavaScript is an asynchronous language...but
                  what does that really mean? In this article, I hope to show
                  you that the concept is not as difficult as it sounds.
                </p>
                <p>
                  Before we hop into the real deal, let's look at these two
                  words – synchronous and asynchronous. By default, JavaScript
                  is a synchronous, single threaded programming language. This
                  means that instructions can only run one after another, and
                  not in parallel.
                </p>
                <p>
                  The above code is pretty simple – it sums two numbers and then
                  logs the sum to the browser console. The interpreter executes
                  these instructions one after another in that order until it is
                  done. But this method comes along with disadvantages. Say we
                  wanted to fetch some large amount of data from a database and
                  then display it on our interface. When the interpreter reaches
                  the instruction that fetches this data, the rest of the code
                  is blocked from executing until the data has been fetched and
                  returned.
                </p>
                <p>
                  Now you might say that the data to be fetched isn't that large
                  and it won't take any noticeable time. Imagine that you have
                  to fetch data at multiple different points. This delay
                  compounded doesn't sound like something users would want to
                  come across. Luckily for us, the problems with synchronous
                  JavaScript were addressed by introducing asynchronous
                  JavaScript. Think of asynchronous code as code that can start
                  now, and finish its execution later. When JavaScript is
                  running asynchronously, the instructions are not necessarily
                  executed one after the other as we saw before. In order to
                  properly implement this asynchronous behavior, there are a few
                  different solutions developers has used over the years. Each
                  solution improves upon the previous one, which makes the code
                  more optimized and easier to understand in case it gets
                  complex. To further understand the asynchronous nature of
                  JavaScript, we will go through callback functions, promises,
                  and async and await.
                </p>
                <p>
                  The setTimeout is a JavaScript function that takes two
                  parameters. The first parameter is another function, and the
                  second is the time after which that function should be
                  executed in milliseconds. Now you see the definition of
                  callbacks coming into play.
                </p>
                <p>
                  The function inside setTimeout in this case is required to run
                  after two seconds (2000 milliseconds). Imagine it being
                  carried off to be executed in some separate part of the
                  browser, while the other instructions continue executing.
                  After two seconds, the results of the function are then
                  returned.
                </p>
              </div>
            </section>
            <div className="modal-overlay" onClick={closeModal}></div>{" "}
          </div>
        )}

        {promise && (
          <div>
            {" "}
            <section className="modal">
              <i className="bx bx-x-circle modal-close"></i>
              <h2 className="modal-h2">details</h2>
              <div className="modal-small-heading">
                <small>
                  <i className="bx bxs-user"></i>Rubel
                </small>
                <small>
                  <i className="bx bxs-calendar"></i>18 April 2022
                </small>
                <small>
                  <i className="bx bxs-purchase-tag"></i>redux, react,
                  javascript, state
                </small>
              </div>
              <h1 className="modal-h1">
                JavaScript Promise – How to Resolve or Reject Promises in JS
              </h1>
              <div className="modal-images">
                <img src={blogpromises} alt="project" />
              </div>
              <div className="modal-details-text">
                <p>
                  Promises are important building blocks for asynchronous
                  operations in JavaScript. You may think that promises are not
                  so easy to understand, learn, and work with. And trust me, you
                  are not alone!
                </p>
                <p>
                  Promises are challenging for many web developers, even after
                  spending years working with them. In this article, I want to
                  try to change that perception while sharing what I've learned
                  about JavaScript Promises over the last few years. Hope you
                  find it useful.
                </p>
                <p>
                  Oh, yes! That's right. We have callback functions in
                  JavaScript. But, a callback is not a special thing in
                  JavaScript. It is a regular function that produces results
                  after an asynchronous call completes (with success/error). The
                  word 'asynchronous' means that something happens in the
                  future, not right now. Usually, callbacks are only used when
                  doing things like network calls, or uploading/downloading
                  things, talking to databases, and so on.
                </p>
                <p>
                  While callbacks are helpful, there is a huge downside to them
                  as well. At times, we may have one callback inside another
                  callback that's in yet another callback and so on. I'm
                  serious! Let's understand this "callback hell" with an
                  example.
                </p>
                <p>
                  pA Promise uses an executor function to complete a task
                  (mostly asynchronously). A consumer function (that uses an
                  outcome of the promise) should get notified when the executor
                  function is done with either resolving (success) or rejecting
                  (error).
                </p>
              </div>
            </section>
            <div className="modal-overlay" onClick={closeModal}></div>{" "}
          </div>
        )}

        {errorhandling && (
          <div>
            {" "}
            <section className="modal">
              <i className="bx bx-x-circle modal-close"></i>
              <h2 className="modal-h2">details</h2>
              <div className="modal-small-heading">
                <small>
                  <i className="bx bxs-user"></i>Rubel
                </small>
                <small>
                  <i className="bx bxs-calendar"></i>18 April 2022
                </small>
                <small>
                  <i className="bx bxs-purchase-tag"></i>redux, react,
                  javascript, state
                </small>
              </div>
              <h1 className="modal-h1">
                A mostly complete guide to error handling in JavaScript.
              </h1>
              <div className="modal-images">
                <img src={blogerrorhandling} alt="project" />
              </div>
              <div className="modal-details-text">
                <p>
                  Things don't go always well in our programs. In particular,
                  there are situations where we may want to stop the program or
                  inform the user if something bad happens.
                </p>
                <p>
                  For example you may want to propagate an exception up in the
                  stack to crash the program altogether. This could happen for
                  fatal errors, when it's safer to stop the program rather than
                  working with invalid data.
                </p>
                <p>
                  JavaScript is synchronous by nature, being a single-threaded
                  language. Host environments like browsers engines augment
                  JavaScript with a number of Web API for interacting with
                  external systems, and for dealing with I/O bound operations.
                  Examples of asynchronicity in the browser are timeouts,
                  events, Promise.
                </p>
                <p>
                  Logic errors can be the most difficult type of errors to track
                  down. These errors are not the result of a syntax or runtime
                  error. Instead, they occur when you make a mistake in the
                  logic that drives your script and you do not get the result
                  you expected. You cannot catch those errors, because it
                  depends on your business requirement what type of logic you
                  want to put in your program.
                </p>
                <p>
                  In this guide we covered error handling in JavaScript for the
                  whole spectrum, from simple synchronous code, to advanced
                  asynchronous primitives. There are many ways in which an
                  exception can manifest in our JavaScript programs. Exceptions
                  from synchronous code are the most straightforward to catch.
                  Exceptions from asynchronous code paths instead can be tricky
                  to deal with.
                </p>
              </div>
            </section>
            <div className="modal-overlay" onClick={closeModal}></div>{" "}
          </div>
        )}
        {roadmap && (
          <div>
            {" "}
            <section className="modal">
              <i className="bx bx-x-circle modal-close"></i>
              <h2 className="modal-h2">details</h2>
              <div className="modal-small-heading">
                <small>
                  <i className="bx bxs-user"></i>Rubel
                </small>
                <small>
                  <i className="bx bxs-calendar"></i>18 April 2022
                </small>
                <small>
                  <i className="bx bxs-purchase-tag"></i>redux, react,
                  javascript, state
                </small>
              </div>
              <h1 className="modal-h1">
                The Complete Front-End Developer Roadmap 2023
              </h1>
              <div className="modal-images">
                <img src={blogroadmap} alt="project" />
              </div>
              <div className="modal-details-text">
                <p>
                  Front-end development, or client-side development, involves
                  building the User Interface (UI) of a website or a web
                  application, that determines how every part of a website will
                  look and how it will work. The UI includes the visual part of
                  the application and the user interactions. Whatever you see
                  when you visit a website - the different types of buttons and
                  other UI components, media, texts, forms, animations, etc. are
                  all developed as a part of the front-end. Please also take a
                  look at the details on what is markdown here.
                </p>
                <p>
                  A Front-End Developer is a type of Software Engineer who works
                  on front-end development. They are not only responsible for
                  developing the UI, but they also ensure a balance between
                  design and functionality and ensure speed and scalability.
                  They also ensure that the website loads correctly on all
                  browsers (cross-browser), on different operating systems
                  (cross-platform), and on different devices like mobiles,
                  tablets, and computer screens (cross-device).
                </p>
                <p>
                  Note that the front end development roadmap presented in this
                  article is not the only way to become a Front End Developer.
                  This is simply a guide for those who are looking to start
                  learning Front End Development.
                </p>
                <p>
                  For stepping into Front-End Development, the most essential
                  skills you should have are HTML, CSS, and JavaScript. These
                  skills are the bare minimum to start with Front-End
                  Development. Note that front-end web development is not just
                  limited to these three skills, there are many more
                  technologies that you will need to learn to excel as a
                  Front-End Developer in 2022.
                </p>
              </div>
            </section>
            <div className="modal-overlay" onClick={closeModal}></div>{" "}
          </div>
        )}
      </div>
      <main className="blog">
        <div className="container">
          <div className="cmn-heading">
            <h1 className="title">
              my <span className="heading-last-word">blog</span>
            </h1>
            <small className="title-bg">posts</small>
          </div>
          <div className="blog-container">
            <div className="blog-item" onClick={() => openModal("redux")}>
              <div className="blog-thumb">
                <img src={blogredux} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">
                  A beginner’s guide to Redux with React
                </h3>
                <p className="blog-p">
                  When a component initiates a change (the blue circle), this
                  change is communicated to the other components
                </p>
              </div>
            </div>
            <div className="blog-item" onClick={() => openModal("async")}>
              <div className="blog-thumb">
                <img src={blogasyncjs} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">
                  Asynchronous JavaScript – Async/Await Explained
                </h3>
                <p className="blog-p">
                  If you've been learning JavaScript for a while now, then
                  you've probably heard the term "asynchronous" before
                </p>
              </div>
            </div>
            <div className="blog-item" onClick={() => openModal("roadmap")}>
              <div className="blog-thumb">
                <img src={blogroadmap} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">
                  The Complete Front-End Developer Roadmap 2023
                </h3>
                <p className="blog-p">
                  Front-end development, or client-side development, involves
                  building the User Interface (UI) of
                </p>
              </div>
            </div>
            <div className="blog-item" onClick={() => openModal("promise")}>
              <div className="blog-thumb">
                <img src={blogpromises} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">
                  JavaScript Promise – How to Resolve or Reject Promises in JS
                </h3>
                <p className="blog-p">
                  Promises are important building blocks for asynchronous
                  operations in JavaScript. You may think that
                </p>
              </div>
            </div>
            <div
              className="blog-item"
              onClick={() => openModal("errorhandling")}
            >
              <div className="blog-thumb">
                <img src={blogerrorhandling} alt="blog" />
              </div>
              <div className="blog-content">
                <h3 className="blog-h3">
                  A mostly complete guide to error handling in JavaScript.
                </h3>
                <p className="blog-p">
                  Things don't go always well in our programs. In particular,
                  there are situations where we may want to stop the program or
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
