import { db } from './firebase-config';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';


const marketsCollectionRef = collection(db, "markets")

    // getAllMarkets
    export const getMarkets = async ()=>{
        const data = await getDocs(marketsCollectionRef);
        return(
            data.docs.map((doc)=>({
                ...doc.data(),id:doc.id
            }))
        )
    };

    