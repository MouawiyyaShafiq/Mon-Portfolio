import { NavLink } from "react-router-dom"
import { easeInOut, motion, useAnimation} from "framer-motion"
import { useEffect,} from "react"
import { useInView } from "react-intersection-observer"
import logo from "../../public/images/logos/Portfolio_logo.svg";

function Footer () {

    const svgVariants = {
        hidden: {opacity: 0, x: -75},
        visible: {opacity: 1, x: 0}
    }

    const linksContainerVariants = {
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0}
    }

    const footerTextVariants = {
        hidden: {opacity: 0, x: 100},
        visible: {opacity: 1, x: 0}
    }

    const {ref, inView} = useInView({ threshold: 0.2})
    const mainControls = useAnimation()

    useEffect(() => {
        if (inView) {
        mainControls.start("visible")
        } else {
        mainControls.start("hidden")
        }
    }, [inView]);

    return (
        
        <footer className="footer" ref={ref}>
            <div className="footer_logoLinks">
                <NavLink className="footer_logoLinks_logoLink" to="/">
                    <motion.img src={logo} alt="Portfolio logo"
                        variants={svgVariants}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.3 , ease: easeInOut}}
                    />
                </NavLink>
                <motion.div className="footer_logoLinks_socialLinks"
                    variants={linksContainerVariants}
                    animate={mainControls}
                    transition={{duration: 0.3, delay: 0.2 , ease: easeInOut}}
                >
                    <motion.a href="mailto:mouawiyya.sh@hotmail.com" className="footer_logoLinks_socialLinks_link">
                        <i className="fas fa-envelope"></i>
                    </motion.a>
                    <motion.a href="https://github.com/MouawiyyaShafiq" className="footer_logoLinks_socialLinks_link" target="_blank">
                        <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/mouawiyya-s-544858199" className="footer_logoLinks_socialLinks_link" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </motion.a>
                </motion.div>
            </div>
            <motion.p className="footer_text"
                variants={footerTextVariants}
                animate={mainControls}
                transition={{duration: 0.3, delay: 0.3 , ease: easeInOut}}
            >© 2025 Mouawiyya SHAFIQ , Tous droits réservés.</motion.p>
        </footer>

    )

}

export default Footer