import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from "./Home";
import MarketPage from "./MarketPage";
import ProductsList2 from "./ProductsList2";

const RootDrawerNavigator = createDrawerNavigator({
    home: {
        screen: Home
    },
    MarketPage: {
        screen: MarketPage
    },
    products: {
        screen: ProductsList2
    }


})
export default createAppContainer(RootDrawerNavigator)