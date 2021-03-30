function ItemCarrusel(props) {
    return(
        <div>
            <div className="uk-card uk-card-default uk-card-body" id='tarjeta'>
                    <div className="uk-card-media-top">
                        <img src={props.src} alt="" width="250" height="250"/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{props.fullname} - {props.edad}</h3>
                        <p>{props.fecha}</p>
                        <p>{props.mail}</p>
                    </div>
            </div>
        </div>
        );
}
export default ItemCarrusel;
