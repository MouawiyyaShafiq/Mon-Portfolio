import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/card"
import { useNavigate } from "react-router-dom"

function PageWorks () {

    const [projectList, setProjectList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        
        async function fetchData() {

            try {
                const response = await fetch("/projectList.json");

                if (!response) {
                    throw new Error(`${response.status}`);
                  }

                const List = await response.json();

                setProjectList(List)

            } catch (error) {
                navigate("*")
                console.error("Erreur lors de la récupération des données", error)
            }

          }

        fetchData()
        
    }, [])

    return (
        <>
        <section className="projectGallery" id="mesTravaux">
            <h2 className="projectGallery_title">Mes réalisations</h2>
            <div className="projectGallery_container">
                {projectList.map((project)=>{ return <Card key={project.id} cardImg={project.cover} cardTitle={project.title} id={project.id}/>})}
            </div>
        </section>
        </>
    )

}

export default PageWorks