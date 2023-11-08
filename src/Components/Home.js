import NavBar from "./NavBar"
import Photos from "./Photos"



import { Outlet } from "react-router-dom"

function Home({ movies }) {

    return (
        <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            zIndex: "- 1",
        }}
        >
            <NavBar />
            <Photos movies={movies} /> 
            <Outlet />
        </div>
    )
}

export default Home