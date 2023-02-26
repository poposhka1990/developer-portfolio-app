import Header from "../components/header/Header";

function Home() {
    return (
        <>
        <Header/>

        <main className="section">
            <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>
                            JavaScript, ReactJS, Redux, HTML, CSS, MaterialUI,
                            StyledComponents
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">iOS</h2>
                        <p>Swift, UIKit, SwiftUI, MVC, FireBase, Realm</p>
                    </li>
                </ul>
            </div>
        </main>
        </> 
     );
}

export default Home;