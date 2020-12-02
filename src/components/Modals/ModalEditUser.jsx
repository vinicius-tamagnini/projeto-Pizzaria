import React, {useState} from 'react';
import Modal from 'react-modal'
import axios from 'axios';

function ModalEditUser({isOpen, userData}){

    const [user,setUser] = useState(userData.usuario);
    const [password, setPassword] = useState(userData.senha);
    const [confirmPassword, setConfirmPassword] = useState('');

    const data = {
        "usuario": user,
        "senha": password
    }

    function handleSubmit(event){
        event.preventDefault();
        if(password != confirmPassword){
            alert("Senhas não conferem.")
        }else{
            axios
                .put(`http://localhost:3333/user/${userData.id}`, data)
                .then(resp =>{
                    alert("Usuario alterado com sucesso!")
                    window.location.reload(true)
                })
        }
    }

    return(
    <Modal isOpen={isOpen} ariaHideApp={false}>
    <div>
    <form>    
    <div>
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            placeholder="Usuários"
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
                placeholder="Senha"
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
                placeholder="Confirmação de senha"
                value={confirmPassword}
                onChange={(event)=> setConfirmPassword(event.target.value)}
                />
                <label className="active" htmlFor="password">Confirme sua senha:</label>
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

    

    
    </form>
    </div>
    </Modal>
);
}

export default ModalEditUser;