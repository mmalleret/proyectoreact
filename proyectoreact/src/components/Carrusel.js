import Itemcarrusel from "./Itemcarrusel";

function Carrusel() {
    return(

            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
            <ul className="uk-slider-items uk-child-width-1-4@s" uk-grid="true" >
                <Itemcarrusel image="Imagenes/perfil.jpg" fullname="Nombre Apellido" edad="edad" mail="Email" fecha="Fecha de nacimiento"/>
                <Itemcarrusel image="Imagenes/perfil.jpg" fullname="Nombre Apellido" edad="edad" mail="Email" fecha="Fecha de nacimiento"/>
                <Itemcarrusel image="Imagenes/perfil.jpg" fullname="Nombre Apellido" edad="edad" mail="Email" fecha="Fecha de nacimiento"/>
                <Itemcarrusel image="Imagenes/perfil.jpg" fullname="Nombre Apellido" edad="edad" mail="Email" fecha="Fecha de nacimiento"/>
                <Itemcarrusel image="Imagenes/perfil.jpg" fullname="Nombre Apellido" edad="edad" mail="Email" fecha="Fecha de nacimiento"/>
            </ul>

                {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

            </div>
        );
    }
    export default Carrusel;