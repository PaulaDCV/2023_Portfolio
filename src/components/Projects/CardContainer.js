import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import {useState} from "react";

export default function CardContainer(props) {

  const HoverData = "Click or pinch to Zoom Image";
  const [hover, setHover] = useState(false); // initial false

  const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true

  };

  const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
  };
    return (
       /* <div className={" p8"}  onClick={props.onClick}>
            <Card className="bg-element mt-6 w-96 py-6">
                <CardBody>
                    <CardHeader className="text-accent relative">
                        {console.log(props.imageRef)}
                        <img
                            src={props.imageRef}
                            alt="img-blur-shadow" layout="fill"/>
                    </CardHeader>
                    <Typography variant="h5" className="text-accent py-6 mb-2">
                        {props.title}
                    </Typography>
                    <Typography className={"text-accent/50"}>
                        {props.description}
                    </Typography>
                </CardBody>
                <CardFooter className="flex flex-row flex-wrap justify-items-center items-center justify-around pt-0">
                    {props.skills?.map((skill) => (
                        <Button className={"bg-indigo-900"} disabled={true}>{skill} </Button>
                    ))}
                </CardFooter>
            </Card>


        </div>
        */


        <div className=" w-full h-full max-w-md max-h-md hover:scale-110 hover:z-50   relative" onMouseEnter={(e) => onHover(e)}
                onMouseLeave={(e) => onHoverOver(e)}>
            <img src={props.imageRef}
                 alt="img-blur-shadow"
                 layout={"fill"}
                 className={"w-full h-full max-w-lg max-h-lg"} />
                {hover &&
                <div className="w-full h-full  absolute top-0 left-0  bottom-0 bg-navbar/[.60] flex justify-center items-stretch flex-col
                    max-w-lg max-h-lg">
                    <h1 className="text-accent font-semibold text-xl">{props.title}</h1>
                    <p className="text-accent text-xs">
                        {props.description}
                    </p>
                   <div className=" flex flex-row z-50 flex-wrap justify-items-center items-center justify-evenly w-full pt-0">
                    {props.skills?.map((skill) => (
                        <label className={"bg-accent/[.50]  text-navbar rounded p-1"} disabled={true}>{skill} </label>
                    ))}
                </div>
                </div>}
        </div>



    )

}