import { NavLink } from "react-router-dom"
import { easeInOut, motion,} from "framer-motion"
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "/images/logos/Portfolio_logo.svg";

function Header () {

    // Variantes et contrôles d'animation avec Framer Motion pour animer les éléments lors de leur apparition dans la fenêtre

    const headerVariants = {
        hidden: {opacity: 0, y: -20},
        visible: {opacity: 1, y: 0}
    };

    const svgVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0}
    };

    const navVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.1, delayChildren: 0.5 , ease: easeInOut}}
    };

    const navChildVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

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
    
        <motion.header className="header" ref={ref}
            variants={headerVariants}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.3, ease: easeInOut}}
        >
            <NavLink className="header_logoLink" to="/">
                <motion.img src={logo} alt="Portfolio logo"
                    variants={svgVariants}
                    animate={mainControls}
                    transition={{duration: 0.3, delay: 0.2, ease: easeInOut}}
                />
            </NavLink>
            <motion.nav className="header_nav"
                variants={navVariants}
                animate={mainControls}
                initial="hidden"
                transition={{duration: 0.3, ease: easeInOut}}
            >   
                <motion.div variants={navChildVariants}>
                    <NavLink className="header_nav_navLink" to="/" >Accueil</NavLink>
                </motion.div>
                <motion.div variants={navChildVariants}>
                    <NavLink className="header_nav_navLink" to="/works" >Réalisation</NavLink>
                </motion.div>
                <motion.div variants={navChildVariants}>
                    <NavLink className="header_nav_navLink" to="/profil" >Profil</NavLink>
                </motion.div>
                <motion.div variants={navChildVariants}>
                    <NavLink className="header_nav_navLink" to="/contact" >Contact</NavLink>
                </motion.div>
                
            </motion.nav >
        </motion.header>

    )

}

export default Header