import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase.utils';

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
      {projects.map(project => {
        return (
          <li key={project.id}>
          <h3><a href={`/portfolio/${project.id}`}>{project.data.title} </a> </h3>
          <p>{project.data.desc}</p>
          <p>Languages:  { project.data.lang }</p>
          </li>
        )
      })}
      </ul>
    );
  }
  
  export default Portfolio;