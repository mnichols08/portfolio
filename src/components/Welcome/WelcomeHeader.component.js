import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.utils";
import Edit from "../Edit/Edit.component";
import "./welcome-header.styles.css";
function WelcomeHeader() {
  const [heading, setHeading] = useState();
  const [editHeading, setEditHeading] = useState([]);
  const [header, setHeader] = useState([]);
  let admin;
  try {
    let user = auth.currentUser;
    admin = user.uid === `Mdu1H6ns4neFWEHMxLzQtwX6CTp2`;
    console.log(auth);
  } catch (e) {
    console.error(e);
    admin = false;
  }
  const getDocSnap = async () =>
    await getDoc(doc(db, "pages", "home")).then((doc) => setHeader(doc.data()));
  useEffect(() => {
    getDocSnap();
  }, []);
  return (
    <div className="welcome-header">
      <h1>
        {header.heading}
        {admin ? <Edit handleClick={setEditHeading} /> : ""}
      </h1>
      <h2>
        {header.sub_heading}
        {admin ? <Edit handleClick={setEditHeading} /> : ""}
      </h2>
    </div>
  );
}
export default WelcomeHeader;
