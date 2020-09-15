import React from 'react';
import {Navbar, NavDropdown,Nav} from 'react-bootstrap';
import './../index.css'

function NavBar() {
    return (
<Navbar expand="lg" variant="dark" id="menu" className="position-fixed container" >
  <Navbar.Brand style={{ fontSize: `200%` }} href="./Cuerpo#Imag" className="nombre"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="nombre">
    <Nav className="mr-auto" style={{ fontSize: `auto` }}>
      <Nav.Link href="./Cuerpo#Imag">Un mundo por descubrir</Nav.Link>
      <NavDropdown title="Proyectos">
          <div id="proyectos" style={{ fontSize: '160%'}}>
            <NavDropdown.Item href="./Proyectos#Podcast">Podcast</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Trabajo_en_equipo">Trabajo en Equipo</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Trabajo_Colaborativo">Trabajo Colaborativo</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Pagina_Documentacion">Pagina Documentacion</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Formulario">Forms</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Documents">Documentos</NavDropdown.Item>
          </div>
      </NavDropdown>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default NavBar