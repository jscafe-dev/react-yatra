import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {createPortal} from 'react-dom';
const Tooltip = (props) => {
    const {children, targetPositions} = props
    const {left, top, right, bottom} = targetPositions
    const tooltipRef = useRef(null)
    const [tooltipHeight, setTooltipHeight] = useState(0);

    let x = 0
    let y = 0

    let now = performance.now();
    while (performance.now() - now < 400) {
      // render blocking code
    }

    if (targetPositions !== null) {
        x = left
        y = top - tooltipHeight
        console.log("the height is", tooltipHeight)
        if (y < 0) {
            y = bottom
        }
    }

    useLayoutEffect(() => {
        const { height } = tooltipRef.current.getBoundingClientRect();
        setTooltipHeight(height)
        console.log("the height is inside effect", height)
    }, [])

    return createPortal(<div className="tooltip" ref={tooltipRef} style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}>
        {children}
    </div>, document.body)
}

export default Tooltip;