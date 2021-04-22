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
        fetch("https://randomuser.me/api/?results=40")
        .then(result => result.json())
        .then( data => { 
            this.setState({contactos: data.results, contactosOriginales: data.results})
        })    
    }   

    borrar = (cardId) => {
        let resultado = this.state.contactos.filter((dato) =>{
            console.log(dato.id, cardId, dato.id !== cardId)
             return dato.id !== cardId
         })
         this.setState({contactos: resultado})
    }

    reset = () => {
        this.setState({
            contactos: this.state.contactosOriginales,
        })
    }

    render () {
        return(
            <div>
                <div className="reset">
                   <button className="uk-button uk-button-default"
                    onClick= {this.reset.bind(this)}>Reset</button>
                </div>
                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container" uk-grid="true"> 
                {this.state.contactos.map( (item) => {
                        return (
                            <Tarjeta nombre={item.name.first} apellido={item.name.last} id={item.login.uuid} foto={item.picture.large} edad={item.dob.age} mail={item.email} fecha={item.dob.date} color="white" key={item.login.uuid} onDelete={this.borrar.bind(this)} />
                        )
                    })
                }
                </div>
            </div>
        )}
}

export default Tarjetas;
