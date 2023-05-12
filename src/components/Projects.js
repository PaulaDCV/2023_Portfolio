import {Card, CardHeader, CardBody, CardFooter, Typography, Button, Select, Option} from "@material-tailwind/react";

export default function Projects() {
  return (
    <div className={"flex-col  flex  w-full items-center"}>
              <h1 className={" w-3/4 text-left text-accent text-5xl"}>Projects</h1>
        <div className="w-72">
          <Select label="Select Version">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
        </div>
            <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
    </div>
  );
}