import '../App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {useState, useEffect} from "react"

import Home from "./Home"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"
import MovieProfile from './MovieProfile';
import MovieSearch from './MovieSearch';
import MovieDropdown from './MovieDropdown';

function App() {

  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [formData, setFormData] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movieData => {
      setMovies(movieData);
      setOriginalMovies(movieData);
    })
  }, [])

  const filteredMovies = movies.filter(movie => {
    return movie.name.toUpperCase().includes(searchText.toUpperCase());
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function addMovie(event){
    event.preventDefault()

    fetch('http://localhost:3000/movies', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newMovie => setMovies([...movies, newMovie]))
  }

  function handleSort(event) {
    if(event.target.value === 'allMovies') {
      setMovies(originalMovies)
    }
    else if(event.target.value === 'alphaNorm') {
      const alphaNorm = [...movies].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
      setMovies(alphaNorm);
    }
    else if(event.target.value === 'alphaReverse') {
      const alphaReverse = [...movies].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1);
      setMovies(alphaReverse);
    }
  }

  const routes = [
    {
      path: "/",
      element: <Home/>,
      children: [
        {
          path: "/",
          element: <h1>Welcome to our Movie Database</h1>
        },
        {
          path: "/movies",
          element: <>
            <MovieSearch setSearchText={setSearchText} />
            <MovieDropdown handleSort={handleSort} />
            <MovieList movies={filteredMovies}/>
          </>
        },
        {
          path: "/add_movie",
          element: <MovieForm updateFormData={updateFormData} addMovie={addMovie}/>
        },
        {
          path: "/movies/:id",
          element: <MovieProfile movies={movies}/>
        }
      ]
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;