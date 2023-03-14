import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase.utils';
import AddProject from './Add.component';
function Portfolio() {
 const [projects, setProjects] = useState([]);
  useEffect(() => {
    const ref = collection(db, 'projects')
    onSnapshot(ref, (snapshot) => {    
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() 
        }))
      );
    });
  }, [ ]);
    return (
      <ul>
      <u>Projects: </u>
      {projects.map(project => (
        <li key={project.id}>
        <h3>{project.data.title}</h3>
        <p>{project.data.desc}</p>
        <p>Languages:  { project.data.lang }</p>
        <p>Completed On: { project.data.completed_date }</p>
        <p>Origins:  { project.data.origin }</p>
        <h4>Project Code: <a href={project.data.code_url} target="_blank">{project.data.code_url}</a></h4>
        <h4>Deployed App: <a href={project.data.deploy_url} target="_blank">{project.data.deploy_url}</a></h4>
        </li>
      ))}
      <AddProject />
      </ul>
    );
  }
  
  export default Portfolio;