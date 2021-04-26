import React, {Component} from 'react';

class Tarjeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorfondo: props.color,
            icon: "plus-circle",
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

    cambiarIcono = () => {
        if(this.state.icon === 'minus-circle') {
            this.setState({
                icon: 'plus-circle',
            })
        } else {
            this.setState({
                icon: 'minus-circle'
            })
        }
    }

    render() {
        return(
            <div className="uk-card uk-card-default uk-card-body" style={{backgroundColor: this.state.colorfondo}}
            onMouseEnter = { () => this.cambiarColor("#DED1E1")}
            onMouseLeave = { () => this.cambiarColor("white")}
            >

                <div className="uk-card-body">
                        <ul className="uk-list uk-iconnav uk-iconnav-vertical">
                            <div className="uk-card-media-top">
                                <img src={this.props.foto} alt=""/>
                            </div>
                            <li>{this.props.nombre} {this.props.apellido}</li>
                            <li>{this.props.fecha} ({this.props.edad})</li>
                            <li>{this.props.mail}</li>
                            <ul className="uk-iconnav iconos-tarjeta">
                                <li><a uk-icon="icon: arrow-left"></a></li>
                                <li onClick = { () => this.cambiarColor("#AFB8FB")}> <a uk-icon="icon: heart" ></a> </li>
                                <li onClick = {this.props.onDelete.bind(this, this.props.id)}> <a uk-icon="icon: trash"></a> </li>
                                <li onClick = { () => this.cambiarClase("block")}> <a onClick= {() => this.cambiarIcono("minus-circle")} uk-icon="icon: plus-circle"></a> </li>
                                <li><a uk-icon="icon: arrow-right"></a></li>
                            </ul>
                        </ul>

                    <div style={{display: this.state.display}} icon={{icon: this.state.icon}}> 
                        <ul className="uk-list">
                            <li>{this.props.direccion.street.name} {this.props.direccion.street.number}</li>
                            <li>{this.props.direccion.state}/{this.props.direccion.country}</li>
                            <li>{this.props.telefono}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Tarjeta;
