import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";



function ViewProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "projects", id)).then(doc => setProject(doc.data()))
  useEffect(() => {
    getDocSnap()
  }, []);
  return (
    <section>
            <h3>{ project.title }</h3>
            <p>{ project.desc }</p>
            <p>Languages:  { project.lang }</p>
            <p>Completed On: { project.completed_date }</p>
            <p>Origins:  { project.origin }</p>
            <h4><a href={project.code_url} target="_blank">Code Repository</a></h4>
            <h4><a href={project.deploy_url} target="_blank">Deployed App</a></h4>
    </section>
  );
}

export default ViewProject;