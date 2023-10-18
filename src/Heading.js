import React from 'react';

import Text from './Text'
const Heading = (props) => {
    const {headingText} = props
    console.log("heading re-render")
    return <>
        hey I am heading component
        <Text externalData={headingText}>Hey i am text component</Text>
    </>
}


export default Heading