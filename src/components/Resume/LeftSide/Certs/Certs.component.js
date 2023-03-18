import Edit from '../../../Edit/Edit.component';
import './certs.styles.css';
function Certs({certs}) {
  let certsArr
  certs ? certsArr = certs.sort((a,b) => b.length - a.length) : certsArr = [];
    return (
        <ul className="certs">
        <h3>Certifications <Edit /></h3>
        {certsArr.map(cert => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    )
}
export default Certs;