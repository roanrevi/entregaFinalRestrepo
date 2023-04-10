import React from 'react'
import Item from "./Item";
const ItemList = ({datos}) => {
    return (
        <div className='contenedor-cards'>
            {datos.map((dato)=>(                
                <Item 
                    key={dato.id}               
                    id={dato.id}
                    nombre={dato.NOMBRE}
                    cargo={dato.CARGO}
                    horas={dato.HORAS}
                    fecha={dato.FECHA}
                    valor={dato.VALOR}
                    imagen={dato.IMAGEN}
                />
                ))}
        </div>
        );
    };  

export default ItemList