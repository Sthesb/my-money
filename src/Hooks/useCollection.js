import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../Firebase/Config";

export const useCollection = (collection, _query, _orderBy) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // if we don't use a ref --> infinite loop in useEffect
    // _query is an array and is "different" on every function call
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    
    useEffect(()=>{
        let ref = projectFirestore.collection(collection)

        // check if query exits
        if(query){
            ref  = ref.where(...query)
        }
        // if order query by exists
        if(orderBy){
            ref  = ref.orderBy(...orderBy)
        }

        const unsub =  ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            });
            // update state
            setDocument(results)
            setError(null)
        }, (err)=> {
            console.log(err.message);
            setError("could not fetch data ")
        })

        // unsubscribe on unmount
        return () => unsub()        
        

    } , [collection, query, orderBy])
    return { document, error}
}