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
import Contact from "./components/contact/Contact";
import "./components/contact/contact.css"




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
    <Card title="pro1"  imageurl="" />
    <Card title="pro2"  imageurl="" />
    <Card title="pro3"  imageurl="" />
    <Card title="pro4"  imageurl="" />
    <Card title="pro5"  imageurl="" />
    <Card title="pro6"  imageurl="" />
    </div>

    <Contact/>
    
    </div>

  )
}

export default App;
