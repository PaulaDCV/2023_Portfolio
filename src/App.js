import './App.css';
import NavBar from './components/NavBar';
import About from "./components/About";
import {Element} from 'react-scroll'
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (<div className="">
        <NavBar/>
        <div className="App flex flex-col justify-between  bg-primary-dark">
            <Element className="py-8 " id="about">
                <About id="about"/>
            </Element>
            <Element className="py-8 " name="projects">
                <Projects id = "projects"/>
            </Element>
            <Element  className="py-8 " name="contact">
                <Contact/>
            </Element>


        </div>


    </div>);
}

export default App;
