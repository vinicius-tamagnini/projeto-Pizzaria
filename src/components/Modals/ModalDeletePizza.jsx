import React from 'react';
import Modal from 'react-modal'
import axios from 'axios';
import './ModalDelete.css'

function ModalDeletePizza({isOpen, pizzaData}){


    async function handleDeletePizza(){
        try{
        await axios.delete(`http://localhost:3333/pizzas/${pizzaData.id}`);
        window.location.reload(true);
        }catch(error){
            alert(`Não foi possivel deletar o item. Erro:${error}`)
        }
    }


    return(
        <Modal isOpen={isOpen} ariaHideApp={false} className="containerModal">
            <h2>Confirmação</h2>
            <p>Tem certeza que deseja excluir esta pizza?</p>
             
            <button 
                className="btn btnActions" 
                type="submit"
                name="action"
                onClick={()=> {window.location.reload(true)}}
                > Cancelar
                <i className="material-icons right">close</i>
            </button>

            <button 
                className="btn btnActions" 
                type="submit"
                name="action"
                onClick={() => handleDeletePizza(pizzaData)}
                > Confirmar
                <i className="material-icons right">check</i>
            </button>
        </Modal>
    );
}

export default ModalDeletePizza;