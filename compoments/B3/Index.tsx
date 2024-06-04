import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'fancybox/dist/css/jquery.fancybox.css';
import 'aos/dist/aos.css';
import './style.css';
import Typed from 'react-typed';

const App = () => {
  React.useEffect(() => {
    const AOS = require('aos');
    AOS.init();
    const $ = require('jquery');
    const fancybox = require('@fancyapps/fancybox');
    require('owl.carousel');

    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
    });
  }, []);

  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="section-title text-center mb-3">Our Services</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-lg-4 order-lg-1">
              <div className="h-100">
                <div className="frame h-100">
                  <div
                    className="feature-img-bg h-100"
                    style={{
                      backgroundImage: "url('images/hero-slider-1.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-house display-4 text-primary"></span>
                  <h3>Beautiful Condo</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>

              <div className="feature-1 ">
                <div className="align-self-center">
                  <span className="flaticon-restaurant display-4 text-primary"></span>
                  <h3>Restaurants & Cafe</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-mail display-4 text-primary"></span>
                  <h3>Easy to Connect</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>

              <div className="feature-1 d-md-flex">
                <div className="align-self-center">
                  <span className="flaticon-phone-call display-4 text-primary"></span>
                  <h3>24/7 Support</h3>
                  <p className="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row text-center justify-content-center mb-5">
            <div className="col-lg-7">
              <h2 className="section-title text-center">Popular Destination</h2>
            </div>
          </div>

          <div className="owl-carousel owl-3-slider">
            <div className="item">
              <a
                className="media-thumb"
                href="images/hero-slider-1.jpg"
                data-fancybox="gallery"
              >
                <div className="media-text">
                  <h3>Pragser Wildsee</h3>
                  <span className="location">Italy</span>
                </div>
                <img
                  src="images/hero-slider-1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
            </div>

            <div className="item">
              <a
                className="media-thumb"
                href="images/hero-slider-2.jpg"
                data-fancybox="gallery"
              >
                <div className="media-text">
                  <h3>Oia</h3>
                  <span className="location">Greece</span>
                </div>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
            </div>

            <div className="item">
              <a
                className="media-thumb"
                href="images/hero-slider-3.jpg"
                data-fancybox="gallery"
              >
                <div className="media-text">
                  <h3>Perhentian Islands</h3>
                  <span className="location">Malaysia</span>
                </div>
                <img
                  src="images/hero-slider-3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
            </div>

            <div className="item">
              <a
                className="media-thumb"
                href="images/hero-slider-4.jpg"
                data-fancybox="gallery"
              >
                <div className="media-text">
                  <h3>Rialto Bridge</h3>
                  <span className="location">Italy</span>
                </div>
                <img
                  src="images/hero-slider-4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
            </div>

            <div className="item">
              <a
                className="media-thumb"
                href="images/hero-slider-5.jpg"
                data-fancybox="gallery"
              >
                <div className="media-text">
                  <h3>San Francisco</h3>
                  <span className="location">USA</span>
                </div>
                <img
                  src="images/hero-slider-5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6">
              <h2 className="section-title text-center">What Customer Saying...</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="post-entry-1 mb-4">
                <div className="post-thumbnail">
                  <img
                    src="images/hero-slider-1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <h2>
                    <a href="#">News Needs to Meet Its Audiences Where They Are</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-entry-1 mb-4">
                <div className="post-thumbnail">
                  <img
                    src="images/hero-slider-2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <h2>
                    <a href="#">News Needs to Meet Its Audiences Where They Are</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post-entry-1 mb-4">
                <div className="post-thumbnail">
                  <img
                    src="images/hero-slider-3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="post-entry-1-contents">
                  <span className="meta">July 17, 2019</span>
                  <h2>
                    <a href="#">News Needs to Meet Its Audiences Where They Are</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi temporibus praesentium neque, voluptatum quam
                    quibusdam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">About Tour</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget">
                  <ul className="list-unstyled social">
                    <li>
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Quick Links</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Subscribe</h3>
                  <form action="#" className="subscribe">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <input
                        type="submit"
                        className="btn btn-primary submit"
                        value="Subscribe"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
