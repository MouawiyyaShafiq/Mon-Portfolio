import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"
import ProjectHeader from "../components/projectHeader"
import Colapse from "../components/colapse"

function PageProject () {
    const {currentProjectId} = useParams()

    const [currentAd, setCurrentAd] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{

        //  Fonction permettant de récupérer la liste des annonces de logement depuis le fichier JSON et d'ensuite récupérer l'annonce exacte ouverte dépendant de l'ID //

        async function fetchData() {

            try {
                const response = await fetch("/projectList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const adList = await response.json();

                const foundAd = adList.find((ad)=>ad.id==currentProjectId)

                if(foundAd){
                    setCurrentAd(foundAd) 
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

    if (currentAd) {

    return (
        <section className="project">
            <Carousel carouselImgs={currentAd.pictures}/>
            <div className="project_info">
                <ProjectHeader adTitle={currentAd.title} tagList={currentAd.tags}/>
                <div className="project_colapses">
                    <Colapse colapseTitle="Description" colapseContent={currentAd.description}/>
                    <Colapse colapseTitle="Compétences acquises" colapseContent={currentAd.equipments}/>    
                </div>
            </div>
        </section>
    )}

}

export default PageProject