//Front part of card
export function Front(){
    return <div> <img src="" alt="Loki" /></div>
}
//Description of the card
export function Back(props){
    return(
        <>
        <div>
            <h1>{props.dog.name}</h1>
            <p>{}</p>
            <p></p>
            <button>Edit</button>
        </div>
        </>
    )
}



//Export the whole component
export default function Carta(){
    return (
        <>
        <div>
            <Front />
            <Back dog={{name:"loki"}}/>
        </div>
        </>
    )
}