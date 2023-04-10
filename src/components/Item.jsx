import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item=({id, nombre, cargo, fecha, imagen}) =>{
    return (
        <div key={id} className="contenedor-item">
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imagen} className='imagen'/>
            <Card.Body>
                <Card.Title className='card-nombre' >NOMBRE:<br/>
                {nombre}</Card.Title>
                <Button variant="primary" className='boton-card'>
                    <Link to={`/item/${id}`}>DETALLES</Link> 
                    
                </Button>
            </Card.Body>
            </Card>
        </div>
    );
}

export default Item;