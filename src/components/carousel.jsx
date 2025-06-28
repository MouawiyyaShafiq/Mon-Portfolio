import { useState } from "react"
import arrowLeft from "../images/arrow_back.png"
import arrowRight from "../images/arrow_forward.png"


function Carousel ({carouselImgs}) {

    const [currentImg, setCurrentImg] = useState(0)

    function changeCurrentImg (direction) {

        if ( direction === -1) {

            let nextImg = currentImg-1

            if( nextImg === -1 ){
                nextImg = carouselImgs.length-1
            }
                
            setCurrentImg(nextImg)   

        } else {

            let nextImg = currentImg+1

            if( nextImg === carouselImgs.length ){
                nextImg = 0
            }
            
            setCurrentImg(nextImg)
        }

    }

    return (
        <>
            <section className={`carousel`}>
                <img className={`carousel_img`} src={carouselImgs[currentImg]} alt="Image illustrative de la location"></img>
                { carouselImgs.length <= 1 ? null :
                <>
                <div className={`carousel_arrows`} >
                    <img onClick={() => changeCurrentImg(-1)} className={`carousel_arrows_Left`} src={arrowLeft} alt="Flèche vers la gauche" ></img>
                    <img onClick={() => changeCurrentImg(+1)} className={`carousel_arrows_Right`} src={arrowRight} alt="Flèche vers la droite" ></img>
                </div>
                <p className={`carousel_imgCounter`}>{`${currentImg+1} / ${carouselImgs.length}`}</p>
                </>
                }
            </section>  
        </>
    )

}

export default Carousel