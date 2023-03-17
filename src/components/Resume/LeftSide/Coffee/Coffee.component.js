import './coffee.styles.css';
function Coffee({email, caption, message}){
    return(
        <div className="coffee">
          <p>{ caption }</p>
          <a href={`mailto:${email}?subject=Let's%20grab%20coffee!`} className="button">{ message }</a>
        </div>
    )
}
export default Coffee;