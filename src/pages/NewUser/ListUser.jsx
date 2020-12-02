import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import ModalDeleteUser from '../../components/Modals/ModalDeleteUser';
import ModalEditUser from '../../components/Modals/ModalEditUser';
import NavBar from '../../components/NavBar';
import './ListUser.css'

function ListUser(){

    const [user, setUser] = useState([]);
    const [userItem,setUserItem] = useState([]);
    const [loadDelete, setLoadDelete] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);

    function showEditUser(userData){
        setLoadEdit(true);
        setUserItem(userData)
    }

    function showDeleteUser(userData){
        setLoadDelete(true);
        setUserItem(userData);    
    }


    useEffect(() => {
        axios.get('http://localhost:3333/user')
        .then(resp => {
            setUser(resp.data)
        })
    }, [])



    return(
        <>

        {loadDelete && < ModalDeleteUser isOpen={loadDelete} userData={userItem}/>}
        {loadEdit && <ModalEditUser isOpen={loadEdit} userData={userItem}/>}
        <NavBar/>
        <div className="fundo">
        <table className="containerMain">
        <thead>
          <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Ações</th>
          </tr>
        </thead>

        <tbody className="containerMainUser">

            {
                user.map( (userData) =>{
                    const {id, usuario} = userData;
                return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{usuario}</td>
                    <td>
                    <button 
                    className="btn btnActions green" 
                    type="submit"
                    name="action"
                    onClick={() =>{showEditUser(userData)}}
                    >editar
                    <i className="material-icons right">create</i>
                    </button>
                    <button 
                    className="btn delete btnActions" 
                    type="submit"
                    name="action"
                    onClick={() =>{showDeleteUser(userData)}}
                    >excluir
                    <i className="material-icons right">delete</i>
                    </button>
                    <br/>
                    </td>
                </tr>

                
                )
            })

        }
        
         
        </tbody>
        
      </table>
      </div>
    </>    
    );

}

export default ListUser;