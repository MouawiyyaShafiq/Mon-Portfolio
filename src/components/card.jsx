import { Link } from "react-router-dom"

function Card ({page, cardImg, cardTitle, id}){

    return (
        <article className={`gallery${page}_card`}>
            <Link className={`gallery${page}_card_link`} to={`/housing/${id}`}>
            <img className={`gallery${page}_card_img`} src={cardImg} alt="image de la location"></img>
            <h2 className={`gallery${page}_card_title`}>{cardTitle}</h2>
            </Link>
        </article>
    )

}

export default Card