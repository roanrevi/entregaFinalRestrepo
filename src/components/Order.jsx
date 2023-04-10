import { useState} from "react";
import { collection, getFirestore, addDoc} from "firebase/firestore";


const Order = () => {
    const [orderId, setOrderId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [mail, setMail] = useState("");
    const db=getFirestore();
    const ordersCollection=collection(db, "orden");
    
    const order={nombre, mail, identificacion};
    const handleSubmit = (e)=>{ 
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
    };
    
    console.log(orderId)
return (
    <div>
                    <p>No de orden :{orderId}</p>
                    <form onSubmit={handleSubmit} className='formulario'>
                        <label htmlFor="">Nombre Completo</label>
                        <input className='nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/><br/>
                        <label htmlFor="">Identificación</label>
                        <input className='identificacion' type="text" onChange={(e)=>setIdentificacion(e.target.value)}/><br/>
                        <label htmlFor="">Correo electronico</label>
                        <input className='mail' type="email" onChange={(e)=>setMail(e.target.value)}/> <br/>
                        <button className='enviar-solicitud' type='submit'>Enviar</button>
                    </form>
                    
                </div>
)}


export default Order