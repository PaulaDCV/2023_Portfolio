import './App.css';
import SectionLayout from './components/SectionLayout'
import NavBar from './components/NavBar';
import About from './components/About';
import {Element} from 'react-scroll'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Intro from "./components/Intro";
import Wave from 'react-wavify'

function App() {
    const sections = [
        {
        id: 'about', title: 'About', content: <About/>, bg: "bg-indigo-900",
    }, {
        id: 'projects', title: 'Projects', content: <Projects/>,bg: "bg-indigo-800",
    }, {
        id: 'contact', title: 'Contact', content: <Contact/>, bg: "bg-indigo-700",
    },
    ];
    return (<div className="">
        <NavBar/>
         <Intro/>

        <div className=" App flex flex-col justify-between   ">


            {sections.map((section) => (<div className="bg-section">
                    <Element id={section.id}>
                        <SectionLayout title={section.title} content={section.content} bg={ section.bg}> </SectionLayout>
                    </Element>
                <hr
                    className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-accent
                    to-transparent opacity-50 dark:opacity-100" />
                </div>))}
        </div>


    </div>);
}

export default App;
