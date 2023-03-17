import './employment-history.styles.css';
function EmploymentHistory({employmentHistory}){
  let history
  employmentHistory ? history = employmentHistory : history = [];
  console.log(employmentHistory)
    return(
        <section className="history" id="history">
          <h3>Employment History</h3>
          {history.map((job,i) => (
            <ul className="job" key={`job_${i}`}>
              <div>
                <h4>{job.job_title}</h4>
                <h5>{job.employer}</h5>
              </div>
              <div>
                <h4>{job.dates}</h4>
                <h5>{job.location}</h5>
              </div>
              <ul>
                {job.desc.map((jobDuty, o) => (<li key={`duty_${o}`}>{jobDuty}</li>))}
              </ul>
              
            </ul>
          ))}

          </section>
    )
}

export default EmploymentHistory;