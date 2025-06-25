import { Route, Routes } from "react-router-dom"
import PageHome from "./pages/pageHome"
import PageAbout from "./pages/pageProfil"
import PageProject from "./pages/pageProject"
import PageError from "./pages/pageError"
import PageWorks from "./pages/pageWorks"
import PageContact from "./pages/pageContact"

function Router (){
    return (
        <Routes>
            <Route path="/" element={<PageHome/>}></Route>
            <Route path="/works" element={<PageWorks/>}></Route>
            <Route path="/about" element={<PageAbout/>}></Route>
            <Route path="/contact" element={<PageContact/>}></Route>
            <Route path="/project/:currentProjectId" element={<PageProject/>}></Route>
            <Route path="*" element={<PageError/>}></Route>
        </Routes>
    )
}

export default Router