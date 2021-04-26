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
        fetch("https://randomuser.me/api/?results=12")
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

    // mover = (posicion) => {


    // }

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

    submit = () => {
        let nombre = document.querySelector(".inputNombre").value
        //let apellido = document.querySelector(".inputApellido").value
        //let edad = document.querySelector(".inputEdad").value
        
        let resultado = this.state.contactos.filter((dato) =>{
            console.log(dato.name.first)
             return dato.name.first === nombre;
         })
         this.setState({
            contactos: resultado
        })

    }

    render () {
        return(
            <div className="container">
                <ul class="uk-iconnav eventos-container">

                    {/* adicionar tarjetas */}
                    <li>
                        <div className="uk-margin"> 
                                <input className="inputAdd" type="number" ></input>
                                <button className="uk-button uk-button-default uk-button-small" onClick={this.agregar.bind(this)}>Agregar</button>
                        </div> 
                    </li>

                    {/* filtros */}
                    <li>
                        <div className="uk-margin"> 
                                <input className="inputNombre" type="text" placeholder="Nombre"></input>
                                <input className="inputApellido" type="text" placeholder="Apellido"></input>
                                <input className="inputEdad" type="text" placeholder="Edad"></input>
                                <button className="uk-button uk-button-default uk-button-small" onClick={this.submit.bind(this)}>Filtrar</button>
                        </div>
                    </li>

                    {/* boton de reset */}
                    <li>
                        <div className="reset uk-margin">
                            <button className="uk-button uk-button-default uk-button-small"><a href="" uk-icon="icon: refresh" onClick= {this.reset.bind(this)}></a></button>
                        </div>
                    </li>
                </ul>

                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container" uk-grid="true"> 
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
                            // onChange={this.posicion.bind(this)}
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
