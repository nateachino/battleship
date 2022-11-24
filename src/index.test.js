import Ship from './index.js'

test('retunrs obj', ()=>{
    expect(Ship(5)).toBeInstanceOf({Object})
})