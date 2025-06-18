import { Route, Routes } from "react-router-dom"
import PageHome from "./pages/pageHome"
import PageAbout from "./pages/pageAbout"
import PageHousing from "./pages/pageHousing"
import PageError from "./pages/pageError"

function Router (){
    return (
        <Routes>
            <Route path="/" element={<PageHome/>}></Route>
            <Route path="/about" element={<PageAbout/>}></Route>
            <Route path="/housing/:currentAdId" element={<PageHousing/>}></Route>
            <Route path="*" element={<PageError/>}></Route>
        </Routes>
    )
}

export default Router