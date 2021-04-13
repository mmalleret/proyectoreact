import Itemtarjeta from './Itemtarjeta';
import React, {Component} from 'react';

class Tarjetas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personajes: datos,
        }
    }

    borrarTarjeta = (key) => {
        this.setState({personajes: this.state.personajes.filter(item => item.id !== key)})
        console.log(key);
    }

    render() {
        return(
            <div>
                <div className="reset">
                   <button className="uk-button uk-button-default">Reset</button>
                </div>
                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container" uk-grid="true"> {
                    this.state.personajes.map((item, idx) => {
                        return (
                            < Itemtarjeta name={item.name} id={item.id} edad={item.edad} mail={item.mail} fecha={item.fecha}  image={item.image} color="white" key={idx} onDelete={this.borrarTarjeta.bind(this)} />
                        )
                    })
                }
                </div>
            </div>
        )
    }

}

export default Tarjetas;
