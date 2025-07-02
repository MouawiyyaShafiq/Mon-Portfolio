import { Link } from "react-router-dom"

function Card ({cardImg, cardTitle, id}){

    return (
        <article className={`card`}>
            <Link className={`card_link`} to={`/project/${id}`}>
            <img className={`card_img`} src={`${import.meta.env.BASE_URL}${cardImg}`} alt="image du projet"></img>
            <h2 className={`card_title`}>{cardTitle}</h2>
            </Link>
        </article>
    )

}

export default Card