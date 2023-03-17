import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import LeftSide from './LeftSide/LeftSide.component';
import RightSide from './RightSide/RightSide.component';
import './resume.styles.css'
function Resume() {
    const [resume, setResume] = useState([]);
    const getDocSnap = async () => await getDoc(doc(db, "pages", 'resume')).then(doc => setResume(doc.data()))
    useEffect(() => {
      getDocSnap()
      }, []);
    return (
        <div className="resume">
        <LeftSide resume={resume}/>
        <RightSide resume={resume}/>
    </div>
    );
  }
  
  export default Resume;