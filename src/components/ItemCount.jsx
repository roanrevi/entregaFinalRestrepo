import { useContext,useState } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, nombre, cargo, horas, fecha,valor }) => {
    const [cart, setCart] = useContext(CartContext);
    const [contador, setContador] = useState(1); 

    const sumar = () => {
        if(contador<horas)
        {setContador(contador + 1)}
        ;
    };
    const restar = () => {
        if(contador >0)
        {setContador(contador - 1);}
        else{
            setContador(0)
        }
    };
    const adicionACart = () => {
        setCart((ItemActuales) => {
            const ItemEncontrado = ItemActuales.find((item) => item.id === id); 

            if (ItemEncontrado) {
                return ItemActuales.map((item) => {
                if (item.id === id) {
                    return { ...item, horas: item.horas + contador };
                } else {
                    return item;
                }
                });
            } else {
                return [...ItemActuales, { id, horas: contador, fecha, nombre, cargo, valor}];
            }
            });
        };
        console.log(cart)
        
    return (
        <>
        <div className='contador'> 
            <p>{contador}</p>
        </div>
        <div className='botons-add'>
            <button className="boton" onClick={restar}> - </button> 
            <div className="boton-adicionar">
                <button  onClick={adicionACart}> Agregar </button> 
            </div>
            <button className="boton" onClick={sumar}> + </button>            
            <br></br> 
        </div>

        </>
        );
    };
export default ItemCount; 