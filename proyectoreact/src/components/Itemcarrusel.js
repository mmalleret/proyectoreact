function Navbar() {
    return(
        <li>
            <div className="uk-child-width-1-1@m" uk-grid>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={"Imagenes/perfil.jpg"} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Nombre Apellido, Edad</h3>
                            <ul>
                                <li>Mail</li>
                                <li>Fecha de nacimiento</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        );
}
export default Navbar;
