import Carrusel from './components/Carrusel';
import Navbar from './components/Navbar';

function App() {
  return (
  <div id="wrapper">

    {/* Navbar */}
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <Navbar/>
        </div>
      </nav>

    {/* Carrusel */}
    <div className="uk-slider-container-offset" uk-slider>
        <Carrusel/>
    </div>



  </div>
  );
}

export default App;
