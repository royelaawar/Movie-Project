// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import '../App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {useState, useEffect} from "react"

import Home from "./Home"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"

function App() {

  const [movies, setMovies] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movieData => setMovies(movieData))
  }, [])

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
          element: <MovieList movies={movies}/>
        },
        {
          path: "/add_movie",
          element: <MovieForm updateFormData={updateFormData} addMovie={addMovie}/>
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
