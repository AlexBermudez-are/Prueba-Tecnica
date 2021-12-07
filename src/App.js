import './App.css';
import ojo from './Assets/ojo.png'
import Body from './Components/Body';
import BodyBtns from './Components/BodyBtns';
import Footer from './Components/Footer';
import Info from './Components/Info';

function App() {
  return (
    <div>
      <section className="ref-Logeo">
        <p style={{ margin: "0px", paddingRight: ".5%" }}>Existing Customers</p>
        <a href="#redireccion">LOG IN THERE</a>
      </section>
      <section className="Empresa-Numero">
        <div className="nombre-Empresa">
          <section><img src={ojo} alt="vector-ojo" /></section>
          <section style={{ display: "flex" }}>
            <h2 className="Text-international">INTERNATIONAL</h2>
            <h2 className="text-PSYCHICS">PSYCHICS</h2>
          </section>
        </div>
        <div className="Num-Contacto">
          <h3 className="texto-Call">Call:</h3>
          <h3 className="numero-Tel">1.525.545.6854</h3>
        </div>
      </section>
      <Body />
      <BodyBtns />
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
