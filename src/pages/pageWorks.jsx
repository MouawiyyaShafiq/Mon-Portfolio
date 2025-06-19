import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/card"
import { useNavigate } from "react-router-dom"

function PageWorks () {

    const [housingAdList, setHousingAdList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{

        // Fonction permettant de récupérer la liste des annonces de logement depuis le fichier JSON //
        
        async function fetchData() {

            try {
                const response = await fetch("/adList.json");

                if (!response) {
                    throw new Error(`${response.status}`);
                  }

                const adList = await response.json();

                setHousingAdList(adList)

            } catch (error) {
                navigate("*")
                console.error("Erreur lors de la récupération des données", error)
            }

          }

        fetchData()
        
    }, [])

    return (
        <>
        <section className="galleryHome" id="mesTravaux">

            {housingAdList.map((ad)=>{ return <Card key={ad.id} page="Home" cardImg={ad.cover} cardTitle={ad.title} id={ad.id}/>})}
            
        </section>
        </>
    )

}

export default PageWorks