function Navbar() {
    return(
        <ul className="uk-navbar-nav">
            <li className="uk-active"><a href="index.html">Home</a></li>
            <li>
                <a href="#">Order</a>
                <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="#">A-Z</a></li>
                        <li><a href="#">Z-A</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        

        );
}
export default Navbar;

