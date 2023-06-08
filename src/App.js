import './App.css';
import SectionLayout from './components/SectionLayout'
import NavBar from './components/NavBar';
import About from './components/About';
import {Element} from 'react-scroll'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
    const sections = [
          {
        id: '', title: '', content:    <div className="h-screen">hi</div>,
    },
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

        <div className="App flex flex-col justify-between bg-section  ">

            {sections.map((section) => (<div>
                    <Element id={section.id} className = {""}>
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
