import Tag from "./tag"
import emptyStar from "../images/empty_star.png"
import fullStar from "../images/full_star.png"


function HousingAdHeader ({adTitle,adLocation,tagList,fullName,rating,hostImage}) {

    let firstName = "No Firstname"
    let lastName = "No Lastname"

    // IF permettant de split le nom entier en prénom et nom //

    if(fullName) {
        let nameParts = fullName.split(" ");
        firstName == "" ? null : firstName = nameParts[0]
        lastName == "" ? null : lastName = nameParts.slice(1).join(" ")
    }
    
    return (

        <div className="housingAdHeader">
            
            <div className="housingAdHeader_titleAndTags">
                <div className="housingAdHeader_titleAndTags_title"> 
                    <h1>{!adTitle ? "No title" : `${adTitle}` }</h1>
                    <p>{!adLocation ? "location unknown" : `${adLocation}` }</p> 
                </div>
                <div className="housingAdHeader_titleAndTags_tags">
                    {!tagList 
                        ? 
                        <Tag tagContent="No tags"/> 
                        :
                        tagList.map((tag)=>{
                        return <Tag key={tag} tagContent={`${tag}`}/>
                        })
                    }
                </div>
            </div>
            <div className="housingAdHeader_hostAndRating">
                <div className="housingAdHeader_hostAndRating_host">
                    <div className="housingAdHeader_hostAndRating_host_name">
                    <span>{`${firstName}`}</span>
                    <span>{`${lastName}`}</span>
                    </div> 
                    <div 
                        className="housingAdHeader_hostAndRating_host_img"
                        style={{backgroundImage: `url(${hostImage})`}}
                    >
                    </div>
                </div>
                <div className="housingAdHeader_hostAndRating_Rating">
                    
                    {rating < 1 ? <img src={emptyStar}></img> : <img src={fullStar}></img>}
                    {rating < 2 ? <img src={emptyStar}></img> : <img src={fullStar}></img>}
                    {rating < 3 ? <img src={emptyStar}></img> : <img src={fullStar}></img>}
                    {rating < 4 ? <img src={emptyStar}></img> : <img src={fullStar}></img>}
                    {rating < 5 ? <img src={emptyStar}></img> : <img src={fullStar}></img>}
                     
                </div>
                
            </div>

            
        </div>

    )

}

export default HousingAdHeader