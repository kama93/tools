import React from 'react';

import Gif from '../../components/gif/gif'
import Navbar from '../../components/nav-bar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Popups from '../../components/bmi/pop';
import Pop from '../../components/kcal/pop1';
import Pops from '../../components/air/pop2';
import Email from '../../components/email-form/email';

import './lading.css'

function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}>
          <div className="absolute w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80')"
            }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl" data-aos="fade-up">
                    Fit App
                    </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    On this application you can check yours BMI, calorie calculator. It's also help you prepare weekly meal plan full of nutrition. During your diet we advice to use our progress tracking.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-gray-300 -mt-24">
          <Gif />
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <Popups />
              <Pop />
              <Pops />
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto" data-aos="zoom-in-right">
                <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-carrot icon text-pink-600 bg-pink-300"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Eating a balanced diet
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best.
                  This means eating a wide variety of foods in the right proportions, and consuming the right amount of food and drink to achieve and maintain a healthy body weight.
                  This page covers healthy eating advice for the general population.
                  People with special dietary needs or a medical condition should ask their doctor or a registered dietitian for advice.
                <br />
                  (From NHS page)
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" data-aos="flip-left" data-aos-delay="1000">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4 container-health">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Fruit and vegetables: are you getting your 5 A Day?
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Fruit and vegetables are a good source of vitamins and minerals and fibre, and should make up just over a third of the food you eat each day.                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 background-section">
          <div
            className="bottom-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="flip-right" data-aos-delay="1000">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1563685442337-f23be1ebb2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" data-aos="zoom-in-left">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fas fa-running icon"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Exercise
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Given the overwhelming evidence, it seems obvious that we should all be physically active. It's essential if you want to live a healthy and fulfilling life into old age.
                    It's medically proven that people who do regular physical activity have:
                    up to a 35% lower risk of coronary heart disease and stroke,
                    up to a 50% lower risk of type 2 diabetes. <br />(From NHS page)
                  </p>
                  <ul className="list-none mt-6 list-active">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-dumbbell"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Any activity is better than none
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-dumbbell"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Reduce time spent sitting or lying down</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-dumbbell"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Do at least 150 minutes of moderate intensity activity a week</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48 background-section">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Our amazing team of diet experts and trainers
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../../assets/img/team-1-800x800.jpg")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Trainer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in" data-aos-delay="400">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../../assets/img/team-2-800x800.jpg")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Romina Hadid
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Fitness trainer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in" data-aos-delay="600">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../../assets/img/team-3-800x800.jpg")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Alexa Smith
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Dietitian
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" data-aos="fade-in-" data-aos-delay="800">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("../../assets/img/team-4-470x470.png")}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Jenna Kardi
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Dietitian
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <Email />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing
