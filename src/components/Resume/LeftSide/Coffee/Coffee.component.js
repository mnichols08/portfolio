import Edit from '../../../Edit/Edit.component';

import './coffee.styles.css';
function Coffee({email, caption, message}){
    return(
        <div className="coffee">
          <p>{ caption } <Edit /></p>
          <a href={`mailto:${email}?subject=Let's%20grab%20coffee!`} className="button">{ message } <Edit /></a>
        </div>
    )
}
export default Coffee;