import React, {Component} from 'react';
import Tarjeta from './Tarjeta';


class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactos: [],
            contactosOriginales: [],
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=2")
        .then(result => result.json())
        .then( data => { 
            this.setState({contactos: data.results, contactosOriginales: data.results})
        })    
    }   

    borrar = (cardId) => {
        let resultado = this.state.contactos.filter((dato) =>{
            console.log(dato.login.uuid)
             return dato.login.uuid !== cardId;
         })
         this.setState({
            contactos: resultado
        })
    }

    reset = () => {
        this.setState({
            contactos: this.state.contactosOriginales,
        })
    }

    agregar = () => {
        let valor = document.querySelector(".inputAdd").value 
        console.log(valor)
        fetch ("https://randomuser.me/api/?results=" + valor)
        .then(resultado => resultado.json())
        .then(datos => {
            datos.results.map((dato) => {
            this.state.contactos.push(dato)})
            this.setState({contactos: this.state.contactos})
        })
    }

    filtroNombre = () => {

    }

    render () {
        return(
            <div>
                {/* boton de reset */}
                <div className="reset">
                   <button className="uk-button uk-button-default"
                    onClick= {this.reset.bind(this)}>Reset</button>
                </div>
                
                {/* adicionar tarjetas */}
                <div className="uk-margin"> 
                        <div> Deseas agregar</div>
                        <input className="inputAdd" type="number" ></input>
                        <button onClick={this.agregar.bind(this)}>Agregar</button>
                </div> 

                <div className="" uk-grid="true"> 
                {this.state.contactos.map( (item) => {
                        return (
                            <Tarjeta 
                            nombre={item.name.first} 
                            apellido={item.name.last} 
                            id={item.login.uuid} 
                            foto={item.picture.large} 
                            edad={item.dob.age} 
                            mail={item.email} 
                            fecha={item.dob.date} 
                            color="white" 
                            key={item.login.uuid} 
                            onDelete={this.borrar.bind(this)}
                            direccion={item.location} 
                            registro={item.registered.date}
                            telefono={item.cell}
                            />

                        )
                    })
                }
                </div>
            </div>
        )}
}

export default Tarjetas;
