import { createContext, useState, useEffect, } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data/shop-data.js';


export const ProductsContext = createContext({
    products : [],
});

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments();
            console.log(categoryMap);
        }

        getCategoriesMap();
    }, []);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = {products};

    return (
        <ProductsContext.Provider value={value}> { children } </ProductsContext.Provider>
    );
};