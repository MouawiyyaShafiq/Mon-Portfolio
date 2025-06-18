import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"
import HousingAdHeader from "../components/housingAdHeader"
import Colapse from "../components/colapse"

function PageHousing () {
    const {currentAdId} = useParams()

    const [currentAd, setCurrentAd] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{

        //  Fonction permettant de récupérer la liste des annonces de logement depuis le fichier JSON et d'ensuite récupérer l'annonce exacte ouverte dépendant de l'ID //

        async function fetchData() {

            try {
                const response = await fetch("/adList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const adList = await response.json();

                const foundAd = adList.find((ad)=>ad.id==currentAdId)

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
        <>
        <Carousel page="Housing" carouselImgs={currentAd.pictures}/>
        <div className="housingAdInfo">
        <HousingAdHeader adTitle={currentAd.title} adLocation={currentAd.location} tagList={currentAd.tags} fullName={currentAd.host.name} rating={currentAd.rating} hostImage={currentAd.host.picture}/>
        <div className="housingAdColapses">
            <Colapse colapseTitle="Description" colapseContent={currentAd.description}/>
            <Colapse colapseTitle="Équipements" colapseContent={currentAd.equipments}/>    
        </div>
        </div>
        </>
    )}

}

export default PageHousing