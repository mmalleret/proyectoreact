import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Tarjeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorfondo: props.color,
            icon: "icon: plus-circle",
            display: "none",
            selectedDate: new Date(props.fecha),
            registeredDate: new Date(props.registro)
        }
    }

    cambiarColor = (color) => {
        if (this.state.colorfondo !== '#AFB8FB') {
            this.setState({
                colorfondo: color,
            })
        } else {
            this.setState({
                colorfondo: "#AFB8FB"
            })
        }
    }
    
    favoritos = (color) => {
        if (this.state.colorfondo !== '#AFB8FB') {
            this.setState({
                colorfondo: color,
            })
        } else {
            this.setState({
                colorfondo: "white"
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
        if(this.state.icon === 'icon: minus-circle') {
            this.setState({
                icon: 'icon: plus-circle',
            })
        } else {
            this.setState({
                icon: 'icon: minus-circle'
            })
        }
    }


    render() {
        return(
            <div className="texto"  style={{backgroundColor: this.state.colorfondo}}
            onMouseEnter = { () => this.cambiarColor("#DED1E1")}
            onMouseLeave = { () => this.cambiarColor("white")}
            >

                <div className="uk-card-body">
                        <ul className="uk-list uk-iconnav uk-iconnav-vertical">
                            <div className="uk-card-media-top">
                                <img src={this.props.foto} alt=""/>
                            </div>
                            <li>{this.props.nombre} {this.props.apellido} ({this.props.edad})</li>
                            <li>{this.props.mail}</li>
                            
                            <li>
                                Fecha de nacimiento: < DatePicker selected={this.state.selectedDate}  dateFormat='dd/MM/yyyy' filterDate={date => date.getDate()} showYearDropdown showFullMonthYearPicker style={{backgroundColor:"red"}}/> 
                            </li>
                            <ul className="uk-iconnav iconos-tarjeta">
                                <li onClick = {this.props.onChangeLeft.bind(this, this.props.id)}><a uk-icon="icon: arrow-left"></a></li>
                                <li onClick = { () => this.favoritos("#AFB8FB")}> <a uk-icon="icon: heart" ></a> </li>
                                <li onClick = {this.props.onDelete.bind(this, this.props.id)}> <a uk-icon="icon: trash"></a> </li>
                                <li onClick = { () => this.cambiarClase("block")}> <a onClick= {() => this.cambiarIcono("icon: minus-circle")} uk-icon={this.state.icon}></a> </li>
                                <li onClick = {this.props.onChangeRight.bind(this, this.props.id)}><a uk-icon="icon: arrow-right"></a></li>
                            </ul>
                        </ul>

                    <div style={{display: this.state.display}}> 
                        <ul className="uk-list">
                            <li>{this.props.direccion.street.name} {this.props.direccion.street.number}</li>
                            <li>{this.props.direccion.city}, {this.props.direccion.state}, {this.props.direccion.country}</li>
                            <li>Fecha de registro: < DatePicker selected={this.state.registeredDate}  dateFormat='dd/MM/yyyy' filterDate={date => date.getDate()} showYearDropdown showFullMonthYearPicker style={{backgroundColor:"red"}}/> </li>
                            <li>Número de telefono: {this.props.telefono}</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Tarjeta;
