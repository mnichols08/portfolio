import './skillset.styles.css';
function Skillset({skillset}){
  try {
  skillset = skillset.sort((a,b) => b.length - a.length);
  } catch {
  }
    return (
        <section className="skills" id="skills">
              <hr />
              <h3>My Skillset Includes</h3>
                <ul>
                  {skillset.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>     
          </section>  
    )
}
export default Skillset