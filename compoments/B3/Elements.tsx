import React from 'react';
import { Container, Row, Col, Nav, Navbar, Accordion, Card, Button, Form, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/style.css';  // Make sure you have these CSS files in the right path

const ElementsPage: React.FC = () => {
  return (
    <div>
      <Navbar expand="lg" className="site-nav">
        <Container>
          <Navbar.Brand href="index.html" className="logo">Tour <span className="text-primary">.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto site-menu">
              <Nav.Link href="index.html">Home</Nav.Link>
              <Nav.Item className="has-children">
                <Nav.Link href="#">Dropdown</Nav.Link>
                <Nav className="dropdown">
                  <Nav.Link href="elements.html">Elements</Nav.Link>
                  <Nav.Link href="#">Menu One</Nav.Link>
                  <Nav.Item className="has-children">
                    <Nav.Link href="#">Menu Two</Nav.Link>
                    <Nav className="dropdown">
                      <Nav.Link href="#">Sub Menu One</Nav.Link>
                      <Nav.Link href="#">Sub Menu Two</Nav.Link>
                      <Nav.Link href="#">Sub Menu Three</Nav.Link>
                    </Nav>
                  </Nav.Item>
                  <Nav.Link href="#">Menu Three</Nav.Link>
                </Nav>
              </Nav.Item>
              <Nav.Link href="services.html">Services</Nav.Link>
              <Nav.Link href="about.html">About</Nav.Link>
              <Nav.Link href="contact.html">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero hero-inner">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">Elements</h1>
                <p className="text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="untree_co-section">
        <Container className="my-5">
          <div className="mb-5">
            <Carousel className="owl-single dots-absolute">
              <Carousel.Item>
                <img src="images/slider-1.jpg" alt="Free HTML Template by Untree.co" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/slider-2.jpg" alt="Free HTML Template by Untree.co" className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="images/slider-4.jpg" alt="Free HTML Template by Untree.co" className="img-fluid" />
              </Carousel.Item>
            </Carousel>
          </div>

          <Row className="justify-content-center">
            <Col lg={4}>
              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Accordion</h2>
                <Accordion defaultActiveKey="0" id="accordion_1">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      How to download and register?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      How to create your paypal account?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      How to link your paypal and bank account?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Gallery</h2>
                <Row className="gutter-v2 gallery">
                  <Col xs={4}>
                    <a href="images/gal_1.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_1.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                  <Col xs={4}>
                    <a href="images/gal_2.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_2.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                  <Col xs={4}>
                    <a href="images/gal_3.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_3.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                  <Col xs={4}>
                    <a href="images/gal_4.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_4.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                  <Col xs={4}>
                    <a href="images/gal_5.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_5.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                  <Col xs={4}>
                    <a href="images/gal_6.jpg" className="gal-item" data-fancybox="gal"><img src="images/gal_6.jpg" alt="Image" className="img-fluid" /></a>
                  </Col>
                </Row>
              </div>
              <div className="custom-block" data-aos="fade-up">
                <h2 className="section-title">Video</h2>
                <a href="https://vimeo.com/342333493" data-fancybox className="video-wrap">
                  <span className="play-wrap"><span className="icon-play"></span></span>
                  <img src="images/bg_1.jpg" alt="Image" className="img-fluid rounded" />
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div className="custom-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="section-title">Form</h2>
                <Form className="contact-form bg-white">
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="fname">
                      <Form.Label className="text-black">First name</Form.Label>
                      <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="lname">
                      <Form.Label className="text-black">Last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="email">
                    <Form.Label className="text-black">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label className="text-black">Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label className="text-black">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="custom-block" data-aos="fade-up" data-aos-delay="200">
                <h2 className="section-title">Tabs</h2>
                <Nav variant="tabs" defaultActiveKey="#tab1">
                  <Nav.Item>
                    <Nav.Link href="#tab1" data-toggle="tab">First</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#tab2" data-toggle="tab">Second</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#tab3" data-toggle="tab">Third</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p>Far far away, behind the word mountains...</p>
                  </div>
                  <div className="tab-pane fade" id="tab2">
                    <p>A small river named Duden flows by...</p>
                  </div>
                  <div className="tab-pane fade" id="tab3">
                    <p>When she reached the first hills...</p>
                  </div>
                </div>
              </div>
              <div className="custom-block" data-aos="fade-up" data-aos-delay="300">
                <h2 className="section-title">Pagination</h2>
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#prev">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#1">1</a></li>
                    <li className="page-item"><a className="page-link" href="#2">2</a></li>
                    <li className="page-item"><a className="page-link" href="#3">3</a></li>
                    <li className="page-item"><a className="page-link" href="#next">Next</a></li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ElementsPage;
