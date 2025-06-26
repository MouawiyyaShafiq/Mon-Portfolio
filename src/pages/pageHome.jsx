import { useEffect, useState } from 'react'
import photoProfil from '../images/photo_de_profil.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from "../components/card"
import PageContact from './pageContact'

function PageHome () {

    const navigate = useNavigate()
    const [mainProjects, setMainProjects] = useState(null)

    useEffect(()=>{
    
        async function fetchData() {

            try {
                const response = await fetch("/projectList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                }
    
                const projectList = await response.json();

                const foundMainProjects = projectList.filter((project)=>project.main=="yes")

                if(foundMainProjects){
                    setMainProjects(foundMainProjects) 
                } else{
                    navigate("*")
                }
            
            } catch (error) {
                navigate("*")
                console.error("Erreur lors de la récupération des données", error)
            }
    
            }
        
        fetchData()
        
        
    }, [])

    if(mainProjects){
        return (
        <>
            <section className="presentation">
                <div className="presentation_text">
                    <h2>À propos de moi</h2>
                    <p>
                        Je suis un jeune développeur web passionné, spécialisé dans le développement front-end. 
                        Au cours de ma formation, j’ai réalisé de nombreux projets concrets qui m’ont permis de consolider mes compétences en 
                        <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> et <strong>Redux Toolkit</strong>.
                    </p>
                    <p>
                        Je suis particulièrement sensible à l'ergonomie, au design web et à l'expérience utilisateur. 
                        J’aime créer des interfaces modernes, accessibles et centrées sur l’utilisateur.
                    </p>
                </div>
                <div className="presentation_imgContainer">
                    <img className="presentation_imgContainer_img" src={photoProfil} alt='photo de profil'></img>
                </div>
            </section>
            <section className="mainProjects">
                <h2 className="mainProjects_title">Réalisations marquantes</h2>
                <div className="mainProjects_container">
                    {mainProjects.map((project)=>{ return <Card key={project.id} cardImg={project.cover} cardTitle={project.title} id={project.id}/>})}
                </div>
                <NavLink className="mainProjects_link" to="/works">Voir toutes mes réalisations</NavLink>
            </section>
            <PageContact></PageContact>
        </>
        )
    }

}

export default PageHome