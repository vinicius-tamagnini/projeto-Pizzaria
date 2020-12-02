import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

import './Login.css'
function Login(){

    let [user,setUser] = useState('');
    let [password, setPassword] = useState('');

    let login;

    const history = useHistory();
    
    function handleSubmit(event){
        event.preventDefault();
        axios
        .get(' http://localhost:3333/user')
        .then(response =>{

            const results = response.data

            if(user === '' || password === ''){
                alert('Preencha os campos, por favor.')
            }else{
                login = results.some(({usuario,senha}) =>{
                 return   usuario === user && senha === password;
                })
            }
            if (login){
                history.push('/loading')
                setTimeout(() =>{
                history.push('/home')
                },3000);
                 } else {
                    alert("Dados incorretos!")
            }
        });

    }

    return(
  <body>      
   <div className="fundoLogin">  
   
        <form className="container">
            <div className="login-logo"></div>  
            <div className="box-login">
                <div className="row">
                <div className="input-field col s12">
                    <input 
                    value={user}
                    onChange={(event) =>{setUser(event.target.value)}} 
                    id="user" 
                    type="text" 
                    className="validate"
                    />
                    <label className="active" htmlFor="user">Usuário:</label>
                </div>
                </div>

                <div className="row">
                <div className="input-field col s12">
                    <input 
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}} 
                    id="password" 
                    type="password" 
                    className="validate"/>
                    <label className="active" htmlFor="password">Senha:</label>
                </div>
                </div>
            </div>

    <button 
    className="btn waves-effect waves-light red" 
    type="submit"
     name="action"
     onClick={handleSubmit}
     >entrar
    <i className="material-icons right">send</i>
    </button>
    <br/>
    <br/>
    <Link to="/newUser" className="link-style">É novo por aqui? Cadastre-se!</Link>
    </form>

    </div>
    </body>
    );
}
export default Login;