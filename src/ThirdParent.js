import React, { useState, memo, useCallback } from "react"

const ThirdParent = memo((props) => {
    const {handleChange} = props;
    const [counter, setCounter] = useState(0)

    let startTime = performance.now();
    while (performance.now() - startTime < 800) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
    const increment = useCallback(() => {
        setCounter((prev) => prev + 1)
        handleChange?.()
    }, [])
    return <>
        I am a super super slow component 
        <br/>
        {counter} <button onClick={increment}>Increment me</button>
    </>
})

export default ThirdParent;