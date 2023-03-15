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
                        <li>Completed on: { project.data.completed_date}</li>
                    </ul>
                </li>
            ))}
        </ul>
        // <ul>
        //     <h3>Recent Projects</h3>
        //         <hr />
        //     <h4>NCR CounterPoint to BigCommerce</h4>
        //     <ul>
        //         <li>Conceptualized and wrote a program to extract product information from enterprice level ERP / POS</li>
        //         <li>Utilized SQL, AutoIT and Google App Script to automate the processing of required data</li>
        //         <li>Ongoing Support as needed</li>
        //     </ul>
        //     <h4>Magento Theme to BigCommerce</h4>
        //     <ul>
        //         <li>Took a Magento 1 Theme and Converted to BigCommerce</li>
        //         <li>Using BigCommerce Stencil API, completely custom and better than Magento.</li>
        //         <li>Remains in sync with rental addons, custom front-end apps.</li>
        //     </ul>
        //     <hr />
        // </ul>
    )
}
export default Projects;