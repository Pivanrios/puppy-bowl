const list = [3,4,43,6,78,21,3,6,99,23,21];//Initial list

function duplicated(array){
    console.log("Initial Array:",array)
    const newSet = new Set(array);//create a new set
    console.log("Set:", newSet)
    const newArray = [];//declare an empty array
    newSet.forEach((e)=>{
        newArray.push(e);//add elements to the array
    })
    console.log(newArray);
    return newArray;//return array
}

duplicated(list)