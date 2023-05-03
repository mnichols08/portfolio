import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import Edit from '../Edit/Edit.component';
import './view.styles.css';

function ViewProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "projects", id)).then(doc => setProject(doc.data()))
  useEffect(() => {
    getDocSnap()
  }, []);
  return (
    <section className="view-project">
            <h3>{ project.title } <Edit value={project} /></h3>
            <p>{ project.desc }<Edit /></p>
            <p>Languages:  { project.lang }<Edit /></p>
            <p>Completed On: { project.completed_date }<Edit /></p>
            <p>Origins:  { project.origin }<Edit /></p>
            <h4><a href={project.code_url} target="_blank">Code Repository</a><Edit /></h4>
            <h4><a href={project.deploy_url} target="_blank">Deployed App</a><Edit /></h4>
    </section>
  );
}

export default ViewProject;