import React from 'react'
import CartWidget from './CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
    return (
        <>
        
        <Navbar bg="dark" variant="dark">
                <Container>
                <Link to ={"/"}><Logo/></Link>
                <Nav className="me-auto">
                            <Nav.Link href="/catalogo">Usuarios</Nav.Link>
                            <Navbar.Collapse className="justify-content-end me-auto">
                                <NavDropdown title="Cargos" id="basic-nav-dropdown">                                
                                <Link  to={`/cargo/${"AUXILIAR DE SERVICIOS GENERALES"}`}>
                                <NavDropdown.Item href="#action/3.3">Auxiliares de Aseo</NavDropdown.Item>
                                </Link > 
                                <Link  to={`/cargo/${"ASISTENTE ADMINISTRATIVO"}`}>
                                <NavDropdown.Item href="#action/3.2">Asistente Administrativo</NavDropdown.Item>
                                </Link >                                 
                                <Link  to={`/cargo/${"AUXILIAR DE ENFERMERIA"}`}>
                                <NavDropdown.Item href="#action/3.5">Auxiliares de enfermeria</NavDropdown.Item>
                                </Link > 
                                <Link  to={`/cargo/${"MEDICO GENERAL"}`}>
                                <NavDropdown.Item href="#action/3.8">Medicos</NavDropdown.Item>
                                </Link > 
                                
                                
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Nav>
                        <Link to ={"/cart"}><CartWidget /></Link>
                        
                        
                        
                </Container>
            
        </Navbar>
        </>
    );
}

export default ColorSchemesExample;