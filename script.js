let screenHeight = screen.height;
let screenWidth = screen.width;

let popupCount = 0;

let ready = false;
let twoSecDone = false;

setInterval(() => {
    if (ready && twoSecDone) {
        let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
        let randomTop = Math.floor(Math.random() * screenHeight) + 1;

        let randomPopupImage = Math.floor(Math.random() * 9) + 1;

        let newPopup = new Popup(randomLeft, randomTop, ("./popups/images/" + randomPopupImage + ".jpg"))
        newPopup.Render();

        popupCount++;
        document.getElementById("counter").innerText = "Popup Count: " + popupCount;
    }
}, 500);

setInterval(() => {
    if (ready) {
        let randomLeft = Math.floor(Math.random() * screenWidth) + 1;
        let randomTop = Math.floor(Math.random() * screenHeight) + 1;

        let randomPopupImage = Math.floor(Math.random() * 7) + 1;

        let newPopup = new Popup(randomLeft, randomTop, ("./popups/gifs/" + randomPopupImage + ".gif"))
        newPopup.Render();

        popupCount++;
    }
}, 5000);


document.getElementById("ready").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    var audio = new Audio('sound.mp3');
    audio.loop = true;
    audio.play();
    var elem = document.body;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    ready = true;
    setTimeout(() => {
        twoSecDone = true;
    }, 2300);
})