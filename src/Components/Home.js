import NavBar from "./NavBar"
import Photos from "./Photos"

import {Outlet} from "react-router-dom"

function Home(){
    return <>
        <NavBar/>
        <Photos/>
        <Outlet/>
    </>
}

export default Home