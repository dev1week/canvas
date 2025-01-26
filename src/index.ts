class Grimpan{
    constructor(canvas: HTMLElement|null){
        if(!canvas||!(canvas instanceof HTMLCanvasElement)){
            throw new Error("canvas 엘리먼트를 입력하세요");
        }
    }

    initialize(){}
    initializeMenu(){}
}

new Grimpan(document.querySelector("#canvas"));
new Grimpan(document.querySelector("#canvas"));
new Grimpan(document.querySelector("#canvas"));
new Grimpan(document.querySelector("#canvas"));
