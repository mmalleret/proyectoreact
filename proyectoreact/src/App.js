import Container from './components/Container'
import Navbar from './components/Navbar';
import Imagen from './components/Imagen'

function App() {
  return (
  <div id="wrapper">

    

    {/* Imagen */}
    
      <div className="uk-section-default"> 
        <Imagen/>
      </div>

      {/* Navbar */}

      <nav className="uk-navbar-container" uk-navbar="true" >
        <div className="uk-navbar-left">
          <Navbar/>
        </div>
      </nav>
    
      <Container/>
  

     {/* Footer */}
    
    <br/>
    <footer className="page-footer">
        <div className="container">
            <div className="uk-flex-middle" uk-grid="true" >
                <div className={"uk-width-2-3@m"}>
                    <p></p>
                </div>
                <div className={"uk-width-1-3@m uk-flex-first"}>
                  <h5>Contactate con Nosotras</h5>
                <ul className="icons uk-column-1-2 uk-column-divider">
                    <li><span><i className="fab fa-facebook"> ConnectIN</i></span></li>
                    <li><span><i className="fab fa-twitter"> ConnectIN.app</i></span></li>
                    <li><span><i className="fab fa-instagram"> ConnectIN</i></span></li>
                    <li><span><i className="fab fa-linkedin"> ConnectIN</i></span></li>
                </ul>  
                </div>
            </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            @ConnectIN Season I
          </div>
        </div>
      </footer>


  </div>
  );
}

export default App;
