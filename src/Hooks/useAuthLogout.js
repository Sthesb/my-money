import {  useEffect, useState } from "react";

// context
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../Firebase/Config";

export const useAuthLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()

    const logout = async() => {
        setError(null)
        setIsPending(true)
        try {
            await projectAuth.signOut()
            // dispatch logout
            dispatch({ type: 'LOGOUT' })

            // update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
            

        }catch (err) {
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    },[])

    return { logout, error, isPending }
}