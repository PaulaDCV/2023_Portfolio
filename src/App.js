import './App.css';
import NavBar from './components/NavBar';
import About from "./components/About";
import {Element} from 'react-scroll'
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (<div className="">
        <NavBar/>
        <Element className="" id="">
             <div className="h-screen">hi</div>
        </Element>
        <div className="App flex flex-col justify-between  bg-primary-dark">
            <Element className=" " id="about">
                <About id="about"/>
            </Element>
            <Element className=" " name="projects">
                <Projects id = "projects"/>
            </Element>
            <Element  className=" " name="contact">
                <Contact/>
            </Element>


        </div>


    </div>);
}

export default App;
