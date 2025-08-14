import logo from './logo.svg';
import './style/reset.css'
import './App.scss';

function App() {
  return (
    <div className="App">
    <nav>
        <ul>
            <li><a href="./produits.html">Produits</a></li>
            <li><a href="./prestations.html">Prestation</a></li>
            <li></li>
            <li><a href="./evenements.html">Evènements</a></li>
            <li><a href="./contact.html">Nous contacter</a></li>
        </ul>
    </nav>
    <section class="banner_container">
        <a href="./index.html">
        <div class="logo_container"><img src="../src/assets/img/Logo_texte_blanc.png" alt=""/></div>
        <img src="../src/assets/img/night-starry-sky-forest-silhouette-astronomy-cosmos-5k-3440x1440-1679.jpg" alt=""/>
        <div class="banner_layer"></div>
        </a>
    </section>
    </div>
  );
}

export default App;
