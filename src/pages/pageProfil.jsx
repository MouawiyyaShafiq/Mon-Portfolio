import Colapse from "../components/colapse"
import ContactForm from "../components/contactForm"
import photoProfil from '../images/photo_de_profil.jpg'

function PageAbout () {

    return (
        <>
            <section className="colapseContainer">
                <h2 className="colapseContainer_title">Mon profil</h2>
                <Colapse 
                colapseTitle="Formation"
                colapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                                et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Colapse 
                colapseTitle="Compétences techniques" 
                colapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."
                />
                <Colapse 
                colapseTitle="Compétences transversales" 
                colapseContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                                N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Colapse 
                colapseTitle="Expériences professionnelles" 
                colapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                                chaque logement correspond aux critères de sécurité établis par nos services. 
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
            <section className="presentationProfil">
                <div className="presentationProfil_text">
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
                </div>
                <div className="presentationProfil_imgContainer">
                    <img className="presentationProfil_imgContainer_img" src={photoProfil} alt='photo de profil'></img>
                </div>
            </section>
            <ContactForm></ContactForm>
        </>
        
    )

}

export default PageAbout