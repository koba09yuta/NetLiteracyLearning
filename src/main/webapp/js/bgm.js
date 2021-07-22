const bgm = document.getElementById("bgm");
const muteButton = document.getElementById('mute');

const mute = function() {
    if (bgm.muted) {
        bgm.muted = false;
        muteButton.src = "../../img/icon/volume_off.svg";
    } else {
        bgm.muted = true;
        muteButton.src = "../../img/icon/volume_on.svg";
    }
}

muteButton.onclick = function() {
    mute();
}