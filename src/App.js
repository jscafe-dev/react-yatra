import React, {useState} from 'react';
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
    const [theme, setTheme] = useState('dark');

    return <ThemeContext.Provider value={[theme, setTheme]}>
          <Navbar/>
          <Heading/>
    </ThemeContext.Provider>
}

export default App