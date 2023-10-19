import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incByAmount } from './counterSlice'
import Button from './Button'
// import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'
import Heading from './Heading';
import Navbar from './Navbar';
import {ThemeContext} from './context'

const App = () => {
  const count = useSelector((state) => state.counter.counterValue)
  const dispatch = useDispatch()
    return <>
    {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incByAmount(5))}>Inc by amount</button>
    </>
}

export default App