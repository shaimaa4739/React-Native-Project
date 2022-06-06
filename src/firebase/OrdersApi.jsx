import { db } from './firebase-config';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const orderRef = collection(db, "orders")

export const getOrders = async ()=>{
    const data = await getDocs(orderRef);
    return(
        data.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        }))
    )
};
export const creatOrder = async (cart,totalPrice,totalQty)=>{
    await addDoc(orderRef,{cart:cart,totalPrice:totalPrice,totalQty:totalQty})
}