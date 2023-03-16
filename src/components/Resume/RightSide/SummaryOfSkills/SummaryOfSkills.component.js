import './summary-of-skills.styles.css';
function SummaryOfSkills({sumOfSkills}){
    let skills
    sumOfSkills ? skills = sumOfSkills : skills = [];
    return (
        <section className="intro" id="intro">
            <h3>Summary of Skills</h3>
            {
                Object.keys(skills).map(skill => (
                    <ul>
                    <h4>{ skill }</h4>
                    {skills[skill].map((item, i) => (
                        <li key={`item_${i}`}>{item}</li>
                    ))}
                    </ul>
                ))
            }
          </section>
    )
}
export default SummaryOfSkills;