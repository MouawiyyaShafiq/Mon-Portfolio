import { useState } from "react"
import arrowLeft from "/images/ui/arrow_back.png"
import arrowRight from "/images/ui/arrow_forward.png"
import { easeInOut, motion } from "framer-motion"


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
                <motion.img className={`carousel_img`} src={carouselImgs[currentImg]} alt="Image illustrative de la location"
                    key={currentImg}
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1,}}
                    transition={{ duration: 0.5 , ease : easeInOut }}
                ></motion.img>
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