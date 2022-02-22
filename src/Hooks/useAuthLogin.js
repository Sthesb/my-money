import {  useEffect, useState } from "react";

// context
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../Firebase/Config";
import { useHistory } from "react-router-dom";

export const useAuthLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()
    const history = useHistory();
    

    const login = async(email, password) => {
        setError(null)
        setIsPending(true)
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            // dispatch loggin
            dispatch({ type: 'LOGIN', payload: res.user })

            // update state
            if(!isCancelled){
                setIsPending(false)
                setError(null)
                history.push('/')
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

    return { login, error, isPending }
}