import { createContext, useState } from "react";

export const UserContex = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {

    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser };

    return <UserContex.Provider value={value} >{ children }</UserContex.Provider>;
};