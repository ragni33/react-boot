
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';

import './App.css';
import { Button, CardGroup } from 'react-bootstrap';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Row, Col, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <Container>

        <Navbar style={ { top: "20px", backgroundColor: 'beige' } } expand={ false }>
          <Container fluid>
            <Navbar.Brand href="#" style={ { color: "black" } }><h3>Web Design</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" >Web Design</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Features</Nav.Link>
                  <Nav.Link href="#action3">Pricing</Nav.Link>
                  { '\n' }
                  <Button variant="danger" style={ { width: "90px" } }>Subscribe</Button>{ ' ' }

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>

      <Container>
        <Row>
          <img style={ { width: '500px', marginTop: '50px' } } src={ `fm.jpg` } alt="logo" />
          <Col style={ { marginTop: '50px' } }> <p >Web development is the work involved in developing a
            website for the Internet or an intranet. Web development can range from developing a simple single static page of plain
            text to complex web applications, electronic businesses, and social network services</p>
            <img style={ { width: '400px' } } src={ `newsletter.png` } alt="logo" />

          </Col>
        </Row>

      </Container>

      <Container className='cards'>
        <Row>
          <Col xs={ 10 } md={ 4 } >
            <Card style={ { width: '18rem' } } className="card">

              <img src={ `branding.png` } alt="logo" />
              <Card.Body>
                <Card.Title>Branding</Card.Title>
                <Card.Text>

                  Positive perception of a company, its products or services in the customer's mind
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={ 10 } md={ 4 }>

            <Card style={ { width: '18rem' } }>
              <img src={ `business.jpg` } alt="logo" />
              <Card.Body>
                <Card.Title>Own Business</Card.Title>
                <Card.Text>
                  Businesses can be for-profit entities
                  or non-profit organizations.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>

          </Col>

          <Col xs={ 10 } md={ 4 }>

            <Card style={ { width: '18rem' } }>
              <img src={ `organictraffic.webp` } alt="logo" />
              <Card.Body>
                <Card.Title>Search Engine Marketing</Card.Title>
                <Card.Text>
                  Search Engine Optimization and is the process used,
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className='cards'>
        <Row>
          <Col xs={ 10 } md={ 4 } >
            <Card style={ { width: '18rem' } } className="card">

              <img style={ { width: "280px", height: "180px" } } src={ `digital.png` } alt="logo" />
              <Card.Body>
                <Card.Title>Growth Building</Card.Title>
                <Card.Text>
                  This includes not only email, social media, and web-based advertising, but also text
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={ 10 } md={ 4 }>

            <Card style={ { width: '18rem' } }>
              <img src={ `cs.png` } alt="logo" />
              <Card.Body>
                <Card.Title>Content Strategy</Card.Title>
                <Card.Text>
                  A successful content strategy will attract your target audience at every stage of the funnel.    </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>

          </Col>

          <Col xs={ 10 } md={ 4 }>

            <Card style={ { width: '18rem' } }>
              <img style={ { width: "280px", height: "180px" } } src={ `content-marketing-strategy.jpg` } alt="logo" />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  A few examples of digital marketing include social media, email, pay-per-click (PPC),
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className='con'>
        <Row>
          <Col>
            <img style={ { width: "70px", height: "70px", marginTop: "130px" } } src={ `location.jpg` } alt="logo" />
            <h5>7+ Street</h5>
          </Col>
          <Col>
            <img style={ { width: "70px", height: "70px", marginTop: "130px" } } src={ `us.jpg` } alt="logo" />

            <h5>700+ Commune</h5>
          </Col>
          <Col>
            <img style={ { width: "70px", height: "70px", marginTop: "130px" } } src={ `user.png` } alt="logo" />
            <h5>500+ Users </h5>
          </Col>
          <Col>
            <img style={ { width: "70px", height: "70px", marginTop: "130px" } } src={ `check.jpg` } alt="logo" />
            <h5>50+ Placements </h5>
          </Col>

        </Row>


      </Container>

      <Container className='Plan'>
        <h4 style={ { color: "red" } }>Subscription Plans Available</h4>
        <CardGroup style={ { margin: '4%' } } >
          <Card style={ { border: "1px solid black" } }>
            <Card.Body>
              <Card.Title>Free</Card.Title>
              <h2>$0</h2>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Button type="submit">Buy Now</Button>{ ' ' }
            </Card.Body>

          </Card>
          <Card style={ { border: "1px solid black" } }>
            <Card.Body>
              <Card.Title>Basic</Card.Title>
              <h2>$10</h2>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Button type="submit">Buy Now</Button>{ ' ' }
            </Card.Body>

          </Card>
          <Card style={ { border: "1px solid black" } }>
            <Card.Body>
              <Card.Title>Premium</Card.Title>
              <h2>$100</h2>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Button type="submit">Buy Now</Button>{ ' ' }
            </Card.Body>

          </Card></CardGroup>

      </Container>

      <Container>
        <h4 style={ { color: 'blue' } }>About Us</h4>
        <Row>
          <img style={ { width: '500px', marginTop: '20px' } } src={ `aaa.jpg` } alt="logo" />
          <Col style={ { marginTop: '30px' } }> <p >Web design encompasses many different skills and disciplines in the production and maintenance of websites.
            The different areas of web design include web graphic design; user interface design;
            authoring, including standardised code and proprietary software; user experience design; and search engine</p>
            <p >Web design encompasses many different skills and disciplines in the production and maintenance of websites.
              The different areas of web design include web graphic design; user interface design;
              authoring, including standardised code and proprietary software; user experience design; and search engine</p>
          </Col>
        </Row>

      </Container>

      <Container>
        <h4 style={ { color: 'blue', marginTop: '20px' } }>Contact Us</h4>
        <Row>
          <Form>
            <Row>
              <Col>

                <img style={ { width: '500px' } } src={ `connn.webp` } alt="logo" />

              </Col>
              <Col>
                <Form.Control style={ { marginTop: '50px' } } placeholder=" Enter First name" />
                <Form.Control style={ { marginTop: '20px' } } placeholder="Enter Last name" />
                <Form.Control style={ { marginTop: '20px' } } placeholder="Enter Email Address" />
                <p style={ { marginTop: '10px' } }  >How We May Help You? </p> <textarea></textarea>
                <p><Button style={ { marginTop: '10px' } } variant="primary" type="submit">
                  Submit
                </Button></p>

              </Col>

            </Row>
          </Form>

        </Row>

      </Container>
      <Container>
        <footer>
          <Row>
            <Col>
              <h6> Presented by web design</h6>
            </Col>

            <Col><h6> Any Help?</h6></Col>
          </Row>


        </footer>
      </Container>
    </div>

  );
}

export default App;
