import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/Header';
import "./components/header/header.css"
import HeroSection from "./components/HeroSection"
import Card from "./components/cards/Card"
import "./components/cards/card.css"
import Service from './components/services/Service';
import "./components/services/service.css"




function App() {
  return (
    <div >

    <Header/>

    <HeroSection/>

    <Service/>
    <div id="Worked">
    <h1> Where I've Worked</h1>
     </div>
    <div id='cards'>
    <Card title="pro1" />
    <Card title="pro2" />
    <Card title="pro3" />
    <Card title="pro4" />
    <Card title="pro5" />
    <Card title="pro6" />
    </div>
    
    </div>

  )
}

export default App;
