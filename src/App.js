import styles from './App.module.css'
import {useState} from 'react'

function App() {

  const [fullName, setFullName] = useState({
    firstName:"",
    lastName:""
  })

  const [data, setData] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullName(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(true)
  }

  return (
    <div className={styles.wrapper}>
      <h1>Full Name Display</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>

        <label>
          First Name:
          <input onChange={handleChange} name="firstName" type="text" required/>
        </label>

        <label>
          Last Name:
          <input onChange={handleChange}  name="lastName" type="text" required/>
        </label>

        <button type='submit'>Submit</button>

      </form>
    
      {
        data && <p>{`Full Name: ${fullName.firstName} ${fullName.lastName}`}</p>
      }

    </div>
  );
}

export default App;
