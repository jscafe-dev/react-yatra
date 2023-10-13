import React, {useState, useCallback, useEffect, useRef} from 'react';
import Button from './Button'
import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
const App = () => {
    let myLocal = 0
    console.log("myLocal", myLocal)
    const ref = useRef(0)
    const [myCount, setCount] = useState(0)
    console.log("ref.current", ref.current)

    const inputRef = useRef(null)

    return <>
      <button onClick={() => {myLocal+= 1}}>Change local variable</button>
      <button onClick={() => {ref.current += 1}}>Change ref</button>
      <button onClick={() => {setCount((prevCount) => prevCount + 1)}}>Change state</button>

      <div>
        <span>Local var: {myLocal}</span><br/>
        <span>ref: {ref.current}</span><br/>
        <span>state variable: {myCount}</span><br/>
      </div>

      <h4>Timer example</h4>
      <Timer>This is my timer</Timer>

      <h4>DOM example</h4>
      <Input ref={inputRef} />
      <button onClick={() => {
        console.log(inputRef.current.getBoundingClientRect())
        if (inputRef.current) inputRef.current.focus()
      }}>Focus the inputbox</button>
    </>
}

export default App