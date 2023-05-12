import CardContainer from "./CardContainer.js";
import {Select,Option} from "@material-tailwind/react";
//ToDo: add list of projects
//ToDo: Add searchbar

export default function Projects() {
     const projects = [
         {title: "Propaganda Classification", description: "In this project I evaluated a Random Forest  and RoBERTa " +
                 "model when classifying propaganda and different proopaganda techniques",
             skills: ["Text Classification","NLP","Python","Altair"]},
         {title: "An exploration of discussions and sentiments of ADHD communities on social media using reddit",
             description: "This project was my masters dissertation, I evaluated how people with ADHD communicate " +
                 "online and how this differs from other communities. A further evaluation was done in comparison" +
                 " to covid-19", skills: ["Sentiment Analysis","Topic Modelling",
                 "Data Visualization","NLP","Python"]},
         {title: "IMDB analysis ", description: " I analyzed the dataset to gain insights into movie trends and " +
                 "popularity over time", skills: ["Data Visualisation","","Python"]}

    ];
  return (
      <div className={"bg-indigo-800/50 min-h-screen "}>
        <div className={"flex-col  py-6 flex  w-full  items-center"}>
              <h1 className={" w-3/4 text-left text-accent text-5xl"}>Projects</h1>
        <div className="py-8 w-72">
          <Select label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
      <div className="flex flex-row flex-wrap justify-items-center justify-evenly " >
        {projects.map((data) => (
            <CardContainer
              description ={data.description}
              title ={data.title}
              skills ={data.skills}/>
        ))}

            </div>
        </div>
    </div>
  );
}