import { useState, useEffect } from "react"
import { projectAuth } from "../Firebase/Config"

import { useAuthContext } from "./useAuthContext"

export const useSignUp = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null);

    const { dispatch } = useAuthContext()

    const signup = async (displayName, email, password) => {
        setError(null);
        setIsPending(true);
        try{
            // sign user to firebase
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            if(!response){
                throw new Error('Could not complete signup')
            }

            // add display name to user profile
            await response.user.updateProfile({ displayName })

            // dispatch login action
            dispatch({ type: 'LOGIN', payload: response.user })


            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }catch(err){
            console.log(err)
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    },[])

    return { error, isPending, signup }
}