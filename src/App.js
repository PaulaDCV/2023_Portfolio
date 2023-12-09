import './App.css';
import SectionLayout from './components/SectionLayout'
import NavBar from './components/NavBar';
import About from './components/About';
import {Element} from 'react-scroll'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Intro from "./components/Intro";
import Wave from 'react-wavify'
import {useEffect, useState} from "react";

function App() {
    const sections = [
        {
            id: 'about', title: 'About', content: <About/>, bg: "bg-indigo-900",
        }, {
            id: 'projects', title: 'Projects', content: <Projects/>, bg: "bg-indigo-800",
        }, {
            id: 'contact', title: 'Contact', content: <Contact/>, bg: "bg-indigo-700",
        },
    ];
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const navbarClass = isNavbarVisible ? 'bg-white' : 'text-red200';
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 200;
            // Toggle the navbar visibility based on the scroll position
            setIsNavbarVisible(scrollPosition > threshold);
            console.log(scrollPosition > threshold)
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<div className=" ">
        {isNavbarVisible ? <NavBar classname={navbarClass}/> : <div></div>}
        <Intro/>

        <div className=" App flex flex-col justify-between bg-section ">

 <hr
                    className="my-6 h-px border-t-0 bg-gradient-to-r from-transparent via-accent
                    to-transparent opacity-50 dark:opacity-100"/>
            {sections.map((section) => (<div className=" z-49 bg-section">
                <Element id={section.id}>
                    <SectionLayout title={section.title} content={section.content} bg={section.bg}> </SectionLayout>
                </Element>
                <hr
                    className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-accent
                    to-transparent opacity-50 dark:opacity-100"/>
            </div>))}
        </div>


    </div>);
}

export default App;
