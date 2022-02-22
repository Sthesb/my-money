import { useContext } from "react";
// context
import { AuthContext } from "../Context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be inside a AuthContextProvider')
    }
    
    return context
}