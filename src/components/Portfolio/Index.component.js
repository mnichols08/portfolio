import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase.utils';
import Edit from '../Edit/Edit.component';
import './index.styles.css'

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
      <div className="portfolio">
      <h1><u>Projects: </u></h1>
        <ul>
        {projects.map(project => {
          return (
            <li key={project.id}>
            <h3><a href={`/portfolio/${project.id}`}>{project.data.title}</a> <Edit /></h3>
            <p>{project.data.desc} <Edit /></p>
            <p>Languages:  { project.data.lang } <Edit /></p>
            </li>
          )
        })}
        </ul>
      </div>
   
    );
  }
  
  export default Portfolio;