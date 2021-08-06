import {
    sceneAdvance,
    loading,
    showAnswer,
    sceneShow,
    activate,
    makeSound
} from './functions.js'

/** ページを読み込む */
$(window).on('load', loading());

/** オープニングを閉じる */
$('#opening-wrapper').on("click", () => {
    $('#sound-effect').get(0).pause();
    $('#sound-effect').get(0).currentTime = 0;
    sceneAdvance();
    sceneShow();
});

/** 会話を進める */
$('#forward').on("click", () => {
    makeSound("forward");
    sceneAdvance();
    sceneShow();
});

/** 選択肢1に答える */
$('#selection1').on("click", () => {
    showAnswer(1);
});

/** 選択肢2に答える */
$('#selection2').on("click", () => {
    showAnswer(2);
});

/** 選択肢3に答える */
$('#selection3').on("click", () => {
    showAnswer(3);
});

/** ドラゴンハンターを開く */
$('#dragon-hunter').on("click", () => {
    makeSound("click");
    activate("dragonHunter");
});

/** ランサムウェアを開く */
$('#ransomware').on("click", () => {
    makeSound("click");
    activate("ransomware");
});

/** パソコン操作で進む */
$('.pc-forward').on("click", () => {
    makeSound("click");
    sceneAdvance();
    sceneShow();
});

/** ドラゴンハンターで進む */
$('.dh-forward').on("click", () => {
    makeSound("slash");
    sceneAdvance();
    sceneShow();
});

/** クエストに進む */
$('#dh-quest-btn').on("click", () => {
    makeSound("slash");
    activate("quest");
});

/** フレンドに進む */
$('#dh-friend-btn').on("click", () => {
    makeSound("slash");
    activate("friend");
});

/** ショップに進む */
$('#dh-shop-btn').on("click", () => {
    makeSound("slash");
    activate();
});

/** セーブに進む */
$('#dh-save-btn').on("click", () => {
    makeSound("slash");
    activate();
});

/** ソロクエストに進む */
$('#dh-quest-solo').on("click", () => {
    makeSound("slash");
    activate("solo");
});

/** チームクエストに進む */
$('#dh-quest-team').on("click", () => {
    makeSound("slash");
    activate("team");
});

/** チャットに進む */
$('#dh-friend-chat').on("click", () => {
    makeSound("slash");
    activate("chat");
});

/** フレンド募集に進む */
$('#dh-friend-recruit').on("click", () => {
    makeSound("slash");
    activate("recruit");
});