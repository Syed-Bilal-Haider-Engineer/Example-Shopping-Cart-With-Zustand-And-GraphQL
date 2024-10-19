import React, {useState} from 'react';
import { useMutation} from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { Login } from '../../GraphQL/Mutations/Auth';
function Home() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [login] = useMutation(Login);
  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const createUserAndRefetch = async () => {
    try {
      const {data} = await login({
        variables: {
          username,
          password,
        },
      });

      const token = data?.authentication?.login?.token;
      if (token) {
        localStorage.setItem('authToken', token);
        console.log('Token stored in localStorage:', token);
        navigate('/')
        
      } else {
        console.log('No token received.');
        alert("User name or Password are invalid!")
      }
      navigate('/')
    } catch (error) {
      console.error('Mutation error:', error);
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Login</h1>
      <input
        type="text"
        placeholder="Username"
        className={styles.input}
        onChange={(event) => handleInputChange(event, setUserName)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        onChange={(event) => handleInputChange(event, setPassword)}
      />
      <button className={styles.button} onClick={createUserAndRefetch}>
        Login
      </button>
    </div>
  </div>
  );
}

export default Home;
