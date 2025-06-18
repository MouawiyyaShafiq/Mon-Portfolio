import { BrowserRouter} from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Router from "./router"

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <main>
          <Router/>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
