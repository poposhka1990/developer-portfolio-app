function Contacts() {
    return ( 
        <main className="section">
        <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Petrozavodsk, Russia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79535419427">+7 (953) 541-94-27</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p>
                        <a href="mailto:popovemail1990@gmail.com"
                            >popovemail1990@gmail.com</a
                        >
                    </p>
                </li>
            </ul>
        </div>
    </main>
     );
}

export default Contacts;