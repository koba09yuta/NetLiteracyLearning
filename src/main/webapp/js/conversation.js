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