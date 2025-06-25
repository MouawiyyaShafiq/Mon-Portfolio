import photoProfil from '../images/photo_de_profil.jpg';

function PageHome () {

    return (
        <>
            <section className="presentation">
                <div className="presentation_text">
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
                <div className="presentation_imgContainer">
                    <img className="presentation_imgContainer_img" src={photoProfil} alt='photo de profil'></img>
                </div>
            </section>
        </>
    )

}

export default PageHome