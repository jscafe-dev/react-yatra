import React, {useState} from 'react';
import { createPortal } from 'react-dom';
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
    const [showModal, toggleModal] = useState(false);

    return <>
      Hey i am inside root <button onClick={() => toggleModal((prev) => !prev)}>Toggle Modal</button>

      {showModal && createPortal(<div>This is modal content</div>, document.body)}
      {/* {showModal && <div>This is modal content</div>} */}
    </>
}

export default App