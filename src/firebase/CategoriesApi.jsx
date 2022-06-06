import { db } from './firebase-config';
import { collection, getDocs, doc } from 'firebase/firestore';

const marketsCollectionRef = collection(db, "markets")
class CategoriesHandler {

    constructor(market_ID) {
        this.marketID = market_ID;
    }
    get MarketID() {
        return this.marketID;
    }
    set MarketID(market_ID) {
        this.marketID = market_ID;
    }

    // getAllMarketsCategories
    getCategories = async () => {
        let marketcategoryRef = collection(marketsCollectionRef, this.MarketID, "categories")
        const data = await getDocs(marketcategoryRef);
        return (
            data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
        )
    };
    getMarketLocation = async () => {
        let marketLocationRef = collection(marketsCollectionRef, this.MarketID, "market_location")
        const data = await getDocs(marketLocationRef);
        return (
            data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
        )
    };

    // newww function for work timess
    getMarketWorkTimes = async () => {
        let marketWorkTimesRef = collection(marketsCollectionRef, this.MarketID, "market_work_times")
        const data = await getDocs(marketWorkTimesRef);
        return (
            data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
        )
    };
}

export let categoriesHandler = new CategoriesHandler()
