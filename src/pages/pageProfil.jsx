import { useNavigate } from "react-router-dom"
import Colapse from "../components/colapse"
import PageContact from './pageContact'
import { useEffect, useState } from "react"
import { easeInOut, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function PageAbout () {

    const navigate = useNavigate()
    const [tools, setTools] = useState(null)

    useEffect(()=>{
    
        async function fetchData() {

            try {
                const response = await fetch("/usedTools.json");
    
                if (!response) {
                    throw new Error(`${response.status}`);
                }
    
                const toolsList = await response.json();

                if(toolsList){
                    setTools(toolsList) 
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

    const { ref: refColapseContainer, inView : colapseContainerIsInView } = useInView({threshold : 0.3})
    const colapseContainerControls = useAnimation()

    useEffect(() => {
        if (colapseContainerIsInView ) {
        colapseContainerControls.start("visible")
        } else {
        colapseContainerControls.start("hidden")
        }
    }, [colapseContainerIsInView ]);


    const colapseContainerTitleVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }

    const colapseContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.3, ease: easeInOut}}
    }

    const colapseVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: {duration: 0.3 , ease: easeInOut} },
    }

    const { ref: refToolsContainer, inView : toolsContainerIsInView } = useInView({threshold : 0.3})
    const toolsContainerControls = useAnimation()

    useEffect(() => {
        if (toolsContainerIsInView ) {
        toolsContainerControls.start("visible")
        } else {
        toolsContainerControls.start("hidden")
        }
    }, [toolsContainerIsInView ]);


    const toolsContainerTitleVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }

    const toolsContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.2, ease: easeInOut,delayChildren: 0.6,}}
    }

    const toolVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: {duration: 0.2 , ease: easeInOut} },
    }


    if(tools){
        return (
        <>
            <motion.section className="colapseContainer" ref={refColapseContainer}
                variants={colapseContainerVariants}
                initial="hidden"
                animate={colapseContainerControls}
            >
                <motion.h2 className="colapseContainer_title"
                    variants={colapseContainerTitleVariants}
                    transition={{duration: 0.3, delay:0.2, ease: easeInOut}}
                >Mon profil</motion.h2>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Formation"
                    colapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                                    et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Compétences techniques" 
                    colapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Compétences transversales" 
                    colapseContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                    N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Expériences professionnelles" 
                    colapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                                    chaque logement correspond aux critères de sécurité établis par nos services. 
                                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </motion.div>
                
            </motion.section>
            <section className="presentationTools" ref={refToolsContainer}>
                <motion.h2 className="presentationTools_title"
                    variants={toolsContainerTitleVariants}
                    initial="hidden"
                    animate={toolsContainerControls}
                    transition={{duration: 0.3, delay:0.5, ease: easeInOut}}
                >J'ai pu travailler avec</motion.h2>
                <motion.div className="presentationTools_container"
                    variants={toolsContainerVariants}
                    initial="hidden"
                    animate={toolsContainerControls}
                >
                    {tools.map((tool)=>{ 
                        return <motion.div key={tool.title} className="presentationTools_container_tool" variants={toolVariants}>
                            <img src={tool.logo} alt="tool logo" style={{backgroundColor: tool.color, opacity : 0.9}}></img>
                            <h3>{tool.title}</h3>
                        </motion.div>})}
                </motion.div>
            </section>
            <PageContact></PageContact>
        </>
        
        )
    }

}

export default PageAbout