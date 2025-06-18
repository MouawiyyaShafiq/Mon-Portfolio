import { Link } from "react-router-dom"

function PageError () {

    return (

        <div className="pageErrorContainer">

            <h1 className="pageErrorContainer_title">404</h1>
            <p className="pageErrorContainer_text">Oups! La page que <br></br> vous demandez n'existe pas.</p>
            <Link to="/" className="pageErrorContainer_link">Retourner sur la page d’accueil</Link>

        </div>
    
    )

}

export default PageError