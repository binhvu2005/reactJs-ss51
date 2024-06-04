import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'jquery.fancybox/dist/jquery.fancybox.css';
import 'aos/dist/aos.css';
import './style.css'; // Import custom CSS here

const App = () => {
  useEffect(() => {
    // Importing scripts dynamically
    const scripts = [
      'https://code.jquery.com/jquery-3.4.1.min.js',
      'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
      'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jquery-animateNumber/0.0.14/jquery.animateNumber.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
      'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
      'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js',
    ];

    scripts.forEach((scriptUrl) => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = false;
      document.body.appendChild(script);
    });

    // Initialize AOS
    window.addEventListener('load', () => {
      const AOS = require('aos');
      AOS.init();
    });

    // Initialize other JS libraries
    const customScript = document.createElement('script');
    customScript.src = './custom.js'; // Assuming custom.js is in the same directory
    customScript.async = false;
    document.body.appendChild(customScript);

    return () => {
      scripts.forEach((scriptUrl) => {
        const script = document.querySelector(`script[src="${scriptUrl}"]`);
        if (script) document.body.removeChild(script);
      });

      if (customScript) document.body.removeChild(customScript);
    };
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
            <a href="index.html" className="logo m-0">Tour <span className="text-primary">.</span></a>
            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li><a href="index.html">Home</a></li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li><a href="elements.html">Elements</a></li>
                  <li><a href="#">Menu One</a></li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li><a href="#">Sub Menu One</a></li>
                      <li><a href="#">Sub Menu Two</a></li>
                      <li><a href="#">Sub Menu Three</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Menu Three</a></li>
                </ul>
              </li>
              <li className="active"><a href="services.html">Services</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </nav>

      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">Our Services</h1>
                <p className="text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3"><img src="images/hero-slider-1.jpg" alt="Image" className="img-fluid"></a>
                <div className="d-flex">
                  <div>
                    <h3><a href="#">Excellence in Travel</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3"><img src="images/hero-slider-2.jpg" alt="Image" className="img-fluid"></a>
                <div className="d-flex">
                  <div>
                    <h3><a href="#">Discovering Best</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3"><img src="images/hero-slider-3.jpg" alt="Image" className="img-fluid"></a>
                <div className="d-flex">
                  <div>
                    <h3><a href="#">A New Moments of Life</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="media-1">
                <a href="#" className="d-block mb-3"><img src="images/hero-slider-4.jpg" alt="Image" className="img-fluid"></a>
                <div className="d-flex">
                  <div>
                    <h3><a href="#">Joy To Your Journey</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-paper-plane"></span>
                <h3>Excellence in Travel</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-tag"></span>
                <h3>Discover Best</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-user"></span>
                <h3>A New Moments of Life</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="service text-center">
                <span className="icon-support"></span>
                <h3>Joy To Your Journey</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright">
                <p>&copy; 2021 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
