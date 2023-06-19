import CardContainer from "./CardContainer.js";
// import {Select,Option} from "@material-tailwind/react";
import Modal from 'react-modal';
import {useEffect, useState} from "react";
import CardModal from "./CardModal";
import axios from 'axios';
import { Remarkable } from 'remarkable';
import ReactMarkdown from 'react-markdown';

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
            const markdownFileResponse = await axios.get(process.env.PUBLIC_URL + `/Projects/${project.id}.md`);
            const markdownContent = markdownFileResponse.data;

            // Parse the Markdown content
            const md = new Remarkable({true: false});
            const parsedContent = md.render(markdownContent);

            // Create a complete project object with parsed Markdown content
            const completeProject = {
                  id: project.id,
                  title: project.title,
                  description: project.description,
                  longDescription: parsedContent,
                  // Include other project properties from the JSON file
                  images: project.images,
                  skills: project.skills,
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
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
         document.body.style.overflow = 'unset';
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
                <div className=" w-full flex flex-row flex-wrap  justify-center items-center   ">
                    {projects.map((data) => (<CardContainer
                            description={data.description}
                            title={data.title}
                            skills={data.skills}
                            imageRef={process.env.PUBLIC_URL+`/images/${data.id}.png`}
                            onClick={() => handleCardClick(data)
                            }
                        />
                   ))}

                </div>
                 <a className="prose text-accent underline hover:text-lg hover:text-gray-500" href="https://github.com/PaulaDCV"> More Projects</a>
                <div>

</div>
                <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Card Modal"
                className="overflow-scroll py-14 rounded-lg text-accent bg-primary-dark
                 h-3/4 w-3/4 z-50"
                overlayClassName="bg-intro/[0.8] z-50 fixed inset-0 flex justify-center items-center  "
                >
                    {selectedCard && (<CardModal selectedCard={selectedCard}/>)}
                </Modal>
        </div>
    );
}