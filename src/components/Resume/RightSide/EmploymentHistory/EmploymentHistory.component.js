import Edit from '../../../Edit/Edit.component';
import './employment-history.styles.css';
function EmploymentHistory({employmentHistory}){
  let history
  employmentHistory ? history = employmentHistory : history = [];
    return(
        <section className="history" id="history">
          <h3>Employment History <Edit /></h3>
          {history.map((job,i) => (
            <ul className="job" key={`job_${i}`}>
              <div>
                <h4>{job.title}</h4>
                <h5>{job.employer}</h5>
              </div>
              <div>
                <h4>{job.dates}</h4>
                <h5>{job.location}</h5>
              </div>
              <ul>
                {job.tasks.map((jobDuty, o) => (<li key={`duty_${o}`}>{jobDuty}</li>))}
              </ul>
              
            </ul>
          ))}

          </section>
    )
}

export default EmploymentHistory;