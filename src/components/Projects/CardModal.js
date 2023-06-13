import Markdown from "react-markdown";

export default function CardModal(props) {
    console.log(props.selectedCard.longDescription)
    return(
        <div className=" px-16 ">
            <div class={"prose  prose-h1:text-center prose-invert"} dangerouslySetInnerHTML={{ __html: props.selectedCard.longDescription }} />
        </div>
    )

}