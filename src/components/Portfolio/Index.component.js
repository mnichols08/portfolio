import { useEffect, useState } from 'react';
import { collection, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase.utils';

function Portfolio() {
 const [projects, setProjects] = useState([]);
 const handleEdit = e => {
  e.preventDefault()
  console.log(arguments)
 }

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
        const handleDelete = async e => {
          e.preventDefault();
          const ref = doc(db, 'projects', project.id)
          try{
            await deleteDoc(ref)
          } catch (err) {
            alert(err)
          }
        }
        return (
          <li key={project.id}>
          <h3><a href={`/portfolio/${project.id}`}>{project.data.title}</a><a href={`/portfolio/${project.id}/edit`} onClick={handleEdit}>/</a>
          <a href={`/portfolio/${project.id}/delete`} onClick={handleDelete}>x</a></h3>
          <p>{project.data.desc}</p>
          <p>Languages:  { project.data.lang }</p>
          
          </li>
        )
      })}
      </ul>
    );
  }
  
  export default Portfolio;