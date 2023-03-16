import {useState} from 'react';
import {db} from '../../firebase/firebase.utils';
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import './add.styles.css';

function AddProject() {

  const [codeUrl, setCodeUrl] = useState('');
  const [completedDate, setCompletedDate] = useState('');
  const [deployUrl, setDeployUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [lang, setLang] = useState('');
  const [origin, setOrigin] = useState('');
  const [title, setTitle] = useState('') ;
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'projects'), {
        title: title,
        desc: desc,
        origin: origin,
        lang: lang,
        completed_date: completedDate,
        deploy_url: deployUrl,
        code_url: codeUrl,
        created: Timestamp.now()
      }).then(() => {
        setTitle('');
        setDesc('');
        setOrigin('');
        setLang('');
        setCompletedDate('');
        setDeployUrl('');
        setCodeUrl('');
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
          placeholder='Enter project title'/>
        <textarea 
          onChange={(e) => setDesc(e.target.value)}
          placeholder='Enter project decription'
          value={desc}></textarea>
           <input 
          type='text' 
          name='origin' 
          onChange={(e) => setOrigin(e.target.value)} 
          value={origin}
          placeholder='Origin (Where the idea originated)'/>
           <input 
          type='text' 
          name='lang' 
          onChange={(e) => setLang(e.target.value)} 
          value={lang}
          placeholder='Languages'/>
        <input 
          type='date' 
          name='completedDate' 
          onChange={(e) => setCompletedDate(e.target.value)} 
          value={completedDate}
          placeholder='Date of Completion'/>
        <input 
          type='text' 
          name='deployUrl' 
          onChange={(e) => setDeployUrl(e.target.value)} 
          value={deployUrl}
          placeholder='URL to deployed App'/>
          <input 
          type='text' 
          name='codeURL' 
          onChange={(e) => setCodeUrl(e.target.value)} 
          value={codeUrl}
          placeholder='URL to code repository'/>
         <button type='submit'>Done</button>
      </form> 
  )
}

export default AddProject
