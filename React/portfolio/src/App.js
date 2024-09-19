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
import QF from "./components/assests/QF.PNG"
import Cal from "./components/assests/cal.PNG"




function App() {
  return (
    <div >

    <Header/>

    <HeroSection/>

    <Service/>
    <div id="Worked">
    <h1> Few Projects </h1>
     </div>

    <div id='cards'>

    <Card  title="Quadrant Finder"  imageUrl={QF} desc="Quadrant Finder is a user-friendly application built with Streamlit for an interactive frontend and Python for the underlying logic. " /> 
    <Card title="Calculator"  imageUrl={Cal} desc="Calculator is a versatile and intuitive application designed with Streamlit for a seamless user experience and Python for its powerful backend. "/>
    <Card title="pro3"  imageUrl="" />
    <Card title="pro4"  imageUrl="" />
    <Card title="pro5"  imageUrl="" />
    <Card title="pro6"  imageUrl="" />

    </div>

    <Contact/>
    
    </div>

  )
}

export default App;
