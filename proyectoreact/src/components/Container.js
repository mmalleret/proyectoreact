import React, {Component} from 'react';
import Tarjeta from './Tarjeta';

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactos: [],
            contactosOriginales: [],
            value: '',
            vista: ''

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

    moverLeft = (posicion) => {
        let lugar = this.state.contactos.findIndex((objeto) => {
            return objeto.login.uuid === posicion; 
        })
        
        let eliminar  = this.state.contactos.splice(lugar, 1)[0] 
        
        console.log(eliminar)

        let nuevoLugar = lugar-1
        
        let agregar = this.state.contactos.splice(nuevoLugar, 0, eliminar)
        
        this.setState({
            contactos: this.state.contactos
        })

        
    }

    moverRight = (posicion) => {
        let lugar = this.state.contactos.findIndex((objeto) => {
            return objeto.login.uuid === posicion; 
        })
        
        let eliminar  = this.state.contactos.splice(lugar, 1)[0] 
        
        console.log(eliminar)

        let nuevoLugar = lugar+1
        
        let agregar = this.state.contactos.splice(nuevoLugar, 0, eliminar)
        
        this.setState({
            contactos: this.state.contactos
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

// COMBINACIONES FILTER nombre apellido edad - nombre apellido - nombre edad - apellido edad - nombre - apellido - edad -  

    submit = () => {
        let resultado = this.state.contactos.filter((dato) =>{
            console.log(dato.name.first)
             return (dato.name.first === this.state.nombre && dato.name.last === this.state.apellido) && dato.dob.age ===  parseInt(this.state.edad, 10) || 
             (dato.name.first === this.state.nombre && dato.name.last === this.state.apellido) || 
             (dato.name.first === this.state.nombre && dato.dob.age ===  parseInt(this.state.edad, 10)) ||
             (dato.name.last === this.state.apellido && dato.dob.age ===  parseInt(this.state.edad, 10)) ||
             (dato.name.first === this.state.nombre) || 
             (dato.name.last === this.state.apellido) || 
             (dato.dob.age ===  parseInt(this.state.edad, 10)) ;
         })
        
         this.setState({
            contactos: resultado
        })

    }

//  ESTE M??TODO NO FUNCIONA, LO AGREGAMOS PORQUE NOS ESTA FALTANDO UN DETALLE
    cambiarid = () => {

       let div = document.getElementsByClassName('mensajes');

        if (this.state.vista !== 'global' ) {
            
            
           div.classList.addClass('uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container')
        
        this.setState({
            vista: '',

        })
        } else {

            div.classList.removeClass('uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container')
        
           this.setState({
            vista: 'global'
        })
    }}

    render () {
        return(
            <div className="container" >
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

                                <input onChange={(event) => this.setState({nombre: event.target.value})} className="inputNombre" type="text" placeholder="Nombre"></input>
                                <input onChange={(event) => this.setState({apellido: event.target.value})} className="inputApellido" type="text" placeholder="Apellido"></input>
                                <input onChange={(event) => this.setState({edad: event.target.value})} className="inputEdad" type="number" placeholder="Edad"></input>
                                <button className="uk-button uk-button-default uk-button-small" onClick={this.submit.bind(this)}><a uk-icon="icon: search"></a></button>
                                
                        </div>
                    </li>

                    {/* boton de reset */}
                    <li>
                        <div className="reset uk-margin">
                            <button className="uk-button uk-button-default uk-button-small"><a href="" uk-icon="icon: refresh" onClick= {this.reset.bind(this)}></a></button>
                        </div>
                    </li>
                    
                    {/* boton de cambiar horizontal a vertical */}
                    <li>
                        <div className="reset uk-margin">
                            <button className="uk-button uk-button-default uk-button-small"><a href="" uk-icon="icon: desktop" onClick={() => this.cambiarid.bind('global')}></a></button>
                            {/* Ac?? va el bot??n que llama al m??todo cambiarId */}
                        </div>
                    </li>
                    
                </ul>

                <div id={this.state.vista}>
                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container mensajes" uk-grid="true" id="mensajes"> 
                {this.state.contactos.map((item) => {
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
                            onChangeLeft={this.moverLeft.bind(this)}
                            onChangeRight={this.moverRight.bind(this)}
                            direccion={item.location} 
                            registro={item.registered.date}
                            telefono={item.cell}
                            />

                        )
                    })
                }
                </div>
              </div>
            </div>
        )}
}

export default Tarjetas;
