import React from 'react';
import Button from './Button'

const App = () => {
    const handleClickAction = () => {
        console.log("I was clicked from parent")
    }
    return <Button data={{a:{s: {d: 'c'}}}} clickAction={handleClickAction}>Click Me</Button>
}

export default App