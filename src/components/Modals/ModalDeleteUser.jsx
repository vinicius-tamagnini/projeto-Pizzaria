import React from 'react';
import Modal from 'react-modal'
import axios from 'axios';
import './ModalDelete.css'

function ModalDeleteUser({isOpen, userData}){


    async function handleDeleteUser(){
        try{
        await axios.delete(`http://localhost:3333/user/${userData.id}`);
        window.location.reload(true);
        }catch(error){
            alert(`Não foi possivel deletar o item. Erro:${error}`)
        }
    }


    return(
        <Modal isOpen={isOpen} ariaHideApp={false} className="containerModal">
            <h2>Confirmação</h2>
            <p>Tem certeza que deseja excluir o usuário?</p>
             
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
                onClick={() => handleDeleteUser(userData)}
                > Confirmar
                <i className="material-icons right">check</i>
            </button>
        </Modal>
    );
}

export default ModalDeleteUser;