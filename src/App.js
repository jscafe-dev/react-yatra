import React, {useState} from 'react';
import Button from './Button'
import Text from './Text'

const App = () => {
    const [data, setData] = useState([
        {id: 'a', text: "text 0"},
        {id: 'b', text: "text 1"},
        {id: 'c', text: "text 2"},
        {id: 'd', text: "text 3"},
        {id: 'e', text: "text 4"},
    ])
    const addMoreData = () => {
        setData((prevData) => [{id: 'f', text: "text 5"}, ...prevData])
    }
    return <>
        {data.map((item, index) => <Text key={item.id}>{item.text}</Text>)}
        <Button clickAction={addMoreData}>Add more data</Button>
    </>
}

export default App