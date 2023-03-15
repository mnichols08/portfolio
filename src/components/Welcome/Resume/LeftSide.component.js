import Contact from './Contact.component';
import Skillset from './Skillset.component';
import Coffee from './Coffee.component';
import Projects from './Projects.component';
import AddtlInfo from './AddtlInfo.component';
import Certs from './Certs.component';
import './left-side.styles.css';
function LeftSide(){
    return(
        <div className="left-side">
            <img src="img/flicker.jpg" alt="Mikey taking a photograph." className="snapshot" />
            <Contact />
            <Coffee email='mnix@journeytocode.io'/>
            <Skillset />
            <Projects />     
            <AddtlInfo />
            <Certs /> 
        </div>
    )
}

export default LeftSide;