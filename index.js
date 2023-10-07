const child1 = React.createElement('p', {}, "I am a child2")
const child2 = React.createElement('p', {}, "I am a child2")
const div = React.createElement('div', {className: 'text'}, [child1, child2])
// const div = <div className="text">hello 2</div>
console.log(div)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)