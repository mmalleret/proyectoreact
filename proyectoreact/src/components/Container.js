import Tarjeta from './Tarjeta';
import React, {Component} from 'react';
//import contactos from appi

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactos: datos,
        }
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
            contactos: datos,
        })
    }

    render() {
        return(
            <div>
                <div className="reset">
                   <button className="uk-button uk-button-default"
                    onClick= {this.reset.bind(this)}>Reset</button>
                </div>
                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container" uk-grid="true"> {
                    this.state.contactos.map((item) => {
                        return (
                            < Tarjeta name={item.name} id={item.id} edad={item.edad} mail={item.mail} fecha={item.fecha}  image={item.image} color="white" key={item.id} onDelete={this.borrar.bind(this)} />
                        )
                    })
                }
                </div>
            </div>
        )
    }

}

export default Tarjetas;
