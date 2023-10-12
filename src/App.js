import React, {useState, useCallback, useEffect} from 'react';
import Button from './Button'
import Text from './Text'
import Timer from './Timer'
const App = () => {
    const [showTimer, toggleTimer] = useState(true)
    return <>
    {showTimer && <Timer customText="this is a good clock"/>}
    <button onClick={() => toggleTimer(!showTimer)}>Toggle Timer from app</button>
    </>
}

export default App