import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {Login} from '../../Mutations/Auth';
import {QueryItems} from '../../Queries/Items';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [login] = useMutation(Login);
  const {loading, refetch, error, data} = useQuery(QueryItems, {
    variables: {pageSize: 10, pageNumber: 1},
  });

  console.log(error?.message, 'error');
  console.log(data, 'data');

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
        navigate('/products')
        
      } else {
        console.log('No token received.');
        alert("User name or Password are invalid!")
      }
    } catch (error) {
      console.error('Mutation error:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => handleInputChange(event, setUserName)}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => handleInputChange(event, setPassword)}
        />
        <button onClick={createUserAndRefetch}>Login</button>
      </div>
    </div>
  );
}

export default Home;