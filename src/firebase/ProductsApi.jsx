import { db } from './firebase-config';
import { collection, getDocs, doc } from 'firebase/firestore';

const marketsCollectionRef = collection(db, "markets")
class ProductsHandler {

    constructor(market_ID) {
        this.marketID=market_ID;
    }
    get MarketID() {
        return this.marketID;
    }
    set MarketID(market_ID) {
        this.marketID = market_ID;
    }

    // getAllMarketsCategories
    getProducts= async ()=>{
    let productsRef = collection(marketsCollectionRef,this.MarketID,"products")
        const data = await getDocs(productsRef);
        return(
            data.docs.map((doc)=>({
                ...doc.data(),id:doc.id
            }))
        )
    };
}

export let productsHandler = new ProductsHandler()

