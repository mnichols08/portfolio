import {useState} from 'react'
import {db} from '../../firebase/firebase.utils'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddBlogPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'blog'), {
        title: title,
        body: body,
        created: Timestamp.now()
      })
    } catch (err) {
      alert(err)
    }
  }

  return (
      <form onSubmit={handleSubmit} className='addItem' name='addItem'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          placeholder='Enter Blog Post Title'/>
          <textarea 
          onChange={(e) => setBody(e.target.value)}
          placeholder='Enter Blog Post Body'
          value={body}></textarea>
         <button type='submit'>Done</button>
      </form> 
  )
}

export default AddBlogPost
