import Edit from '../../../Edit/Edit.component';
import './extracurricular.styles.css'
function Extracurricular({extra}){
  let extras
  extra ? extras = extra : extras = [];
    return(
        <section className="extras" id="extras">
              <h3>Extracurricular <Edit /></h3>
              { extras.map((activity, i) => (
                <ul key={`activity_${i}`}>
                <div>
                  <h4>{activity.origin}</h4>
                  <h5>{activity.title}</h5>
                </div>
                <div>
                  <h4>{activity.dates}</h4>
                  <h5>{activity.location}</h5>
                </div>
                </ul>
              ))}
        </section>
    )
}

export default Extracurricular;