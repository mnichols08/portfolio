import { createGoogleUserProfileDocument} from '../../firebase/firebase.utils'
import './login.styles.css'
function Login(){
    return(
        <div className="login">
            <button onClick={createGoogleUserProfileDocument}>Sign In With Google</button>
        </div>
    )
}

export default Login