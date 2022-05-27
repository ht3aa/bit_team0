let moves = 0;
let translateNumber = 0;
let numberToSlide = 0;
let slide = 0;
let boxesOfCustomersOpinion = 0;
let odd = 0;

function setTranslateNumber(numberToSlide) {
    if(numberToSlide === 1) {
        translateNumber = 390;
    } else if(numberToSlide === 2) {
        translateNumber = 780;
    } else if(numberToSlide === 3) {
        translateNumber = 1170;
    }
}

function isOdd(boxesOfCustomersOpinion) {
    if(boxesOfCustomersOpinion % 2 !== 0) {
        odd = 1;
    }
}

export function forward(silderElement) {
    boxesOfCustomersOpinion = silderElement.getBoundingClientRect().width / 390;
    
    isOdd(boxesOfCustomersOpinion);
    numberToSlide = Math.round(silderElement.parentNode.getBoundingClientRect().width / 390);    
    setTranslateNumber(numberToSlide);

    moves += numberToSlide;
    if(moves + odd > boxesOfCustomersOpinion) {
        moves -= numberToSlide;
        return
    } else {
        slide -= translateNumber;
        silderElement.style.transform = `translateX(${slide}px)`;
    }
}

export function backward(silderElement) {
    moves -= numberToSlide;
    if(moves < 0) {
        moves += numberToSlide;
        return;
    } else {

        setTranslateNumber(numberToSlide);
        slide += translateNumber;
        silderElement.style.transform = `translateX(${slide}px)`;
    }

}