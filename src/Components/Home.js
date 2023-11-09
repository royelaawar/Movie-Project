import NavBar from "./NavBar"
import Photos from "./Photos"
// import VideoBackground from "./VideoBackground"
// import backgroundVideo from '../pop_corn_black_side.mp4';

import { Outlet } from "react-router-dom"

function Home({movies}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
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
            <Photos movies={movies} />
            <Outlet />
        </div >
    )
}

export default Home