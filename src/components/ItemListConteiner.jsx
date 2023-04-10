import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListConteiner = ({greeting}) => {
    const [info, setInfo] = useState([]); 
    const { cargo } = useParams();
    useEffect(() => {
        const db = getFirestore();
        
        const infoCollection = collection(db, "personal");
        
        getDocs(infoCollection).then((querySnapshot) => {
            const personas = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,            
            }));
            
            setInfo(personas);  
            
        });
    }, []);
    
    
            const persFilter=info.filter((dato)=>dato.CARGO===cargo);

    return (        
        <>        
            <p>{greeting}</p>
            {
                <div >
                    {cargo?<ItemList datos={persFilter}/> :  <ItemList datos={info}/>}
                </div>                 
            }
        </>
    )
}



export default ItemListConteiner;