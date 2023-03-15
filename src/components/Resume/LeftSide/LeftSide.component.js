import Contact from './Contact/Contact.component';
import Skillset from './Skillset/Skillset.component';
import Coffee from './Coffee/Coffee.component';
import Projects from './Projects/Projects.component';
import AddtlInfo from './AddtlInfo/AddtlInfo.component';
import Certs from './Certs/Certs.component';
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