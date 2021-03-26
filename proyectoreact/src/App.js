import Carrusel from './components/Carrusel';
import Navbar from './components/Navbar';
import Imagen from './components/Imagen'

function App() {
  return (
  <div id="wrapper">

    {/* Navbar */}
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <Navbar/>
        </div>
      </nav>
    {/* Imagen */}
    <div class="uk-section-default"> 
      <Imagen/>
    </div>
    {/* Carrusel */}
    <div className="uk-slider-container-offset" uk-slider>
        <Carrusel/>
    </div>



  </div>
  );
}

export default App;
