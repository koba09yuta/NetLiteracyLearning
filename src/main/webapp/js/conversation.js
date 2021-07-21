/**
 * 会話中のテキストや画像のオブジェクト    
 * 将来的にJSONファイルに置き換え予定
 */
const conversationObject = [
    {
        "title": "【通学路】",
        "text": "（友達のアキラ君とゲームの話中）",
        "main-speaker": "<img src='../../img/people/you.svg'>",
        "secondary-speaker": "",
        "tertiary-speaker": "<img src='../../img/people/akira.svg' style='transform: scale(-1, 1);'>",
    },
    {
        "title": "アキラ",
        "text": "なぁなぁ、おまえんちパソコンあるだろ？",
        "main-speaker": "",
        "secondary-speaker": "<img src='../../img/people/akira.svg'>",
        "tertiary-speaker": "",
    },
    {
        "title": "アキラ",
        "text": "おすすめだからこのゲーム入れてみなよ！<br>フレンドになろうぜ！？",
        "main-speaker": "",
        "secondary-speaker": "<img src='../../img/people/akira.svg'>",
        "tertiary-speaker": "",
    },
    {
        "title": "あなた",
        "text": "わかった！さっそく帰ったらやってみるよ！",
        "main-speaker": "<img src='../../img/people/you.svg'>",
        "secondary-speaker": "",
        "tertiary-speaker": "",
    }
]

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
    document.getElementById('title').innerHTML = conversationObject[number].title;
    document.getElementById('text').innerHTML = conversationObject[number].text;
    document.getElementById('main-speaker').innerHTML = conversationObject[number]["main-speaker"];
    document.getElementById('secondary-speaker').innerHTML = conversationObject[number]["secondary-speaker"];
    document.getElementById('tertiary-speaker').innerHTML = conversationObject[number]["tertiary-speaker"];
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
    if (number < conversationObject.length - 1) {
        number++;
        showAll();
    }
}

/**
 * 戻るボタンを押したときにテキストや画像を表示するイベントハンドラ
 */
document.getElementById('backward').onclick = function() {
    if (number > 0) {
        number--;
        showAll();
    }
}