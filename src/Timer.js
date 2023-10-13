import React, {useState, useEffect, useLayoutEffect} from 'react';
const Timer = (props) => {
    const {customText} = props
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("I am running setInterval")
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)
        console.log("creater interval with id ", interval)
        return () => {
            console.log("i was unmounted")
            console.log("removing interval with id ", interval)
            clearInterval(interval)
        }

    }, [])

    useEffect(() => {

        return () => {
            console.log("cleaning up 2nd effect for customText")
        }
    }, [customText])

    useEffect(() => {
        console.log("i am rendering again and again")

        return () => {
            console.log("cleaning up 3rd effect for customText")
        }
    })

    useLayoutEffect(() => {
        console.log("running useLayoutEffect")
    }, [])
    return <>
    <span>Current time is: {counter}</span>
    <br/>
    <span>{customText}</span>
    <br/>
    {/* <button onClick={startTimer}>Start Timer</button> */}
    </>
}

export default Timer;