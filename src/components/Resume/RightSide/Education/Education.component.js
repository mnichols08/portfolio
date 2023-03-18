import Edit from '../../../Edit/Edit.component';
import './education.styles.css';
function Education({education}){
  let knowledge
  education ? knowledge = education : knowledge = [];
    return(
        <section className="education" id="education">
          <h3>Education <Edit /></h3>
          {knowledge.map((school, i) => (
            <ul key={`school_${i}`}>
              <div>
                <h4>{school.academy}</h4>
                <h5>{school.field_of_study}</h5>
              </div>
              <div>
              <h4>{school.dates}</h4>
              <h5>{school.location}</h5>
              </div>
            </ul>
          ))}
          </section>
    )
}
export default Education;