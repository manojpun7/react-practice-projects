import React, { useEffect } from 'react'
import { useState } from 'react'
function useCustomHooks(key, defaultValue) {
    const [value, setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

        }
        catch(error){
            currentValue= defaultValue;
        }
        return currentValue;
    })


    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    }, [key , value])

    return [value , setValue]
}
export default useCustomHooks
