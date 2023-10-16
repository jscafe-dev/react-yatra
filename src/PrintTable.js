import React, {useMemo} from 'react';
const generateTable = (number) => {
    const arr = []
    let startTime = performance.now();
    while (performance.now() - startTime < 800) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
    for (let i = 1; i <= 10; i++) {
        arr.push(<div>{number * i}</div>)
    }
    return arr
}

const PrintTable =(props) => {
    const {num} = props
    const table = useMemo(() => generateTable(num), [num])
    console.log(table)
    return <>
        {table}
    </>
}

export default PrintTable;