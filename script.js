let playing = false;
let slideShowInterval;
let currentNumber = 1;

document.querySelector('#slide' + currentNumber).classList.add('show');
document.querySelector('#pin' + currentNumber).classList.add('selected');


// show previous slide by clicking left arrow
function showPreviousSlide(){
    let newNumber = currentNumber - 1;
    if (newNumber < 1){
        newNumber = 5;
    };
    showSlide(newNumber);
}
document.querySelector('#prev').addEventListener('click', showPreviousSlide);


// show next slide by clicking right arrow
function showNextSlide(){
    let newNumber = currentNumber + 1;
    if (newNumber > 5) {
        newNumber = 1;
    };
    showSlide(newNumber);
}
document.querySelector('#next').addEventListener('click', showNextSlide);


// show current slide
function showSlide(newNumber){
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide' + newNumber).classList.add('show');
    currentNumber = newNumber;
    selectPin(newNumber);
}


// highlight selected button & show slide when pin is clicked
function selectPin(newNumber){
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('#pin' + newNumber).classList.add('selected');
};

for (let pinNumber = 1; pinNumber <= 5; pinNumber++) {
    document
        .querySelector('#pin' + pinNumber)
        .addEventListener('click', function(){
            showSlide(pinNumber);
    });
}

// play & pause button to start/stop slides 
function playButtonClicked(){
    if (playing === true){
        stopSlideShow();
    } else {
        startSlideShow();
    }
};
document.querySelector('#play').addEventListener('click', playButtonClicked);

function startSlideShow(){
    document.querySelector('#play').classList.add('on');
    playing = true;
    slideShowInterval = setInterval(showNextSlide, 2500);
}

function stopSlideShow(){
    document.querySelector('#play').classList.remove('on');
    playing = false;
    clearInterval(slideShowInterval);
}