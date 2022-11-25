import { Board } from './index.js'
import {Ship} from './index.js'
import {Player} from './index.js'

test('retunrs obj', ()=>{
    expect(Ship).toBeInstanceOf(Object)
})

test('test function', ()=>{
    expect(Ship(5).isSunk()).toBe(false)
})

test('array check', ()=>{
    let testt = Board(Ship(2),0)
    testt.placeShip()
    expect(testt.recieveAttack(4)).toBe(false)
})

test('sank check', ()=>{
    let testt = Board(Ship(2),0)
    testt.placeShip()
    expect(testt.recieveAttack(0)).toBe('not sank')
})

test('check player', ()=>{
    expect(Player()).toBeInstanceOf(Object)
})

test('check player', ()=>{
    expect(Player()).toMatchObject({ carrier: {
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
    }})
})

test('check player', ()=>{
    expect(Player().carrier.has).toBe(1)
})
