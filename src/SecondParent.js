import React, { useCallback } from 'react';
import ThirdParent from './ThirdParent';
const SecondParent = () => {
    const myFunction = useCallback(() => {
        console.log("my function called")
    }, [])
    const handleChange = useCallback(() => {
        console.log("hey hey haha")
        myFunction()
    }, [myFunction])

    return <>
        I am second parent
        <br/>
        <ThirdParent handleChange={handleChange}/>
    </>
}

export default SecondParent;

