import { createContext, useState, useEffect, } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    CategoriesMap : {},
});

export const CategoriesProvider = ({ children }) => {

    const [CategoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments();
            setCategoriesMap(categoryMap);
        }
    
        getCategoriesMap();
    }, []);

    const value = {CategoriesMap};

    return (
        <CategoriesContext.Provider value={value}> { children } </CategoriesContext.Provider>
    );
};