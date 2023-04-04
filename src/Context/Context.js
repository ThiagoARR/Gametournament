import { createContext, useState } from "react";

const ContextManipulation = createContext({});

export const Context = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false);
    return (
        <ContextManipulation.Provider value={{ userLogged, setUserLogged}}>
            {children}
        </ContextManipulation.Provider>
    )
}

export default ContextManipulation;