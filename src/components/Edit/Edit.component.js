import {auth} from '../../firebase/firebase.utils';
function Edit(handleClick){
    handleClick ? handleClick = handleClick : console.log('you better add an event handler dummy!')
    let admin;
    try {
      let user = auth.currentUser;
      admin = user.uid === `Mdu1H6ns4neFWEHMxLzQtwX6CTp2`;
    } catch (e) {
      console.error(e);
      admin = false;
    }
    return(
        admin ? <a href={handleClick}>/</a>  : ''
    )
}
export default Edit