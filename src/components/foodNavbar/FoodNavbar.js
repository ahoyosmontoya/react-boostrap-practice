import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown  from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"


const FoodNavbar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#">Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Drinks</Nav.Link>
            <Nav.Link href="#">Deserts</Nav.Link>
            <Nav.Link href="#">Contact us</Nav.Link>
            <NavDropdown title="Locations" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Envigado</NavDropdown.Item>
              <NavDropdown.Item href="#">Sabaneta</NavDropdown.Item>
              <NavDropdown.Item href="#">Urrao</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Medellin</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Maps
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              arial-label="search"
            />
            <Button variant ="outline-success"> Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FoodNavbar;
