import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Card from "../components/card"
import PageContact from './pageContact'
import { easeInOut, motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function PageHome () {

    // Récupère la liste des projets depuis un fichier JSON, filtre les projets principaux et les stocke dans l’état.
    // En cas d’erreur ou si aucun projet principal n’est trouvé, redirige vers une page d’erreur.

    const navigate = useNavigate()
    const [mainProjects, setMainProjects] = useState(null)

    useEffect(()=>{
    
        async function fetchData() {

            try {
                const response = await fetch(`${import.meta.env.BASE_URL}projectList.json`);
    
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

    // Variantes et contrôles d'animation avec Framer Motion pour animer les éléments lors de leur apparition dans la fenêtre

    const presentationTextVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    }

    const presentationIMGVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    }

    const {ref : refPresentation, inView: presentationIsInView} = useInView({ threshold: 0.2})
    const presentationControls = useAnimation()

    useEffect(() => {
        if (presentationIsInView) {
        presentationControls.start("visible")
        } else {
        presentationControls.start("hidden")
        }
    }, [presentationIsInView]);


    const mainProjectsTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const mainProjectsCardContainerVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.3 , ease: easeInOut}}
    }

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: {duration: 0.3 , ease: easeInOut} },
    }

    const mainProjectsLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0},
    }

    const {ref : refMainProjects, inView: mainProjectsIsInView} = useInView({ threshold: 0.4})
    const mainProjectsControls = useAnimation()

    useEffect(() => {
        if (mainProjectsIsInView) {
        mainProjectsControls.start("visible")
        } else {
        mainProjectsControls.start("hidden")
        }
    }, [mainProjectsIsInView]);


    if(mainProjects){
        return (
        <>
            <section className="presentation" ref={refPresentation}>
                <motion.div className="presentation_text"
                    variants={presentationTextVariants}
                    initial="hidden"
                    animate={presentationControls}
                    transition={{duration: 0.4, ease: easeInOut}}
                >
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
                    <NavLink className="presentation_text_link" to="/profil">En savoir plus</NavLink>
                </motion.div>
                <motion.div className="presentation_imgContainer"
                    variants={presentationIMGVariants}
                    initial="hidden"
                    animate={presentationControls}
                    transition={{duration: 0.4, ease: easeInOut}}
                >
                    <img className="presentation_imgContainer_img" src={`${import.meta.env.BASE_URL}images/ui/photo_de_profil.jpg`} alt='photo de profil'></img>
                </motion.div>
            </section>
            <section className="mainProjects" >
                <motion.h2 variants={mainProjectsTitleVariants} initial="hidden" animate="visible" transition={{duration: 0.4, delay: 0.2, ease: easeInOut}} className="mainProjects_title">Réalisations marquantes</motion.h2>
                <motion.div className="mainProjects_container" ref={refMainProjects}
                    variants={mainProjectsCardContainerVariants}
                    initial="hidden"
                    animate={mainProjectsControls}
                >
                    {mainProjects.map((project)=>{ 
                        return <motion.div key={project.id} variants={cardVariants}>
                                    <Card key={project.id} cardImg={project.cover} cardTitle={project.title} id={project.id}/>
                                </motion.div>})}
                </motion.div>
                <motion.div 
                    variants={mainProjectsLinkVariants}
                    initial="hidden"
                    animate={mainProjectsControls}
                    transition={{duration: 0.4, ease: easeInOut}}
                >
                    <NavLink className="mainProjects_link" to="/works">Voir toutes mes réalisations</NavLink>
                </motion.div>
            </section>
            <PageContact></PageContact>
        </>
        )
    }

}

export default PageHome