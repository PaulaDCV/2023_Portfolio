import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {Button} from "@material-tailwind/react";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <div className={"bg-indigo-900/50 h-screen py-6 flex-col  flex h-v  w-full items-center"}>
            <h1 className={" w-3/4 text-left text-accent text-5xl"}>Contact </h1>
            <div className=" flex flex-row items-center w-3/4">
                <div className="basis-1/2 flex-1 flex justify-around flex-wrap content-center items-center ">
                    <div  id = "buttonContainer" className= "  h-full basis-1/3 flex-1 flex justify-around flex-wrap content-center items-center ">
                       <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                           <AiFillGithub className="text-accent text-6xl"/>
                       </a>
                        <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                           <AiFillLinkedin className="text-accent text-6xl"/>
                        </a>
                    </div>
                    <div className=" text-accent flex-1  basis-2/3 w-1/2">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>)
}