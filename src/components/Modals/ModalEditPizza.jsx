import React, {useState} from 'react';
import Modal from 'react-modal'
import axios from 'axios';

function ModalEditPizza({isOpen, pizzaData}){

    const [nome,setNome] = useState(pizzaData.nome);
    const [tipo,setTipo] = useState(pizzaData.tipo);
    const [ingredientes,setIngredientes] = useState(pizzaData.ingredientes);
    const [valor,setValor] = useState(pizzaData.valor);

    const data = {
        "nome": nome,
        "tipo": tipo,
        "ingredientes": ingredientes,
        "valor": valor,
    }

    function handleSubmit(event){

        event.preventDefault();
        
        axios
        .put(`http://localhost:3333/pizzas/${pizzaData.id}`, data)
        .then(resp =>{
        alert("Pizza alterada com sucesso!")
        window.location.reload(true)

        })    
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
            placeholder="Nome da pizza:"
            value={nome}
            onChange={(event) =>setNome(event.target.value)}
            />
            <label className="active" htmlFor="user">Nome:</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            placeholder="Tipo da pizza:"
            value={tipo}
            onChange={(event) =>setTipo(event.target.value)}
            />
            <label className="active" htmlFor="user">Tipo:</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            placeholder="Ingredientes:"
            value={ingredientes}
            onChange={(event) =>setIngredientes(event.target.value)}
            />
            <label className="active" htmlFor="user">Ingredientes:</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
            <input  
            id="user" 
            type="text" 
            className="validate"
            placeholder="Valor:"
            value={valor}
            onChange={(event) =>setValor(event.target.value)}
            />
            <label className="active" htmlFor="user">Valor:</label>
            </div>
        </div>
    </div>
    <button 
    className="btn btnActions" 
    type="submit"
    name="action"
    onClick={()=> {window.location.reload(true)}}
    > Cancelar
    <i className="material-icons right">close</i>
    </button>

    <button 
    className="btn waves-effect waves-light" 
    type="submit"
    name="action"
    onClick={handleSubmit} 
     >Alterar
    <i className="material-icons right">check</i>
    </button>
    <br/>

    

    
    </form>
    </div>
    </Modal>
);
}

export default ModalEditPizza;