import { easeInOut, motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

function pageContact () {

    const contactFormTitleVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    }

    const contactFormLeftVariants = {
        hidden: {opacity: 0, x: -75},
        visible: {opacity: 1, x: 0}
    }

    const contactFormRightVariants = {
        hidden: {opacity: 0, x: 75},
        visible: {opacity: 1, x: 0}
    }

    const {ref, inView} = useInView({threshold : 0.4})
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
        controls.start("visible")
        } else {
        controls.start("hidden")
        }
    }, [inView]);

    return (
        <section className="contact" ref={ref}>
            <motion.h2
                variants={contactFormTitleVariants}
                animate={controls}
                initial="hidden"
                transition={{duration: 0.3,delay : 0.2, ease: easeInOut}}
            >Contactez-moi</motion.h2>
            <form className="contact_form">
                <motion.input type="text" name="name" placeholder="Votre nom" required 
                    variants={contactFormLeftVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{duration: 0.3, delay : 0.2 , ease: easeInOut}}
                />
                <motion.input type="email" name="email" placeholder="Votre email" required 
                    variants={contactFormRightVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{duration: 0.3,delay : 0.5, ease: easeInOut}}
                />
                <motion.textarea name="message" rows="5" placeholder="Votre message" required 
                    variants={contactFormLeftVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{duration: 0.3, delay : 0.8, ease: easeInOut}}
                />
                <motion.button type="submit"
                    variants={contactFormRightVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{duration: 0.2, delay : 1, ease: easeInOut}}
                >Envoyer</motion.button>
            </form>
        </section>
    )

}

export default pageContact