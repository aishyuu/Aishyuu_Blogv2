import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let PROJECT_ID = 'd7sbdpl5'
  let DATASET = 'production'
  let QUERY = encodeURIComponent('*[_type == "post"]')

  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

  useEffect(() => {
    fetch(URL).then((res) => res.json())
      .then((result) => console.log(result))
  }, [])

  return (
    <div className="App">
      <h1 className="text-3xl">Hello There</h1>
    </div>
  )
}

export default App
