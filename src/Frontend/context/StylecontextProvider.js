import React, { createContext, useState } from "react";
import  Stylecontext  from "./Stylecontext";


export default function StyleContextProvider(props) {

    let [islight, setIslight] = useState(true);
    let [backgroungcolor, setBackgroundcolor] = useState('white');
    let [textcolor, setTextcolor] = useState('black');
    let [footerbackground, setFooterbackground] = useState('white');
    let [cardbackground, setCardbackground] = useState('white');
    let [insidecard, setinsidecard] = useState('white');
    let [btnbackground, setbtnbackground] = useState('blue');
    let [title, setTitle] = useState('#3E497A')
    let [header1,setHeader1]=useState("#404040")
    let [headerMarket,setheaderMarket]=useState("#262626")
    let [backgroundMarket,setbackgroundMarket]=useState("#f6f3fb")
    let changetheme = () => {
        if (islight) {
            // dark
            setTitle('white')
            setBackgroundcolor('black')
            setTextcolor('white')
            setFooterbackground('black');
            setCardbackground('black');
            setinsidecard('grey');
            setbtnbackground('black');
            setIslight(!islight)
            setHeader1("white")
            setheaderMarket("white")
            setbackgroundMarket("#262626")
        }
        else {
            setTitle('#3E497A')
            setBackgroundcolor('white');
            setTextcolor('black');
            setFooterbackground('white');
            setCardbackground('white');
            setinsidecard('white');
            setbtnbackground('blue');
            setIslight(!islight)
            setHeader1("#404040")
            setheaderMarket("#262626")
            setbackgroundMarket("#f6f3fb")
        }
    }
    return (
        <Stylecontext.Provider value={{
            backgroungcolor, title,
            textcolor, footerbackground, backgroundMarket,headerMarket,cardbackground, btnbackground, insidecard, changetheme, header1
        }}>
            {props.children}
        </Stylecontext.Provider>
    )
}