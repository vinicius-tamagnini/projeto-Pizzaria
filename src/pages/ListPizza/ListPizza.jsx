import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import ModalDeletePizza from '../../components/Modals/ModalDeletePizza';
import ModalEditPizza from '../../components/Modals/ModalEditPizza';
import './ListPizza.css'
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar'
function ListPizza(){

    const [pizza, setPizza] = useState([]);
    const [pizzaItem,setPizzaItem] = useState([]);
    const [loadDelete, setLoadDelete] = useState(false);
    const [loadEdit, setLoadEdit] = useState(false);

    function showEditUser(pizzaData){
        setLoadEdit(true);
        setPizzaItem(pizzaData)
    }

    function showDeleteUser(pizzaData){
        setLoadDelete(true);
        setPizzaItem(pizzaData);    
    }


    useEffect(() => {
        axios.get('http://localhost:3333/pizzas')
        .then(resp => {
            setPizza(resp.data)
        })
    }, [])



    return(
        <>
        {loadDelete && < ModalDeletePizza isOpen={loadDelete} pizzaData={pizzaItem}/>}
        {loadEdit && <ModalEditPizza isOpen={loadEdit} pizzaData={pizzaItem}/>}
        <NavBar/>
        <div className="fundo">
        <table className="titleListPizza">
        <thead>
            <tr>
              <th>ID</th>
              <th>Pizza</th>
              <th>Tipo</th>
              <th>Ingredientes</th>
              <th>Valor</th>
            </tr>
        </thead>

        <tbody className="containerMainPizza">

            {
                pizza.map( (pizzaData) =>{
                    const {id, nome, tipo, ingredientes, valor} = pizzaData;
                return(
                <tr key={id}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{tipo}</td>
                <td>{ingredientes}</td>
                <td>{valor}</td>
                <td>
                <button 
                className="btn btnActions green" 
                type="submit"
                name="action"
                onClick={() =>{showEditUser(pizzaData)}}
                >editar
                <i className="material-icons right">create</i>
                </button>
                <button 
                className="btn delete btnActions" 
                type="submit"
                name="action"
                onClick={() =>{showDeleteUser(pizzaData)}}
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
            <button 
                className="btn botaoNovaPizza" 
                type="submit"
                name="action" 
                ><Link to="/newpizza" className="NovaPizza">Nova Pizza</Link>
                <i className="material-icons right">add</i>
            </button>
            </table>
            </div>
      
        </>    
    );

}

export default ListPizza;