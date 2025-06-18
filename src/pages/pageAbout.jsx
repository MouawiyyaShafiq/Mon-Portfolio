import Banner from "../components/banner"
import bannerImg from "../images/paysage_foret_montagne.png"
import Colapse from "../components/colapse"

function PageAbout () {

    return (
        <>
            <Banner bannerImg={bannerImg} bannertitle1="" bannertitle2="" titleDisplay="none" imgScale="1"/>
            <section className="about_colapseContainer">
                <Colapse 
                colapseTitle="Fiabilité"
                colapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                                et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Colapse 
                colapseTitle="Respect" 
                colapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
                />
                <Colapse 
                colapseTitle="Service" 
                colapseContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Colapse 
                colapseTitle="Sécurité" 
                colapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                                chaque logement correspond aux critères de sécurité établis par nos services. 
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
        </>
        
    )

}

export default PageAbout