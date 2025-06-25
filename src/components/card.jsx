import { Link } from "react-router-dom"

function Card ({cardImg, cardTitle, id}){

    return (
        <article className={`mainProjects_container_card`}>
            <Link className={`mainProjects_container_card_link`} to={`/project/${id}`}>
            <img className={`mainProjects_container_card_img`} src={cardImg} alt="image de la location"></img>
            <h2 className={`mainProjects_container_card_title`}>{cardTitle}</h2>
            </Link>
        </article>
    )

}

export default Card