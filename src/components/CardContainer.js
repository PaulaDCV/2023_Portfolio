import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
//Todo: style cards so that they match palette.
export default function CardContainer(props) {

    return (
        <div className={" p8"}>
            <Card className="bg-indigo-400/70 mt-6 w-96 py-6">
                <CardBody>
                    <CardHeader className="text-accent relative h-3/4">
                        <img
                            src="https://images.unsplash.com/photo-154055301672
                            2-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b
                            y1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
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
    )

}