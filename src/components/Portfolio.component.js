import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/firebase.utils';
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
        <li>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        </li>
      ))}
      </ul>
    );
  }
  
  export default Portfolio;