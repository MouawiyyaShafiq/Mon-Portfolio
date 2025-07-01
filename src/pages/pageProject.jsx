import { useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Carousel from "../components/carousel"
import ProjectHeader from "../components/projectHeader"
import Colapse from "../components/colapse"
import { useInView } from "react-intersection-observer"
import { useAnimation,motion, easeInOut } from "framer-motion"

function PageProject () {
    const {currentProjectId} = useParams()

    const [currentProject, setCurrentProject] = useState(null)
    const navigate = useNavigate()


    useEffect(()=>{

        //  Fonction permettant de récupérer la liste des annonces de logement depuis le fichier JSON et d'ensuite récupérer l'annonce exacte ouverte dépendant de l'ID //

        async function fetchData() {

            try {
                const response = await fetch("/projectList.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                  }
    
                const projectList = await response.json();

                const foundProject = projectList.find((ad)=>ad.id==currentProjectId)

                if(foundProject){
                    setCurrentProject(foundProject) 
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

    const {ref,inView}= useInView({threshold:0.4})
    const controls = useAnimation()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inView) {
            controls.start("visible")
            } else {
            controls.start("hidden")
            }
        }, 300);
    return () => clearTimeout(timer);
    }, [inView]);

    const projectLeftVariants = {
        hidden: {opacity: 0, x: -75},
        visible: {opacity: 1, x: 0}
    }

    if (currentProject) {

    return (
        <section className="project" ref={ref}>
            <motion.div
                variants={projectLeftVariants}
                initial="hidden"
                animate={controls}
                transition={{duration:0.3, delay: 0.2, ease :easeInOut}}
            >
                <Carousel carouselImgs={currentProject.pictures}/>
            </motion.div>
            <div className="project_info">
                <motion.div
                   variants={projectLeftVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{duration:0.3, delay: 0.4, ease :easeInOut}}  
                >
                    <ProjectHeader adTitle={currentProject.title} tagList={currentProject.tags}/>
                </motion.div>
                <motion.div className="project_colapses"
                    variants={projectLeftVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{duration:0.3, delay: 0.6, ease :easeInOut}} 
                >
                    <Colapse colapseTitle="Description" colapseContent={currentProject.description}/>
                    <Colapse colapseTitle="Compétences acquises" colapseContent={currentProject.skills}/>    
                </motion.div>
            </div>
            <motion.a className="project_link" href={currentProject.link} target="_blank"
                variants={projectLeftVariants}
                initial="hidden"
                animate={controls}
                transition={{duration:0.3, delay: 0.8, ease :easeInOut}}
            >Consulter le projet sur GitHub</motion.a>
            {currentProject.linkSite?
            <motion.a className="project_linkSite" href={currentProject.linkSite} target="_blank"
                variants={projectLeftVariants}
                initial="hidden"
                animate={controls}
                transition={{duration:0.3, delay: 1, ease :easeInOut}}
            >Démo en ligne via GitHub Pages</motion.a>  
            : null
            }
        </section>
    )}

}

export default PageProject