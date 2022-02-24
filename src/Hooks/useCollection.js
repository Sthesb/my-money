import { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/Config";

export const useCollection = (collection) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let ref = projectFirestore.collection(collection)
        
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


    } , [collection])
    return { document, error}
}