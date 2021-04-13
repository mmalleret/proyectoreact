import React, {Component} from 'react';

class Itemtarjeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorfondo: props.color,
            datos: props.datos,
        }
    }

    cambiarColor = (color) => {
        if (this.state.colorfondo !== '#AFB8FB') {
            this.setState({
                colorfondo: color,
            })
            console.log("Cambiamos el color de fondo" + color);
        } else {
            this.setState({
                colorfondo: '#AFB8FB'
            })
        }
    }

    render() {
        return(
            <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor: this.state.colorfondo}}
            onMouseEnter = { () => this.cambiarColor("#DED1E1")}
            onMouseLeave = { () => this.cambiarColor("white")}
            >
                <div className="uk-card-media-top">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="uk-card-body">
                    <ul className="uk-list">
                        <li>{this.props.name}</li>
                        <li>{this.props.edad}</li>
                        <li>{this.props.mail}</li>
                        <li>{this.props.fecha}</li>
                        <li onClick = { () => this.cambiarColor("#AFB8FB")}> <button className="uk-button uk-button-default" >Cambiar color</button> </li>
                        <li onClick = {this.props.onDelete.bind(this, this.props.id)}> <button className="uk-button uk-button-default">Borrar</button> </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Itemtarjeta;
