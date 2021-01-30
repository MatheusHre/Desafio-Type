import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { User, Post } from './types/user'

 

function App() {

  const [user, setUsers] = useState([])

  const [ident, setIdent] = useState<number>()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(resposta => setUsers(resposta.data))
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${ident}/posts`)
      .then(resposta => setPosts(resposta.data))
  }, [ident]);
  
  return (
    <div>  
    { 
      user !== undefined &&
      user.map((usuario: User) => (
      <>
        <ul key={usuario.id}>
          <li>
          <p onClick={() => setIdent(usuario.id)}>{usuario.name} <b>({usuario.id})</b></p>
          </li>
        </ul>
      </>
      ))
    }
    {
      posts !== undefined &&
      posts.map((postagem: Post) => (
        <>
          <ul key={postagem.id}>
            <p><b>{postagem.title}:</b> {postagem.body}</p>
          </ul>
        </>
      ))
    } 
    </div>
  );
}

export default App;
