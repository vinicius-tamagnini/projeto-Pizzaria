import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import './Home.css'

function Home(){
    return(
    <div className="fundo">
        <NavBar/>
        <div className="bodyBanner">
            <div class="wrapper">
                <div className="Banner">
                <h1>O melhor jeito de gerenciar sua pizzaria.</h1>
                <h4>Nunca foi tão fácil cuidar do seu cardápio.</h4>
                <button 
                className="btn waves-effect waves-light black" 
                type="submit"
                name="action"
                ><Link to="/listpizza" className="link-home">Criar</Link>
                <i className="material-icons right">add</i>
                </button>
                </div>
            </div>
        </div>
            <div className="column">
                <p>Gerencie a sua pizzaria da forma mais fácil,
                 cadastrando e atualizando suas pizzas conforme
                 for necessário. </p>
            </div>
            <div className="text">
                <h3>Genrenciando uma pizzaria</h3>
                <h6>Uma pizzaria possui diversas pizzas e seus sabores e tipos.
                    Tendo em vista essa situação, desenvolveu-se esta aplicação
                    onde podemos cadastrar usuários que poderão gerenciar as pizzas
                    podendo criar, alterar ou excluir.
                </h6>
            </div>
            <div className="imgForno"></div>
            <br/>
            <br/>
            <div class="footer-copyright black white-text">
                <div class="container">
                © 2020 Copyright
                <a class="grey-text text-lighten-4 right" href="#!">Michelangelo Pizzaria´s</a>
                </div>
            </div>
    </div>
    );
}

export default Home;