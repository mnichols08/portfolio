import {auth} from '../../firebase/firebase.utils';
function Edit(handleClick){
    let admin;
    try {
      let user = auth.currentUser;
      admin = user.uid === `Mdu1H6ns4neFWEHMxLzQtwX6CTp2`;
    } catch (e) {
      console.error(e);
      admin = false;
    }
    return(
        admin ? <a onClick={handleClick}>/</a> : ''
    )
}
export default Edit