import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import {useState} from "react";
import Modal from "react-modal";
import {AiFillGithub} from "react-icons/ai";

export default function CardContainer(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="overflow-hidden h-[15rem] w-[40rem] m-2 rounded-3xl  bg-accent-dark/[.20] flex justify-evenly relative">

            <img src={props.imageRef}
                 alt={props.imageRef}
                 className="w-[15rem]  object-cover max-h-lg"/>

            <div className="w-[25rem] h-full pt-1  flex justify-between items-stretch flex-col
                    max-w-lg max-h-lg">
                <h1 className="text-center px-6 text-accent font-semibold text-xl">
                    {props.title}
                </h1>
                <p className="text-justify px-2 text-accent text-xs">
                    {props.description}
                </p>
                <div className={"flex justify-around text-accent "}>
                {/*    <button className="text-accent text-lg hover:scale-125   " onClick={props.onClick}>
                        Read more...
                    </button>*/}
                      <a href={"https://github.com/PaulaDCV/2023_Portfolio"}>
                        <AiFillGithub className="text-accent text-lg hover:scale-125  "/>
                    </a>
                </div>
                <div className="flex flex-row  flex-wrap justify-items-center  items-center justify-evenly w-full
                bg-accent-dark/[.30] ">
                    {props.skills?.map((skill) => (
                        <label className={"text-accent-dark text-sm"}
                               disabled={true}>
                            {skill}
                        </label>))}

                </div>
            </div>

        </div>
    )
}