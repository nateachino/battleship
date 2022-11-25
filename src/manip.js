import { Board,Ship,Player,boardArray } from "."

export function displayBoard(playerObj){
    const boardElement = document.querySelector('.board')
    for (let i=0;i<boardArray.length;i++){
        const square = document.createElement('div')
        square.classList.add('square')
        boardElement.appendChild(square)
       
        square.addEventListener('click', ()=>{
            Board(Ship(5),0).placeShip()
            for (let j=0;j<boardArray.length;j++){
                if (boardArray[i]!=''){
                    square.style.backgroundColor="red"
                }
            }
            
        })
    }
}