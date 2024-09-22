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
import portfoilo from "./components/assests/portfoilo.PNG"
import food from "./components/assests/food.PNG"





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

    <Card  title="Quadrant Finder"  imageUrl={QF} desc="Quadrant Finder is a user-friendly application built with Streamlit for an interactive frontend and Python for the underlying logic. " href="https://github.com/zuhaib589/Python/blob/main/qudrant.py" /> 
    <Card title="Calculator"  imageUrl={Cal} desc="Calculator is a versatile and intuitive application designed with Streamlit for a seamless user experience and Python for its powerful backend." href="https://github.com/zuhaib589/Python/blob/main/calculator.py" />
    <Card title="portfolio"  imageUrl={portfoilo} desc="Copying my instructor's portfolio would undermine my personal growth and originality as a developer. " href="https://github.com/zuhaib589/SMIT-batch-7-MWAD/tree/main/Assignment%205"/>
    <Card title="Food website"  imageUrl={food} desc="This simple food website is built using Bootstrap for a responsive and clean design. It showcases with a user-friendly interface. " href="https://github.com/zuhaib589/Advance_Wordpress-/tree/main/Bootstrap"/>

  

    </div>

    <Contact/>
    
    </div>

  )
}

export default App;
