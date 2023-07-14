import{useState, useEffect} from 'react'
import Carta from './Carta';

//This is the gallery where we'll store our puppy deck
export default function Gallery(){
    //declare initial list
    let [list, setList] = useState(null);
    //useEffect to fetch data from an api
    useEffect(()=>{
      async function fetchData(){
        try{
          const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-d/players");
          const dogs = await response.json();
          setList(dogs.data.players);
          console.log("dogs:",dogs);
        }catch(error){
          console.error(error);
        }
      }
      fetchData();
    },[])//this effect will do it on the first render
    console.log("Gallery List:",list)
    
    return(
        <>
        
        </>
    )
}