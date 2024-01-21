import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function MenuBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-md-center menu">
      <Container>
        <Navbar.Brand href="#home">
          <img src={require('../../Assets/img/logo.jpeg')} width={'90px'} alt='Renacer' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Venta</Nav.Link>
            <Nav.Link href="#link">Renta</Nav.Link>
            <NavDropdown title="Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acceso</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Registro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Olvido su contraseña</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MenuBootstrap;