import CardContainer from "./CardContainer.js";
// import {Select,Option} from "@material-tailwind/react";
import Modal from 'react-modal';
import {useEffect, useState} from "react";
import CardModal from "./CardModal";
import axios from 'axios';
import { Remarkable } from 'remarkable';

//ToDo: Fix buttons
//ToDo: Add searchbar

export default function Projects() {
const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON file containing project data
        const jsonFileResponse = await axios.get("/Projects/projects.json");
        const projectDataArray = jsonFileResponse.data;

        // Loop through each project object
        const processedProjects = await Promise.all(
          projectDataArray.map(async (project) => {
            // Fetch the corresponding Markdown file for each project
            const markdownFileResponse = await axios.get(`/Projects/${project.id}.md`);
            const markdownContent = markdownFileResponse.data;

            // Parse the Markdown content
            const md = new Remarkable();
            const parsedContent = md.render(markdownContent);

            // Create a complete project object with parsed Markdown content
            const completeProject = {
                  id: project.id,
                  title: project.title,
                  description: project.description,
                  long_description: parsedContent,
                  // Include other project properties from the JSON file
                  images: project.images,
                  tags: project.tags,
                  // Include any other relevant properties
            };

            return completeProject;
          })
        );

        // Update the state with the complete project objectsc

        setProjects(processedProjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
            <div className={"flex-col  py-6 flex  w-full  items-center"}>
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
                    {projects.map((data) => (<CardContainer
                            description={data.description}
                            title={data.title}
                            skills={data.skills}
                            imageRef={data.image}
                            onClick={() => handleCardClick(data)}
                        />))}

                </div>


                <div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Card Modal"
                className="max-w-lg mx-auto my-4 rounded-lg text-accent bg-indigo-800  "
                overlayClassName=" fixed inset-0 flex justify-center items-center "
            >
                {selectedCard && (<CardModal selectedCard={selectedCard}/>)}
            </Modal>
</div>
        </div>
    );
}