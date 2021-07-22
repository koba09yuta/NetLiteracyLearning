/**
 * 会話中のテキストや画像のオブジェクト    
 * 将来的にJSONファイルに置き換え予定だが...
 */
const story1Data = [
    {
        "title": "【通学路】",
        "text": "（友達のアキラ君とゲームの話中）",
        "main-person": "<img src='../../img/people/you.svg'>",
        "secondary-person": "",
        "tertiary-person": "<img src='../../img/people/akira.svg' style='transform: scale(-1, 1);'>",
        "back-img": "",
    },
    {
        "title": "アキラ",
        "text": "なぁなぁ、おまえんちパソコンあるだろ？",
        "main-person": "",
        "secondary-person": "<img src='../../img/people/akira.svg'>",
        "tertiary-person": "",
        "back-img": "",
    },
    {
        "title": "アキラ",
        "text": "おすすめだからこのゲーム入れてみなよ！フレンドになろうぜ！？",
        "main-person": "",
        "secondary-person": "<img src='../../img/people/akira.svg'>",
        "tertiary-person": "",
        "back-img": "<img src='../../img/other/dragon_hunter.svg'>",
    },
    {
        "title": "あなた",
        "text": "わかった！さっそく帰ったらやってみるよ！",
        "main-person": "<img src='../../img/people/you.svg'>",
        "secondary-person": "",
        "tertiary-person": "",
        "back-img": "",
    },
]

// const storyData = [
//     {
//         "mode": "opening",
//         "chapter-number": "ストーリー１",
//         "chapter-title": "ゲームにひそむワナ",
//     },
//     {
//         "mode": "conversation",
//         "bgm": "../../music/bgm/sample_bgm.mp3",
//         "bgimg": "url(../../img/background/residential_area_noon.jpg)",
//         "content": [
//             {
//                 "title": "【通学路】",
//                 "text": "（友達のアキラ君とゲームの話中）",
//                 "main-person": "<img src='../../img/people/you.svg'>",
//                 "secondary-person": "",
//                 "tertiary-person": "<img src='../../img/people/akira.svg' style='transform: scale(-1, 1);'>",
//                 "back-img": "",
//             },
//             {
//                 "title": "アキラ",
//                 "text": "なぁなぁ、おまえんちパソコンあるだろ？",
//                 "main-person": "",
//                 "secondary-person": "<img src='../../img/people/akira.svg'>",
//                 "tertiary-person": "",
//                 "back-img": "",
//             },
//             {
//                 "title": "アキラ",
//                 "text": "おすすめだからこのゲーム入れてみなよ！フレンドになろうぜ！？",
//                 "main-person": "",
//                 "secondary-person": "<img src='../../img/people/akira.svg'>",
//                 "tertiary-person": "",
//                 "back-img": "<img src='../../img/other/dragon_hunter.svg'>",
//             },
//             {
//                 "title": "あなた",
//                 "text": "わかった！さっそく帰ったらやってみるよ！",
//                 "main-person": "<img src='../../img/people/you.svg'>",
//                 "secondary-person": "",
//                 "tertiary-person": "",
//                 "back-img": "",
//             },
//         ],
//     },
//     {
//         "mode": "loading",
//     },
//     {
//         "mode": "conversation",
//         "bgm": "../../music/bgm/sample_bgm.mp3",
//         "bgimg": "url(../../img/background/pc_room_evening.jpg)",
//         "content": [
//             {
//                 "title": "あなた",
//                 "text": "・・・いけ！そこだ！！",
//                 "main-person": "",
//                 "secondary-person": "",
//                 "tertiary-person": "",
//                 "back-img": "",
//             },
//             {
//                 "title": "アキラ",
//                 "text": "くそ！どうやったらたおせるかな",
//                 "main-person": "",
//                 "secondary-person": "",
//                 "tertiary-person": "",
//                 "back-img": "",
//             },
//         ],
//     }
// ]

/**
 * ページ番号
 * @type {Number}
 */
let number = 0;

/**
 * 会話中のテキストや画像を表示する関数
 * @returns {undefined}
 */
const showAll = function() {
    document.getElementById('body').style.backgroundImage = "url(../../img/background/residential_area_noon.jpg)";
    document.getElementById('title').innerHTML = story1Data[number].title;
    document.getElementById('text').innerHTML = story1Data[number].text;
    document.getElementById('main-person').innerHTML = story1Data[number]["main-person"];
    document.getElementById('secondary-person').innerHTML = story1Data[number]["secondary-person"];
    document.getElementById('tertiary-person').innerHTML = story1Data[number]["tertiary-person"];
    document.getElementById('back-img').innerHTML = story1Data[number]["back-img"];
    return;
};

/**
 * 最初のテキストや画像を表示するイベントハンドラ
 */
window.onload = function() {
    showAll();
}


/**
 * 進むボタンを押したときにテキストや画像を表示するイベントハンドラ
 */
document.getElementById('forward').onclick = function() {
    if (number < story1Data.length - 1) {
        number++;
        makeSound();
        showAll();
    }
}

/**
 * 戻るボタンを押したときにテキストや画像を表示するイベントハンドラ
 */
document.getElementById('backward').onclick = function() {
    if (number > 0) {
        number--;
        makeSound();
        showAll();
    }
}

/**
 * 効果音
 * @type {HTMLElement}
 */
const soundEffect = document.getElementById("sound-effect");

/**
 * 効果音を鳴らす関数
 * @returns {undefined}
 */
const makeSound = function() {
    soundEffect.pause();
    soundEffect.currentTime = 0;
    soundEffect.play();
}