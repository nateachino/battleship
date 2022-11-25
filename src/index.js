import {displayBoard} from './manip.js'

export let boardArray = []
for (let i=0;i<49;i++){
    boardArray.push('')
}

export const Ship = (length)=>{
    let hits=0
    let sunk=false
    let placed = false

    const hit = ()=>{
        hits+=1
    }

    const isSunk = ()=>{
        if (hits == length){
            return sunk = true
        }
        else{
            return sunk = false
        }
    }
    return {length,hits,sunk,placed, isSunk, hit}
}

export const Board = (ship, position) =>{

    const placeShip = ()=>{
        for (let i=0;i<ship.length;i++){
            boardArray.splice(position+i,1,'l')
        }
        return boardArray
    }

    const recieveAttack = (coord)=>{
        if (boardArray[coord] != ''){
            ship.hit()
            if (ship.isSunk() == true){
                return 'sunk'
            }else{
                return 'not sank'
            }
        }else{
            return false
        }
    }
    return {placeShip,recieveAttack}  

}

export const Player = ()=>{
    let turn; 
    let obj = {
        carrier: {
            has:1,
            length:5
        },
        battleship:{
            has: 2,
            length:4
        },
        cruiser:{
            has: 3,
            length:3 
        },
        destroyer:{
            has:4,
            length:2
        }
    }
    return obj
}

const player = Player()

displayBoard(player)