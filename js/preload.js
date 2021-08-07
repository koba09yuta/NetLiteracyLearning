import objectData from './story1ObjectData.js';

/** プリロードする関数 */
export const preload = (fileName) => {
    const imgURL = selectImg(fileName);
    const musicURL = selectMusic(fileName);
    for(let i = 0; i < imgURL.length; i++) {
        $("<img>").attr("src", imgURL[i]);
    }
    for(let i = 0; i < musicURL.length; i++) {
        $("<audio>").attr("src", imgURL[i]);
    }
}

/** プリロードする画像を選択する関数 */
const selectImg = (fileName) => {
    let imgURL = [];
    if (fileName === "conversation1_1.html") {
        imgURL = [
            "../img/people/anata.svg",
            // "../img/nyateracy/nyateracy_1.svg",
            // "../img/nyateracy/nyateracy_2.svg",
            // "../img/nyateracy/nyateracy_3.svg",
            // "../img/nyateracy/nyateracy_4.svg",
            "../img/people/akira.svg",
            // "../img/people/hacker.svg",
            objectData.bgimg.roadNoon,
            // objectData.bgimg.roomNoon,
            objectData.bgimg.roomEvening,
            // objectData.bgimg.roomNight,
            // objectData.bgimg.hackerRoom,
            objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            objectData.bgimg.dhQuest,
            // objectData.bgimg.dhFriend,
            // objectData.bgimg.dhPortTown,
        ]
    }
    if (fileName === "conversation1_2.html") {
        imgURL = [
            "../img/people/anata.svg",
            // "../img/nyateracy/nyateracy_1.svg",
            // "../img/nyateracy/nyateracy_2.svg",
            // "../img/nyateracy/nyateracy_3.svg",
            // "../img/nyateracy/nyateracy_4.svg",
            "../img/people/akira.svg",
            // "../img/people/hacker.svg",
            objectData.bgimg.roadNoon,
            objectData.bgimg.roomNoon,
            objectData.bgimg.roomEvening,
            objectData.bgimg.roomNight,
            // objectData.bgimg.hackerRoom,
            objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            objectData.bgimg.dhQuest,
            objectData.bgimg.dhFriend,
            // objectData.bgimg.dhPortTown,
        ]
    }
    if (fileName === "conversation1_3.html") {
        imgURL = [
            "../img/people/anata.svg",
            "../img/nyateracy/nyateracy_1.svg",
            "../img/nyateracy/nyateracy_2.svg",
            "../img/nyateracy/nyateracy_3.svg",
            "../img/nyateracy/nyateracy_4.svg",
            // "../img/people/akira.svg",
            "../img/people/hacker.svg",
            // objectData.bgimg.roadNoon,
            objectData.bgimg.roomNoon,
            objectData.bgimg.roomEvening,
            objectData.bgimg.roomNight,
            objectData.bgimg.hackerRoom,
            // objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            // objectData.bgimg.dhQuest,
            objectData.bgimg.dhFriend,
            objectData.bgimg.dhPortTown,
        ]
    }
    return imgURL;
}

/** プリロードする音楽を選択する関数 */
const selectMusic = (fileName) => {
    let musicURL = [];
    if (fileName === "conversation1_1.html") {
        musicURL = [
            objectData.bgimg.roadNoon,
            objectData.bgimg.home,
            // objectData.bgimg.nyateracy,
            // objectData.bgimg.truth,
            objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            objectData.soundEffect.opening,
            objectData.soundEffect.forward,
            objectData.soundEffect.click,
            objectData.soundEffect.slash,
        ]
    }
    if (fileName === "conversation1_2.html") {
        musicURL = [
            objectData.bgimg.roadNoon,
            objectData.bgimg.home,
            // objectData.bgimg.nyateracy,
            // objectData.bgimg.truth,
            objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            // objectData.soundEffect.opening,
            objectData.soundEffect.forward,
            objectData.soundEffect.click,
            objectData.soundEffect.slash,
        ]
    }
    if (fileName === "conversation1_3.html") {
        musicURL = [
            // objectData.bgimg.roadNoon,
            objectData.bgimg.home,
            objectData.bgimg.nyateracy,
            objectData.bgimg.truth,
            objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            // objectData.soundEffect.opening,
            objectData.soundEffect.forward,
            objectData.soundEffect.click,
            objectData.soundEffect.slash,
        ]
    }
    return musicURL;
}