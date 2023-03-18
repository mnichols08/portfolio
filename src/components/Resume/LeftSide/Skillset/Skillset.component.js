import Edit from '../../../Edit/Edit.component';
import './skillset.styles.css';
function Skillset({skillset}){
  let skills
  skillset ? skills = skillset.sort((a,b) => b.length - a.length) : skills = [];
     return (
        <section className="skills" id="skills">
              <hr />
              <h3>My Skillset Includes <Edit /></h3>
                <ul>
                  {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>     
          </section>  
    )
}
export default Skillset