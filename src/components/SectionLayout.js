export default function SectionLayout(props) {
    return (
        <div className={"flex-col flex w-full min-h-screen items-center "}>
            <div className ={"w-full"}>
                 <h1 className={" py-6  text-center text-accent text-5xl "}>{props.title} </h1>
            </div>

            <div className={"py-10 w-full flex items-center justify-center "}>
                {props.content}
            </div>

        </div>)
}