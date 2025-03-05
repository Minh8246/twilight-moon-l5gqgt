import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home'
import '../src/GlobalStyles.css'
function App() {
  return (
    <>
      <Home />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
