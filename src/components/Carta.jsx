
//Front part of card
export function Front(){
  //image----
    return <div> <img src="" alt="Loki" /></div>
}
//Description of the card
export function Back(){//content

    return(
        <>
        <div>
            <h1></h1>
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
            <Back />
        </div>
        </>
    )
}