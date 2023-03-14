import { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase.utils';

function Blog() {
 const [blog, setBlog] = useState([]);
  useEffect(() => {
    const ref = collection(db, 'blog')
    onSnapshot(ref, (snapshot) => {    
      setBlog(
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
      {blog.map(post => (
        <li key={post.id}>
        <h3><a href={`/blog/${post.id}`}>{post.data.title}</a></h3>
        <h3>{post.data.created}</h3>
        </li>
      ))}
      </ul>
    );
  }
  
  export default Blog;