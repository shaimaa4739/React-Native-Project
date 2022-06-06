import { db } from './firebase-config';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';


    const  usersCollectionRef = collection(db, "users")

    // getUsers
    export const getUsers = async ()=> {
        const data = await getDocs(usersCollectionRef);
        return(
            data.docs.map((doc)=>({
                ...doc.data(),id:doc.id
            }))
        )
    };

    // addUsers
    export const creatUser = async (password,email,phone,fullname)=>{
        await addDoc(usersCollectionRef,{password:password,email:email,phone:phone,fullname:fullname})
    }

    // updateUsers
    const updateUser = async(id,password)=>{
    const userDoc = doc(db,"users",id)
    await updateDoc(userDoc,{password:password})
    }