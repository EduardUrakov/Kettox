"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const popUp = document.getElementById('popUp');
    const countdownHoursElement = document.getElementById('countdown-hours');
    const countdownMinutesElement = document.getElementById('countdown-minutes');
    const countdownSecondsElement = document.getElementById('countdown-seconds');


    window.addEventListener('resize', function () {

        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            popUp.style.display = "none";
        } else {
            popUp.style.display = "inline";
            startCountdown();
        }
    });

    document.addEventListener('mouseleave', function (event) {

        if (window.innerWidth >= 768 && !popUp.contains(event.relatedTarget) && !popUp.contains(event.toElement)) {
            popUp.style.display = "inline";
            startCountdown();
        }
    });
    const closePopUp = document.querySelector(".close");

    closePopUp.addEventListener("click", function () {
        popUp.style.display = "none";


        resetCountdown();
    });


    function startCountdown() {

        const now = new Date();
        const currentMillis = now.getTime();


        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
        const endOfDayMillis = endOfDay.getTime();


        let remainingTime = endOfDayMillis - currentMillis;


        const countdownInterval = setInterval(function () {
            const seconds = Math.floor(remainingTime / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);


            countdownHoursElement.innerHTML = padNumber(hours);
            countdownMinutesElement.innerHTML = padNumber(minutes % 60);
            countdownSecondsElement.innerHTML = padNumber(seconds % 60);


            remainingTime -= 1000;


            if (remainingTime < 0) {
                clearInterval(countdownInterval);
                countdownHoursElement.innerHTML = '00';
                countdownMinutesElement.innerHTML = '00';
                countdownSecondsElement.innerHTML = '00';
            }
        }, 1000);
    }


    function resetCountdown() {
        countdownHoursElement.innerHTML = '00';
        countdownMinutesElement.innerHTML = '00';
        countdownSecondsElement.innerHTML = '00';
    }

    function padNumber(number) {
        return number < 10 ? `0${number}` : number;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const windows = document.querySelectorAll('.window');
    let currentWindow = null;
    let lastClickTime = 0;

    function showRandomWindow() {
        if (currentWindow) {
            currentWindow.style.display = 'none';
        }

        currentWindow = windows[Math.floor(Math.random() * windows.length)];
        currentWindow.style.display = 'block';
    }

    function resetTimeout() {
        clearInterval(windowInterval);
        windowInterval = setInterval(function () {
            showRandomWindow();
            lastClickTime = Date.now();
        }, 10000);
    }

    showRandomWindow();

    let windowInterval = setInterval(function () {
        showRandomWindow();
        lastClickTime = Date.now();
    }, 10000);

    document.querySelectorAll('.close-button').forEach((button) => {
        button.addEventListener('click', function () {
            currentWindow.style.display = 'none';
            resetTimeout();
        });
    });

    document.addEventListener('click', function () {
        const now = Date.now();
        if (now - lastClickTime >= 10000) {
            showRandomWindow();
            lastClickTime = now;
        }
    });
});