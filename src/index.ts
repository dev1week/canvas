
let instance: Grimpan; 

class Grimpan{
    constructor(canvas: HTMLElement|null){
        if(!canvas||!(canvas instanceof HTMLCanvasElement)){
            throw new Error("canvas 엘리먼트를 입력하세요");
        }

        if(!instance){
            instance = this;
        }
        return instance; 
    }
    initialize(){}
    initializeMenu(){}
}
const g1 = new Grimpan(document.querySelector('#canvas'));
const g2 = new Grimpan(document.querySelector('#canvas'));

console.log(g1===g2);