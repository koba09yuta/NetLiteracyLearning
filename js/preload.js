import objectData from './story1ObjectData.js';

/** プリロードする関数 */
export const preload = (fileName) => {
    const imgURL = selectImg(fileName);
    for(i = 0; i < imgURL.length; i++) {
        $("<img>").attr("src", imgURL[i]);
    }
    console.log("preload done.");
}

/** プリロードする画像を選択する関数 */
const selectImg = (fileName) => {
    let imgURL = [];
    if (fileName === "index.html") {
        imgURL = [
            "./img/background/top_title.png"
        ]
    }
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
            // objectData.bgimg.hackerRoom,
            // objectData.bgimg.dhOpening,
            objectData.bgimg.dhMenu,
            // objectData.bgimg.dhQuest,
            objectData.bgimg.dhFriend,
            objectData.bgimg.dhPortTown,
        ]
    }
    return imgURL;
}