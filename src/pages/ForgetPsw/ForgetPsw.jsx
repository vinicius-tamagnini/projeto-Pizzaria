import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

function ForgetPsw(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const history = useHistory();
    function handleSubmit(event){
       
    }
    return(
    <div className="login-container">
        <form className="container">    
            <div className="box-login">
            <br/>
            <div className="row">
            <div className="input-field col s12">
            <input 
            value={email}
            onChange={(event) =>{setEmail(event.target.value)}} 
            id="user" 
            type="text" 
            className="validate"
            />
            <label className="active" htmlFor="user">E-mail:</label>
            </div>
        </div>
        <br/>
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
        <br/>
        <div className="row">
                <div className="input-field col s12">
                <input 
                value={password}
                onChange={(event)=>{setPassword(event.target.value)}} 
                id="password" 
                type="password" 
                className="validate"/>
                <label className="active" htmlFor="password">Confirme a senha:</label>
            </div>

            
        </div>
    </div>

    <button 
    className="btn waves-effect waves-light" 
    type="submit"
     name="action"
     onClick={handleSubmit}
     >Alterar
    <i className="material-icons right">send</i>
    </button>
    <br/>

    <Link to="/">Clique aqui para voltar!</Link>

    
    </form>
    </div>
    );
}

export default ForgetPsw;