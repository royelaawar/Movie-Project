import NavBar from "./NavBar"
import audioFile from "./sound.mp3"
import Photos from "./Photos"

import {Outlet} from "react-router-dom"

function Home({ movies }){

    return <>
        <NavBar/>
        <Photos movies={movies}/> 
        <Outlet/>
        <audio  controls autoPlay preload="auto">
            <source src={audioFile} type="audio/mp3" />
        </audio>
    </>
}

export default Home