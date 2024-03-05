import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header.jsx';
import Galeria from './componentes/Galeria.jsx';
import Footer from './componentes/Footer.jsx';

function App() {

  return (
    <>
      <Header titulo= "Adopta a un Perrito"/>
      <Galeria />
      <Footer parrafo="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </>
  )
}

export default App;
