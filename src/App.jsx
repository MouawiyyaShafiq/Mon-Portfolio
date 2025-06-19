import { BrowserRouter} from "react-router-dom"
import Footer from "./layout/footer"
import Header from "./layout/header"
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
