import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './ListUser.css'
import axios from 'axios';
import './NewUser.css'



function NewUser(){

    const history = useHistory();
    const [user,setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const data = {
        "usuario": user,
        "senha": password
    }

    function handleSubmit(event){
        event.preventDefault();
        if(password != confirmPassword || user==='' || password ===""
        ||confirmPassword ===''){
            alert("Senhas não conferem.")
        }else{
            axios
                .post("http://localhost:3333/user", data)
                .then(resp =>{
                    alert("Usuario criado com sucesso!")
                    history.push('/')
                })
        }
    }
    
    return(

    <form className="containerMain">
        <h1 className="title">Cadastro</h1>  
       <div className="box-cadastro">   
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            value={user}
            onChange={(event) =>setUser(event.target.value)}
            />
            <label className="active" htmlFor="user">Usuário:</label>
            </div>
        </div>
        <br/>
            <div className="row">
                <div className="input-field col s12">
                <input 
                id="password" 
                type="password" 
                className="validate"
                value={password}
                onChange={(event) =>setPassword(event.target.value)}
                />
                <label className="active" htmlFor="password">Senha:</label>
                </div>
            </div>

        <div className="row">
                <div className="input-field col s12">
                <input 
                id="password" 
                type="password" 
                className="validate"
                value={confirmPassword}
                onChange={(event)=> setConfirmPassword(event.target.value)}
                />
                <label className="active" htmlFor="password">Confirme sua senha:</label>
                </div>
            </div>
        </div>
        <button 
    className="btn waves-effect waves-light botao red" 
    type="submit"
    name="action"
    onClick={handleSubmit} 
     >Cadastrar
    <i className="material-icons right">send</i>
    </button>
    <br/>
    <br/>
    <Link to="/" className="link-new">Clique aqui para voltar!</Link>
    
    </form>
    );
}

export default NewUser;