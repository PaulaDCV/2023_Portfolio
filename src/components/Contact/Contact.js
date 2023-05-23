import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (<div className=" flex flex-row items-center ">
        <div className="flex flex-wrap  flex-1 ">
            <div id="buttonContainer"
                 className="flex flex-col flex-1 justify-center items-center  ">
                <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                    <AiFillGithub className="text-accent text-6xl hover:scale-125 hover:shadow-md hover:shadow-navbar "/>
                </a>
                <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                    <AiFillLinkedin className="text-accent text-6xl hover:scale-125 hover:shadow-md hover:shadow-navbar"/>
                </a>
            </div>
            <div className=" text-accent flex-1  basis-2/3 w-2/3">
                <ContactForm/>
            </div>
        </div>
    </div>)
}