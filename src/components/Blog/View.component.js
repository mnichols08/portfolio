import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";



function BlogPost() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "blog", id)).then(doc => setBlogPost(doc.data()))
  useEffect(() => {
    getDocSnap()
  }, []);
  return (
    <section>
   
            <label>Title:</label><h2>{blogPost.title}</h2>
            <label>Body:</label><h2>{blogPost.body}</h2>
    </section>
  );
}

export default BlogPost;