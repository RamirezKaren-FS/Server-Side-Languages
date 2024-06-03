import { useEffect, useState } from 'react'
import './App.css'
import API from './API'

function App() {
  const [formData, setFormData] = useState({});
  const [movies, setMovies]= useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
    try {
      const response = await API.fetchMovies();
      console.log("response", response);
      setMovies(response.data);
    }     
    catch (error) {
  
    }
    fetchData();
    }
  }, []);

  const handleInput = (e) =>{
    const { name,value }= e.target;
    console.log('name', name);
    console.log('value', value);
    setFormData((data) =>({
    ...data,
    [name]: value,
    }))
  };

  const handleSumbit = async (e) =>{
    e.preventDefault();
    console.log("State", formData);
    const response = await API.createMovie(formData);
    console.log(response.data);
    setMovies([...movies, response.data]);
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>
          Name: <input type='text' name='name' onChange={handleInput}/>
        </label>
        <label>
          Date Released: <input type='text' name='dateReleased'onChange={handleInput}/>
        </label> 
        <label>
          Duration: <input type='text' name='duration'onChange={handleInput}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h3>Movie List</h3>
          <ul>
            {movies.map((movie) =>(
              <li key={movie._id}>
                <h4>{movie.name}</h4>
                <p>{movie.dateReleased}</p>
                <p>{movie.duration}</p>
              </li>
            ))}
            
          </ul>
        
      </div>
    </>
  )
}

export default App;
