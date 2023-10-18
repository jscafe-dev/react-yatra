import React, {memo, useContext} from 'react';
import { ThemeContext } from './context';
const Button = memo((props) => {
    const {children, clickAction} = props
    const [theme, setTheme] = useContext(ThemeContext)
    const handleClick = () => {
        clickAction?.()
        setTheme((prev) => {
            return prev === 'dark' ? 'light' : 'dark'
        })
    }
    return <button onClick={handleClick}>
        {children} {theme}
        </button>
})

export default Button;