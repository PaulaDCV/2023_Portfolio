import CardContainer from "./Projects/CardContainer.js";
// import {Select,Option} from "@material-tailwind/react";
import Modal from 'react-modal';
import {useState} from "react";
import CardModal from "./Projects/CardModal";

//ToDo: Fix buttons
//ToDo: Add searchbar

export default function Projects() {
    const customStyles = {
  content: 'max-w-lg mx-auto my-4 rounded-lg',
  overlay:"",
};
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const projects = [
        {
            title: "Propaganda Classification",
            description: "In this project I evaluated a Random Forest  and RoBERTa " +
                "model when classifying propaganda and different proopaganda techniques",
            skills: ["Text Classification", "NLP", "Python", "Altair"],
            image: "../ADHD.png"
        },
        {
            title: "An exploration of discussions and sentiments of ADHD communities on social media using reddit",
            description: "This project was my masters dissertation, I evaluated how people with ADHD communicate " +
                "online and how this differs from other communities. A further evaluation was done in comparison" +
                " to covid-19", skills: ["Sentiment Analysis", "Topic Modelling",
                "Data Visualization", "NLP", "Python"]
        },
        {
            title: "IMDB analysis ", description: " I analyzed the dataset to gain insights into movie trends and " +
                "popularity over time", skills: ["Data Visualisation", "", "Python"]
        },
        {
            title: "Game of Craps run simulation ",
            description: " Simulating a running a game of craps and evaluating the " +
                "results after some games.",
            skills: ["Statistics", "C++"]
        },
        {
            title: "Web application to track wellbeing", description: "This project was part of my undergraduate " +
                "dissertation where I designed and developed and app to keep logs of different health and daily variables" +
                " and find basic relationships between them", skills: ["Web Development", "Python", "Django", "React"]
        }
    ];
    return (
        <div className={"bg-indigo-800/50 min-h-screen "}>
            <div className={"flex-col  py-6 flex  w-full  items-center"}>
                <h1 className={" w-3/4 text-left text-accent text-5xl"}>Projects</h1>
                {/*<div className="py-8 w-72">
          <Select label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>*/}
                <div className="flex flex-row flex-wrap justify-items-center justify-evenly ">
                    {projects.map((data) => (
                        <CardContainer
                            description={data.description}
                            title={data.title}
                            skills={data.skills}
                            imageRef={data.image}
                            onClick={() => handleCardClick(data)}
/>
                    ))}

                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Card Modal"
        className="max-w-lg mx-auto my-4 rounded-lg text-accent bg-indigo-800  "
        overlayClassName= " fixed inset-0 flex justify-center items-center "
            >
                {selectedCard && (
                  <CardModal selectedCard = {selectedCard}/>
                )}
            </Modal>

        </div>
    );
}