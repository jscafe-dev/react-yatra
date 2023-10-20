import React, {useEffect, useState} from 'react';

const App = () => {
  const [photos, setPhotos] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json()
      console.log(data)
      setPhotos(data)
    }

    fetchData()
  }, [])
    return <>
      <h2>Welcome to gallery</h2>

      {photos && photos?.length ? photos.map((pic) => <img key={pic?.id} loading='lazy' height={200} width={200} src={pic?.url} alt={pic?.title}/>) : <span>Loading Images</span>}
    </>
}

export default App