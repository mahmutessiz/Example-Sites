const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
/* const settingButton = document.querySelector('.settings');
const settingButton2 = document.querySelector('.settings-2');

const inputDiv = document.querySelector('.inputs-div');


settingButton.addEventListener('click', () => {
    
    inputDiv.style.display = 'block';
    settingButton2.style.display = 'block';
    settingButton.style.display = 'none';

});

settingButton2.addEventListener('click', () => {

    
    settingButton2.style.display = 'none';
    settingButton.style.display = 'block';
    inputDiv.style.display = 'none';
}); */



function timer() {

    let minute = Number(minutes.innerText);
    let second = Number(seconds.innerText);


    if (second > 00) {
        second--;
    }
    if (second === 0) {
        second = 59;
        minute--;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (minute < 0) {

        minute = '00';
        second = "00";

        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
    }




    minutes.innerHTML = minute;
    seconds.innerHTML = second;

}


playButton.addEventListener('click', () => {

    const countDown = setInterval(timer, 1000);



    pauseButton.style.display = 'block';
    playButton.style.display = 'none';

    /*xxxxxxxxxxxxxxxxxx pause button functions xxxxxxxxxxxxxxxx */

    pauseButton.addEventListener('click', () => {

        clearInterval(countDown);
        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
    });

    /*xxxxxxxxxxxxxxxxxx stop button functions xxxxxxxxxxxxxxxx */

    stopButton.addEventListener('click', () => {

        clearInterval(countDown);

        minutes.innerHTML = '25';
        seconds.innerHTML = '00';
        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
    });
});