function ContactForm () {

    return (
        <section className="contact">
            <h2>Contactez-moi</h2>
            <form className="contact_form">
                <input type="text" name="name" placeholder="Votre nom" required />
                <input type="email" name="email" placeholder="Votre email" required />
                <textarea name="message" rows="5" placeholder="Votre message" required />
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )

}

export default ContactForm