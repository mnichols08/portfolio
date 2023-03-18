import Edit from '../../../Edit/Edit.component';
import './addtl-info.styles.css';
function AddtlInfo({languages}){
    let langs
    languages ? langs = languages.sort((a,b) => b.length - a.length) : langs = [];

    return(
        <ul className="addtl-info">
            <h3>Additional Information <Edit /></h3>
            <li>Languages: {langs.map((language, i) => `${language}, `)}</li>
            <hr />
        </ul> 
    )
}
export default AddtlInfo;