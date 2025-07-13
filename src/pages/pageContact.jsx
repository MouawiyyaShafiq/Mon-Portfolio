import { easeInOut, motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer"
import emailjs from '@emailjs/browser'

function pageContact() {

    // Variantes et contrôles d'animation avec Framer Motion pour animer les éléments lors de leur apparition dans la fenêtre

    const contactFormTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    }

    const contactFormLeftVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    const contactFormRightVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    }

    const { ref, inView } = useInView({ threshold: 0.4 })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [inView]);

    // Gestion de l'envoi du formulaire avec EmailJS : envoie l'email, affiche le succès ou l'échec, et réinitialise le formulaire après envoi

    const formRef = useRef()
    const [emailSent, setEmailSent] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_d3grava',
                'template_ysqka6b',
                formRef.current,
                'IkjYoNRJdBPuLeK5E'
            )
            .then(() => {
                setEmailSent(true)
                formRef.current.reset()
            })
            .catch((error) => {
                setEmailSent(false)
            })
    }

    return (
        <section className="contact" ref={ref}>
            <motion.h2
                variants={contactFormTitleVariants}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.3, delay: 0.2, ease: easeInOut }}
            >Contactez-moi</motion.h2>
            <form className="contact_form" ref={formRef} onSubmit={handleSubmit}>
                <motion.input type="text" name="name" placeholder="Votre nom" required
                    variants={contactFormLeftVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3, delay: 0.2, ease: easeInOut }}
                />
                <motion.input type="email" name="email" placeholder="Votre email" required
                    variants={contactFormRightVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3, delay: 0.5, ease: easeInOut }}
                />
                <motion.textarea name="message" rows="5" placeholder="Votre message" required
                    variants={contactFormLeftVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3, delay: 0.8, ease: easeInOut }}
                />
                <motion.button type="submit"
                    variants={contactFormRightVariants}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.2, delay: 1, ease: easeInOut }}
                >Envoyer</motion.button>
                {emailSent === true ?
                    <motion.div className="contact_form_messageBox" style={{ backgroundColor: "#27ae60" }}
                        variants={contactFormLeftVariants}
                        animate="visible"
                        initial="hidden"
                        transition={{ duration: 0.2, delay: 0.2, ease: easeInOut }}
                    >Message envoyé avec succès !</motion.div>
                    : null
                }

                {emailSent === false ?
                    <motion.div className="contact_form_messageBox" style={{ backgroundColor: "#e74c3c" }}
                        variants={contactFormLeftVariants}
                        animate="visible"
                        initial="hidden"
                        transition={{ duration: 0.2, delay: 0.2, ease: easeInOut }}
                    >Une erreur est survenue, veuillez réessayer.</motion.div>
                    : null
                }
            </form>
        </section>
    )

}

export default pageContact