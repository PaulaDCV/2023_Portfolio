import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <div className=" flex flex-row  justify-center  items-stretch  w-full">
            <div id="buttonContainer"
                 className="  flex  flex-col flex-1 justify-evenly items-end basis-1/3 min-h-full">
                <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                    <AiFillGithub className="text-accent text-6xl hover:scale-125 hover:shadow-md hover:shadow-navbar "/>
                </a>
                <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                    <AiFillLinkedin className="text-accent text-6xl hover:scale-125 hover:shadow-md hover:shadow-navbar"/>
                </a>
            </div>
            <ContactForm/>
        </div>)
}