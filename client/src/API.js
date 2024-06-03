import axios from "axios";

const API = {}
const BASE_URL = "http://localhost:3000/api/v1/movies"

    API.createMovie = async (movie) =>{
        const response = await axios.post(BASE_URL, {movie: movie});
        console.log("data", response);
        return response.data;
    };
    
    API.fetchMovies = async () =>{
        const response = await axios.get(BASE_URL);
        return response.data;
    }

export default API;