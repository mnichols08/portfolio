import Contact from './Contact/Contact.component';
import Skillset from './Skillset/Skillset.component';
import Coffee from './Coffee/Coffee.component';
import Projects from './Projects/Projects.component';
import AddtlInfo from './AddtlInfo/AddtlInfo.component';
import Certs from './Certs/Certs.component';
import './left-side.styles.css';
function LeftSide({resume}){
    return(
        <div className="left-side">
            <img src="img/flicker.jpg" alt="Mikey taking a photograph." className="snapshot" />
            <Contact telephone={resume.phone} email={resume.email} address={resume.address}/>
            <Coffee caption={resume.caption} email={resume.email}/>
            <Skillset skillset={resume.skillset}/>
            <Projects />     
            <AddtlInfo />
            <Certs /> 
        </div>
    )
}

export default LeftSide;