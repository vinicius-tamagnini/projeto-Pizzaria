import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './NewPizza.css'



function NewPizza(){

    const history = useHistory();
    const [nome,setNome] = useState('');
    const [tipo,setTipo] = useState('');
    const [ingredientes,setIngredientes] = useState('');
    const [valor,setValor] = useState('');

    const data = {
        "nome": nome,
        "tipo": tipo,
        "ingredientes": ingredientes,
        "valor": valor,
    }

    function handleSubmit(event){
        event.preventDefault();
            axios
                .post("http://localhost:3333/pizzas", data)
                .then(resp =>{
                    alert("Pizza criada com sucesso!")
                    history.push('/listpizza')
                })
    }
    
    return(
        <div className="">
    <form className="containerMain">    
    <div className="box-cadastro">
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            value={nome}
            onChange={(event) =>setNome(event.target.value)}
            />
            <label className="active" htmlFor="user">Nome da Pizza:</label>
            </div>

            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            value={tipo}
            onChange={(event) =>setTipo(event.target.value)}
            />
            <label className="active" htmlFor="user">Tipo da pizza:</label>
            </div>

            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            value={ingredientes}
            onChange={(event) =>setIngredientes(event.target.value)}
            />
            <label className="active" htmlFor="user">Ingredientes da pizza:</label>
            </div>
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            value={valor}
            onChange={(event) =>setValor(event.target.value)}
            />
            <label className="active" htmlFor="user">Valor da pizza:</label>
            </div>
        </div>
        <br/>
           

        
    </div>

    <button 
    className="btn waves-effect waves-light botao green" 
    type="submit"
    name="action"
    onClick={handleSubmit} 
     >Cadastrar
    <i className="material-icons right">send</i>
    </button>
    <br/>
    <br/>
    <br/>
    <Link to="/listpizza" className="link-new">Clique aqui para voltar!</Link>

    
    </form>
    </div>
    );
}

export default NewPizza;