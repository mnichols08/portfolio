import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import Edit from "../Edit/Edit.component";
import "./welcome-header.styles.css";
function WelcomeHeader() {
  const [heading, setHeading] = useState();
  const [editHeading, setEditHeading] = useState([]);
  const [header, setHeader] = useState([]);
  const getDocSnap = async () =>
    await getDoc(doc(db, "pages", "home")).then((doc) => setHeader(doc.data()));
  useEffect(() => {
    getDocSnap();
  }, []);
  return (
    <div className="welcome-header">
      <h1>
        {header.heading}
        <Edit handleClick={setEditHeading} />
      </h1>
      <h2>
        {header.sub_heading}
        <Edit handleClick={setEditHeading} />
      </h2>
    </div>
  );
}
export default WelcomeHeader;
