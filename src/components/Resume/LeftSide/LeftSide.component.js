import Contact from './Contact/Contact.component';
import Skillset from './Skillset/Skillset.component';
import Coffee from './Coffee/Coffee.component';
import Projects from './Projects/Projects.component';
import AddtlInfo from './AddtlInfo/AddtlInfo.component';
import Certs from './Certs/Certs.component';
import './left-side.styles.css';
function LeftSide({resume, github}){
    return(
        <div className="left-side">
            <img src={github.avatar_url} alt={`${github.login}'s avatar on github`} className="snapshot" />
            <Contact telephone={resume.phone} email={github.email || resume.email} address={github.location}/>
            <Coffee caption={github.bio} email={resume.email} message={resume.message}/>
            <Skillset skillset={resume.skillset}/>
            <Projects featured={resume.featured}/>     
            <AddtlInfo languages={resume.languages}/>
            <Certs certs={resume.certifications}/> 
        </div>
    )
}

export default LeftSide;