import { HashRouter } from "react-router-dom"
import Footer from "./layout/footer"
import Header from "./layout/header"
import Router from "./router"

function App() {

  return (
    <HashRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
