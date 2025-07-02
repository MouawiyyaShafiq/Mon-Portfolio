import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/card"
import { useNavigate } from "react-router-dom"
import PageContact from './pageContact'
import { easeInOut, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function PageWorks () {

    const [projectList, setProjectList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        
        async function fetchData() {

            try {
                const response = await fetch(`${import.meta.env.BASE_URL}projectList.json`);

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

    const projectsTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const projectGalleryContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.3, ease: easeInOut}}
    }

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: {duration: 0.3 , ease: easeInOut} },
    }

    const {ref : refMainProjects, inView: projectsIsInView} = useInView()
    const projectsControls = useAnimation()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (projectsIsInView) {
            projectsControls.start("visible")
            } else {
            projectsControls.start("hidden")
            }
        }, 300);
    return () => clearTimeout(timer);
    }, [projectsIsInView]);

    return (
        <>
        <section className="projectGallery" id="mesTravaux" >
            <motion.h2 className="projectGallery_title"
                variants={projectsTitleVariants}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.3, delay:0.2, ease: easeInOut}}
            >Mes réalisations</motion.h2>
            <motion.div className="projectGallery_container" ref={refMainProjects}
                variants={projectGalleryContainerVariants}
                initial="hidden"
                animate={projectsControls}
            >
                {projectList.map((project)=>{ return <motion.div key={project.id} variants={cardVariants}>
                                                        <Card key={project.id} cardImg={project.cover} cardTitle={project.title} id={project.id}/>
                                                    </motion.div>})}
            </motion.div>
        </section>
        <PageContact></PageContact>
        </>
    )

}

export default PageWorks