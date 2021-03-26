function ItemCarrusel(props) {
    return(
        <li>
            <div className="uk-child-width-1-1@m" uk-grid="true" >
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={props.image} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">{props.fullname + " (" + props.edad + ")"}</h3>
                            <ul>
                                <li>{props.mail}</li>
                                <li>{props.fecha}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        );
}
export default ItemCarrusel;
