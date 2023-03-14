import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
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
      <section>
      <h1><u>Blog: </u></h1>
      <a href="/blog/add">Add Post</a>
      <ul>
      {blog.map(post => (
        <li key={post.id}>
        <h3><a href={`/blog/${post.id}`}>{post.data.title}</a></h3>
        </li>
      ))}
      </ul>
      </section>
    );
  }
  
  export default Blog;