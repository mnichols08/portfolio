import './coffee.styles.css';
function Coffee({email}){
    return(
        <div className="coffee">
          <p>If you would like to collaborate on a project or employ my services please reach out!</p>
          <a href={`mailto:${email}?subject=Let's%20grab%20coffee!`} className="button">Let's Grab Coffee!</a>
        </div>
    )
}
export default Coffee;