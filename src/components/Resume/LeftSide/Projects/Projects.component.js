import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";
import { db } from '../../../../firebase/firebase.utils';
import './projects.styles.css';
function Projects(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const ref = query(collection(db, 'projects'),orderBy('completed_date','desc'),limit(3))
        onSnapshot(ref, (snapshot) => {    
        setProjects(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data() 
            }))
        );
        });
    }, [ ]);
    return(
        <ul>
            <h3>Recent Projects</h3>
            <hr />
            {projects.map((project, i) => (
                <li key={i}>
                    <h4><a href={`/portfolio/${project.id}`}>{ project.data.title }</a></h4>
                    <ul>
                        <li>{ project.data.desc }</li>
                        <li>Languages Used: { project.data.lang}</li>
                        <li>Completed on: { project.data.completed_date}</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}
export default Projects;