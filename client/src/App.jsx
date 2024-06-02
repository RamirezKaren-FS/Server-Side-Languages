import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({})
  const handleInput = (e) =>{
    const {name,value} =e.target;
    console.log('name', name)
    console.log('value', value)
    setFormData((prevData) =>({
    ...prevData,
    [name]: value,
    }))
    console.log("state", formData)
  }

  return (
    <>
      <form>
        <label>
          Name: <input type='text' name='name' onChange={handleInput}/>
        </label>
        <label>
          BirthYear: <input type='text' name='birthYear'onChange={handleInput}/>
        </label> 
        <label>
          Birthplace: <input type='text' name='birthplace'onChange={handleInput}/>
        </label>
        <label>
          Genre: <input type='text' name='genre'onChange={handleInput}/>
        </label>
      </form>
    </>
  )
}

export default App
