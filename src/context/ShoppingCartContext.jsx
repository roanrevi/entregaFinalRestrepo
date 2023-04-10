import { useState,  createContext} from "react";
export const CartContext=createContext(null);
export const ShoppingCartProvider= ({children}) => {
        const [cart, setCart]=useState([]);
        const retirarDeCart = () => {
            setCart((retirarElem) => {
                const EncontrarElem = retirarElem.filter((Elem) => Elem.id === id);
                console.log(Elem)
                if (EncontrarElem) {
                    return retirarElem.map((Elem) => {
                    if (Elem.id === id) {
                        return { ...Elem, horas: Elem.horas - contador };
                    } else {
                        return Elem;
                    }
                    });
                } else {
                    return [...ElemActuales, { id, horas: contador, fecha, nombre, cargo, valor}];
                }
                });
            };
    return (
        <CartContext.Provider value={[cart, setCart,retirarDeCart]}>{children}</ CartContext.Provider>
    );
};
