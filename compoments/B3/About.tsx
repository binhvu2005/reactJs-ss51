import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'jquery.fancybox/dist/jquery.fancybox.css';
import 'aos/dist/aos.css';
import './css/style.css';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs: React.FC = () => {
  return (
    <div>
      <nav className="site-nav">
        <Container>
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
              <li><a href="services.html">Services</a></li>
              <li className="active"><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
              <span></span>
            </a>
          </div>
        </Container>
      </nav>

      <div className="hero hero-inner">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">About Us</h1>
                <p className="text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="owl-single dots-absolute owl-carousel">
                <img src="images/slider-1.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20" />
                <img src="images/slider-2.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20" />
                <img src="images/slider-3.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20" />
                <img src="images/slider-4.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20" />
                <img src="images/slider-5.jpg" alt="Free HTML Template by Untree.co" className="img-fluid rounded-20" />
              </div>
            </Col>
            <Col lg={5} className="pl-lg-5 ml-auto">
              <h2 className="section-title mb-4">About Tours</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={6} className="text-center">
              <h2 className="section-title mb-3 text-center">Team</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} className="mb-4">
              <div className="team">
                <img src="images/person_1.jpg" alt="Image" className="img-fluid mb-4 rounded-20" />
                <div className="px-3">
                  <h3 className="mb-0">James Watson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="mb-4">
              <div className="team">
                <img src="images/person_2.jpg" alt="Image" className="img-fluid mb-4 rounded-20" />
                <div className="px-3">
                  <h3 className="mb-0">Carl Anderson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="mb-4">
              <div className="team">
                <img src="images/person_4.jpg" alt="Image" className="img-fluid mb-4 rounded-20" />
                <div className="px-3">
                  <h3 className="mb-0">Michelle Allison</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="mb-4">
              <div className="team">
                <img src="images/person_3.jpg" alt="Image" className="img-fluid mb-4 rounded-20" />
                <div className="px-3">
                  <h3 className="mb-0">Drew Wood</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section testimonial-section mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>
              <div className="owl-single owl-carousel no-nav">
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                  </blockquote>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={7}>
              <h2 className="section-title text-center mb-3">Why Us</h2>
              <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </Col>
          </Row>
          <Row className="block__19738 section-counter">
            <Col md={6} lg={3}>
              <div className="counter-wrap">
                <span className="number"><span className="countup">9312</span></span>
                <span className="caption"># of Trips</span>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="counter-wrap">
                <span className="number"><span className="countup">69</span></span>
                <span className="caption"># of Islands</span>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="counter-wrap">
                <span className="number"><span className="countup">768</span></span>
                <span className="caption"># of Cruises</span>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="counter-wrap">
                <span className="number"><span className="countup">9276</span></span>
                <span className="caption"># of Customers</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="site-footer">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <div className="social-icon">
                <a href="#" className="icon-facebook"></a>
                <a href="#" className="icon-twitter"></a>
                <a href="#" className="icon-linkedin"></a>
                <a href="#" className="icon-instagram"></a>
              </div>
              <div className="site-logo">
                <a href="#">Tour <span>.</span></a>
              </div>
              <p className="copyright">
                &copy; 2024 Tour. All Rights Reserved. 
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default AboutUs;
