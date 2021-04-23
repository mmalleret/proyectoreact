import React, {Component} from 'react';

class Tarjeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorfondo: props.color,
            display: "none"
        }
    }

    cambiarColor = (color) => {
        if (this.state.colorfondo !== '#AFB8FB') {
            this.setState({
                colorfondo: color,
            })
        } else {
            this.setState({
                colorfondo: '#AFB8FB'
            })
        }
    }

    cambiarClase = () => {
        if (this.state.display === 'block' ) {
        this.setState({
            display: 'none',
        })
        } else {
        this.setState({
            display: 'block'
        })
    }}

    render() {
        return(
            <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor: this.state.colorfondo}}
            onMouseEnter = { () => this.cambiarColor("#DED1E1")}
            onMouseLeave = { () => this.cambiarColor("white")}
            >
                <div className="uk-card-media-top">
                    <img src={this.props.foto} alt=""/>
                </div>
                <div className="uk-card-body">
                    <ul className="uk-list">
                        <li>{this.props.nombre} {this.props.apellido}</li>
                        <li>{this.props.fecha} ({this.props.edad})</li>
                        <li>{this.props.mail}</li>
                        <li onClick = { () => this.cambiarColor("#AFB8FB")}> <button className="uk-button uk-button-default" >Cambiar color</button> </li>
                        <li onClick = {this.props.onDelete.bind(this, this.props.id)}> <button className="uk-button uk-button-default">X</button> </li>
                        <li onClick = { () => this.cambiarClase("block")}> <button className="uk-button uk-button-default">Detalle</button> </li>
                    </ul>
                    <div style={{display: this.state.display}}> 
                        <ul className="uk-list">
                            <li>{this.props.direccion.street.name} {this.props.direccion.street.number}</li>
                            <li>{this.props.direccion.state}/{this.props.direccion.country}</li>
                            <li>{this.props.mail}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Tarjeta;
