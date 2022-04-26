window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeTransition);



function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");
}
