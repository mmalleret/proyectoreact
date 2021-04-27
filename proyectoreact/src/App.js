import './App.css'
import Container from './components/Container'
import Navbar from './components/Navbar'
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
            <div className="uk-flex-middle" uk-grid="true" >
                <div className="uk-width-1-3@m uk-flex-first footer">
                    <p href="" uk-icon="icon: users"> Hamra - Kearney - Malleret</p> 
                    <br></br>
                    <p href="" uk-icon="icon: star"> Programación III - Proyecto React </p>
                </div>
            </div>
      </footer>


  </div>
  );
}

export default App;
