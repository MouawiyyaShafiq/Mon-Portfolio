import { useState } from "react"
import { easeInOut, motion } from "framer-motion"


function Carousel ({carouselImgs}) {

    const arrowLeft = `${import.meta.env.BASE_URL}images/ui/arrow_back.png`
    const arrowRight = `${import.meta.env.BASE_URL}images/ui/arrow_forward.png`

    const [currentImg, setCurrentImg] = useState(0)

    // Change l'image actuelle du carrousel selon la direction donnée
    
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
                <motion.img className={`carousel_img`} src={`${import.meta.env.BASE_URL}${carouselImgs[currentImg]}`} alt="Image illustrative du projet"
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