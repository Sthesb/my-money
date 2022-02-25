import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../Firebase/Config";

export const useCollection = (collection, _query) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // if we don't use a ref --> infinite loop in useEffect
    // _query is an array and is "different" on every function call
    const query = useRef(_query).current

    
    useEffect(()=>{
        let ref = projectFirestore.collection(collection)
        // check if quesry exits
        if(query){
            ref  = ref.where(...query)
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


    } , [collection, query])
    return { document, error}
}