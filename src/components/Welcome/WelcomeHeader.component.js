import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import './welcome-header.styles.css'
function WelcomeHeader() {
  const [header, setHeader] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "pages", 'home')).then(doc => setHeader(doc.data()))
  useEffect(() => {
    getDocSnap()
    }, []);
    return (

  <div className="welcome-header">
    <h1>{header.heading}</h1>
    <h2>{header.sub_heading}</h2>
  </div>
  

    );
  }
  
  export default WelcomeHeader;