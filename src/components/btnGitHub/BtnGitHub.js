import "./style.css";
import gitHubIcon from "./gitHub-black.svg";

function BtnGitHub({ link }) {
    return ( 
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-outline">
        <img
            src={gitHubIcon}
            alt="github icon"
        />
        GitHub repo
    </a>
     );
}

export default BtnGitHub;