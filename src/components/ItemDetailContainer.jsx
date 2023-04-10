import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";



const ItemDetailContainer = () => {   
    const [info, setInfo] = useState([]); 
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
    


            return <ItemDetail datos={info}/>;
        
        }

export default ItemDetailContainer