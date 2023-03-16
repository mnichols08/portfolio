import './coffee.styles.css';
function Coffee({email, caption}){
    return(
        <div className="coffee">
          <p>{ caption }</p>
          <a href={`mailto:${email}?subject=Let's%20grab%20coffee!`} className="button">Let's Grab Coffee!</a>
        </div>
    )
}
export default Coffee;