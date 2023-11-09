import NavBar from "./NavBar"

// import VideoBackground from "./VideoBackground"
// import backgroundVideo from '../pop_corn_black_side.mp4';

import { Outlet } from "react-router-dom"

function Home() {
    return (
        
        <div
         style={{
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
            {/* <VideoBackground/> */}
            <Outlet />
        </div >
    )
}

export default Home