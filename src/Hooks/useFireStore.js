import { useReducer, useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/Config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        
        default:
            return state
    }
} 

export const useFireStore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled ] = useState(false)
    
    // collection reference
    const reference = projectFirestore.collection(collection);
    // add document
    const addDocument = (formData) => {

    }

    // delete document
    const deleteDocument = (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, deleteDocument, response }
}