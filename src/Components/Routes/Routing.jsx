import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Timeline from "../pages/Infopage/Infopage"


function Routing(){
    return (
        <>
            <Routes>
                <Route path="/"  element={<Home/>}></Route>
                <Route path="/info/:artist" element={<Timeline/>}></Route>
            </Routes>
        </>

        
    )
}

export default Routing