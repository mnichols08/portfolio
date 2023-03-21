import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import LeftSide from './LeftSide/LeftSide.component';
import RightSide from './RightSide/RightSide.component';
import './resume.styles.css'
function Resume() {
    const [resume, setResume] = useState([]);
    const [gitHub, setGitHub] = useState([]);
    const getDocSnap = async () => await getDoc(doc(db, "pages", 'resume')).then(doc => setResume(doc.data()));
    const getGitHubSnap = async username => await fetch(`https://api.github.com/users/${username}`).then((data) => data.json())
    .then((json) => setGitHub(json));
    useEffect(() => {
      getGitHubSnap('mnichols08');
      getDocSnap();
      }, []);
    return (
        <div className="resume">
        <LeftSide resume={resume} github={gitHub} />
        <RightSide resume={resume} github={gitHub} />
    </div>
    );
  }
  
  export default Resume;