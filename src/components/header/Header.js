import "./style.css";

function Header () {
    return ( 
        <header className="header">
            <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hello, my name is <em>ILYA</em></strong
                ><br />
                I am a Frontend and iOS developer
            </h1>
            <div className="header__text">
                <p>here you can find all the info about my projects</p>
            </div>
            <a
                href="https://github.com/poposhka1990"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                >My GitHub page</a
            >
            </div>
        </header>
     );
}

export default Header;