import { createContext, useState, useEffect, } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from '../shop-data/shop-data.js';


export const CategoriesContext = createContext({
    CategoriesMap : {},
});

export const CategoriesProvider = ({ children }) => {

    const [CategoriesMap, setCategoriesMap] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = {CategoriesMap};

    return (
        <CategoriesContext.Provider value={value}> { children } </CategoriesContext.Provider>
    );
};