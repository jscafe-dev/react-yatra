import React, {forwardRef } from 'react';
const Input = forwardRef((props, ref) => {
    console.log("input box props are: ", props)
    return <input ref={ref} type="text"/>
})

export default Input