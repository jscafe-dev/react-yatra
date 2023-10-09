import React, {memo} from 'react';

const Button = memo((props) => {
    console.log("rendering Button")
    const {children, clickAction, data} = props
    const handleClick = () => {
        clickAction?.()
    }
    return <button onClick={handleClick}>
        {children}
        + 
        {data?.a?.b?.c}
        </button>
})

export default Button;