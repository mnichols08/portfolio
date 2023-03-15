import './skillset.styles.css';
function Skillset(){
  const skillset = ['React', 'Redux', 'Tabletop.js', 'AutoIT', 'BigCommerce', 'BootStrap', 'CSS3', 'Google Ads', 'Google Analytics', 'Google App Script', 'HTML5', 'JS', 'LESS', 'Magento 1', 'NCR CounterPoint', 'PHP', 'SASS', 'SQL', 'Search Engine Optimization', 'WordPress', 'eCommerce Consulting', 'jQuery'].sort((a,b) => b.length - a.length);
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