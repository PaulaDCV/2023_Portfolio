export default function CardModal(props) {

    return(
        <div className>
            <h3 className="text-3xl"> {props.selectedCard.title}</h3>
            <p>{props.selectedCard.LongDescription}</p>
        </div>
    )

}