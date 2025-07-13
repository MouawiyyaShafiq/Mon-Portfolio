import { useNavigate } from "react-router-dom"
import Colapse from "../components/colapse"
import PageContact from './pageContact'
import { useEffect, useState } from "react"
import { easeInOut, motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function PageAbout () {

    // Récupère la liste des outils depuis un fichier JSON et la stocke dans l’état.
    // En cas d’erreur ou si la liste est vide, redirige vers une page d’erreur.

    const navigate = useNavigate()
    const [tools, setTools] = useState(null)

    useEffect(()=>{
    
        async function fetchData() {

            try {
                const response = await fetch(`${import.meta.env.BASE_URL}usedTools.json`);
    
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

    // Variantes et contrôles d'animation avec Framer Motion pour animer les éléments lors de leur apparition dans la fenêtre
    
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
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const colapseContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.3, ease: easeInOut}}
    }

    const colapseVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: {duration: 0.3 , ease: easeInOut} },
    }


    const toolsContainerTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const toolsContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.2, ease: easeInOut,delayChildren: 0.6,}}
    }

    const toolVariants = {
        hidden: { opacity: 0, x: -20 },
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
                    colapseTitle="Formations"
                    colapseContent="J’ai récemment terminé une formation de développeur web de 9 mois à temps plein chez Openclassrooms, 
                    où j’ai acquis les compétences nécessaires pour concevoir et développer des sites et applications modernes. 
                    Avant cela, j’ai obtenu un DUT en Gestion des Entreprises et des Administrations, option gestion comptable 
                    et financière, ainsi qu’un bac scientifique. Ces parcours m’ont permis de développer à la fois des compétences 
                    techniques et une bonne capacité d’organisation."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Compétences techniques" 
                    colapseContent="Au cours de ma formation en développement web, j’ai appris à maîtriser HTML, CSS, JavaScript, React et RTK. 
                    Je travaille régulièrement avec des outils comme Git pour la gestion de versions et Sass pour le design des interfaces. 
                    J’ai réalisé plusieurs projets responsive intégrant des animations et des appels API, ce qui me permet de créer des expériences 
                    utilisateur modernes et dynamiques."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Compétences transversales" 
                    colapseContent="Je suis une personne rigoureuse et organisée, qui respecte ses engagements et sait gérer ses priorités. 
                    J’ai aussi une vraie curiosité qui me pousse à apprendre constamment de nouvelles choses et à améliorer mes méthodes de travail. 
                    Cette capacité d’adaptation me permet de rester efficace face aux différents défis rencontrés."
                    />
                </motion.div>
                <motion.div variants={colapseVariants}>
                    <Colapse 
                    colapseTitle="Expériences professionnelles" 
                    colapseContent="Avant de me tourner vers le développement, j’ai travaillé deux ans comme comptable. 
                    Cette expérience m’a appris la rigueur, la gestion des priorités et le sens du détail. Même si je suis débutant en développement, 
                    je peux m’appuyer sur ces qualités pour aborder mes projets avec sérieux et méthode."
                    />
                </motion.div>
                
            </motion.section>
            <section className="presentationTools" >
                <motion.h2 className="presentationTools_title"
                    variants={toolsContainerTitleVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay:0.5, ease: easeInOut}}
                >J'ai pu travailler avec</motion.h2>
                <motion.div className="presentationTools_container"
                    variants={toolsContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {tools.map((tool)=>{ 
                        return <motion.div key={tool.title} className="presentationTools_container_tool" variants={toolVariants}>
                            <img src={`${import.meta.env.BASE_URL}${tool.logo}`} alt="tool logo" style={{backgroundColor: tool.color, opacity : 0.9}}></img>
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