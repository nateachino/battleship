const Ship =  (length)=>{
    let hits=0
    let sunk=false

    const hit = ()=>{
        hits+=1
    }

    const isSunk = ()=>{
        if (hits == length){
            sunk = true
        }
    }
    return {length,hits,sunk, isSunk, hit}
}