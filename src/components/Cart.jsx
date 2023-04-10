import React from 'react'
import {useState,useContext} from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import {collection, getFirestore, addDoc } from 'firebase/firestore';
const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [ordenId, setOrdenId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [mail, setMail] = useState("");
    const db=getFirestore();
    const ordersCollection=collection(db, "orden");
    const orden={nombre, mail, identificacion};
    const handleSubmit= (e)=>{ 
        e.preventDefault()
            if (cart==[] ) {
            }  
            if (nombre === "") { 
                swal("Ingresa tu nombre completo");
                }
            else if(identificacion === "" ){
                swal("Ingresa tu identificación");
                    }
            else if(mail === ""){
                swal("Ingresa tu correo electronico");    
            }
            else{ addDoc(ordersCollection, orden).then(({id}) => setOrdenId(id));
                swal("Su orden ha sido procesada con exito, su ID para rastrear el servicio es el: " + ordenId)                
            } 
        };

    let acumulado=0;
    

    return (   
        <>
        
            {cart.map((compra) => {
                
                return ( 
                    <div key={compra.id}>                   
                    <div className="contenedor-item-compra">                    
                        <Card style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title className='card-nombre' >Cargo: 
                                {compra.cargo}<br/>
                                </Card.Title>
                                <Card.Title className='card-nombre' >Horas requeridas: 
                                {compra.horas}<br/>
                                </Card.Title>
                                <Card.Title className='card-nombre' >Valor de la compra: $
                                {compra.horas*compra.valor}<br/>
                                </Card.Title>

                                <Button variant="primary" className='boton-card-compra' onClick={() => console.log(compra)}
                                >
                                Eliminar Compra
                                </Button>
                            </Card.Body>                            
                        </Card>   
                        
                    </div>
                    <div>{
                    }</div>
                    </div>
                );
            })};
        
        {   
            cart.forEach(element => {
            acumulado += (element.valor*element.horas);
            })}
            {cart.length >0?(
                <div>
                    <p className='total-compra'>Total Compra: ${acumulado}</p>
                    <form onSubmit={handleSubmit} className='formulario'>
                        <label htmlFor="">Nombre Completo</label>
                        <input className='nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/><br/>
                        <label
                        htmlFor="">Idetificacion</label>
                        <input className='identificacion' type="number" onChange={(e)=>setIdentificacion(e.target.value)}/><br/>
                        <label htmlFor="">Correo electronico</label>
                        <input className='mail' type="email" onChange={(e)=>setMail(e.target.value)}/> <br/>
                        <button className='enviar-solicitud' type='submit' >Enviar</button>
                        
                    </form>
                    <p>Tu orden de servicio es : {ordenId}</p>
                    <div className='regresar'>
                        <a href='/catalogo'>Regresar a escoger más servicios</a>
                    </div>
                    
                    
                </div>
                    )
                :(<p className='cart-mensaje'>Hola, no has escogido a nadie para que te ayude en tu labor, escoge a los profesionales que te pueden ayudar a llevar a cabo esa gran labor que requieres.</p>)
            } 
        </>
        
    )

}

export default Cart