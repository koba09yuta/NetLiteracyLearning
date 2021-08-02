/** ローディングを見せる関数 */
import objectData from './story1ObjectData.js';
import story1_1Data from './story1_1Data.js';
import story1_2Data from './story1_2Data.js';

/** ストーリーデータ */
let storyData = {};

/** シーン番号 */
let sceneId = 0;

/** シーンを進める関数 */
export const sceneAdvance = () => {
    sceneId++
}

/** ローディングを見せる関数 */
export const loading = () => {
    const fileName = window.location.href.split('/').pop();
    if (fileName === "conversation1_1.html") {
        storyData = story1_1Data;
    } else if (fileName === "conversation1_2.html") {
        storyData = story1_2Data;
    }
    $('#darkness-wrapper').hide();
    $('#loading').delay(1000).fadeOut(1000, function () {
        if (storyData[sceneId].mode === "opening") {
            $('#sound-effect source').attr('src', objectData.soundEffect.opening);
            document.querySelector("#sound-effect").load();
            $('#sound-effect').get(0).play();
        }
    });
    sceneShow();
}

/** オープニングを見せる関数 */
export const showOpening = () => {
    changeHide("opening");
    changeBack();
    $('#chapter-number').html(storyData[sceneId].chapterNumber);
    $('#chapter-title').html(storyData[sceneId].chapterTitle);
}

/** 会話を見せる関数 */
export const showConversation = () => {
    changeHide("conversation");
    changeBack();
    $('#title').html(storyData[sceneId].title);
    $('#text').html(storyData[sceneId].text);
    $('#most-left').html(storyData[sceneId].mostLeft);
    $('#center-left').html(storyData[sceneId].centerLeft);
    $('#center-right').html(storyData[sceneId].centerRight);
    $('#most-right').html(storyData[sceneId].mostRight);
    $('#back-img').html(storyData[sceneId].img);
}

/** 暗転を見せる関数 */
export const showDarkness = () => {
    // 暗転
    $('#darkness-wrapper').show().animate({ 'opacity': 1 }, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        sceneId++;
        sceneShow();
        // 明転
        $('#darkness-wrapper').animate({ 'opacity': 0 }, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
        });
    })
}

/** 選択肢を見せる関数 */
export const showSelection = () => {
    changeHide("selection");
    changeBack();
    showDisplay(storyData[sceneId].displayId);
    $('#title').html(storyData[sceneId].title);
    $('#text').html(storyData[sceneId].text);
    $('#selection1').html(storyData[sceneId].selection1.selection);
    $('#selection2').html(storyData[sceneId].selection2.selection);
    $('#selection3').html(storyData[sceneId].selection3.selection);
}

/** 選択肢の答えを見せる関数 */
export const showAnswer = (selectionNumber) => {
    let selectionData = {};
    if (selectionNumber === 1) {
        selectionData = storyData[sceneId].selection1;
    } else if (selectionNumber === 2) {
        selectionData = storyData[sceneId].selection2;
    } else if (selectionNumber === 3) {
        selectionData = storyData[sceneId].selection3;
    }

    $('#selection-wrapper').hide();
    $('.pointer').show();
    $('#nyateracy').show();
    $('#title').html(selectionData.title);
    $('#text').html(selectionData.text);
    $('#nyateracy').html(selectionData.nyateracy);
    if (!selectionData.answer) {
        $('#sound-effect source').attr('src', objectData.soundEffect.incorrect);
        sceneId--;
    } else {
        $('#sound-effect source').attr('src', objectData.soundEffect.correct);
    }
    document.querySelector("#sound-effect").load();
    $('#sound-effect').get(0).play();
    return;
}

/** ディスプレイを表示する関数 */
export const showDisplay = (displayId) => {
    if (displayId === 1) {
        $('#dragon-hunter').show();
        $('#ransomware').hide();
        $('#dragon-hunter').removeClass("flush-icon");
        $('#ransomware').removeClass("flush-icon");
    }
    if (displayId === 2) {
        $('#dragon-hunter').show();
        $('#ransomware').hide();
        $('#dragon-hunter').addClass("flush-icon");
    }
    if (displayId === 3) {
        $('#dragon-hunter').show();
        $('#ransomware').show();
        $('#dragon-hunter').removeClass("flush-icon");
        $('#ransomware').removeClass("flush-icon");
    }
    if (displayId === 4) {
        $('#dragon-hunter').show();
        $('#ransomware').show();
        $('#dragon-hunter').removeClass("flush-icon");
        $('#ransomware').addClass("flush-icon");

    }
}

/** 説明を表示する関数 */
export const showExplanation = () => {
    changeHide("explanation");
    changeBack();
    $('#title').html(storyData[sceneId].title);
    $('#text').html(storyData[sceneId].text);
    $('#nyateracy').html(storyData[sceneId].nyateracy);
    showDisplay(storyData[sceneId].displayId);
    
}

/** パソコン操作を表示する関数 */
export const showOperation = () => {
    changeHide("operation");
    changeBack();
    showDisplay(storyData[sceneId].displayId);
}

/** ソフトを起動する関数 */
export const activate = (softName) => {
    if (storyData[sceneId].displayId === 2 && softName === "dragonHunter") {
        sceneAdvance();
        sceneShow();
        // window.location.href = './WEB-INF/html/conversation1_1.html';
        return;
    }
    if (storyData[sceneId].displayId === 4 && softName === "ransomware") {
        sceneAdvance();
        sceneShow();
        // window.location.href = './WEB-INF/html/conversation1_1.html';
        return;
    }
    changeHide("explanation");
    $('#title').html(objectData.character.you.name);
    $('#text').html("今はこのソフトをじゃないよね");
    sceneId--;
}

/** 隠し要素を切り替える関数 */
export const changeHide = (scene) => {
    if (scene === "opening") {
        $('#opening-wrapper').show();
        $('#people-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').hide();
        $('#pc-wrapper').hide();
        $('#nyateracy').hide();
        $('#transparent-wrapper').hide();
        return;
    }
    if (scene === "conversation") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').show();
        $('#img-wrapper').show();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').show();
        $('.pointer').show();
        $('#pc-wrapper').hide();
        $('#nyateracy').hide();
        $('#transparent-wrapper').hide();
        return;
    }
    if (scene === "selection") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').show();
        $('#conversation-wrapper').show();
        $('.pointer').hide();
        $('#pc-wrapper').show();
        $('#nyateracy').hide();
        $('#transparent-wrapper').show();
        return;
    }
    if (scene === "explanation") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').show();
        $('.pointer').show();
        $('#pc-wrapper').show();
        $('#nyateracy').show();
        $('#transparent-wrapper').show();
        return;
    }
    if (scene === "operation") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').hide();
        $('.pointer').hide();
        $('#pc-wrapper').show();
        $('#nyateracy').hide();
        $('#transparent-wrapper').hide();
        return;
    }
}

/** シーンが進む際の処理をする関数 */
export const sceneShow = () => {
    if (storyData[sceneId].mode === "opening") {
        showOpening();
        return;
    }
    if (storyData[sceneId].mode === "conversation") {
        showConversation();
        return;
    }
    if (storyData[sceneId].mode === "darkness") {
        showDarkness();
        return;
    }
    if (storyData[sceneId].mode === "selection") {
        showSelection();
        return;
    }
    if (storyData[sceneId].mode === "explanation") {
        showExplanation();
        return;
    }
    if (storyData[sceneId].mode === "operation") {
        showOperation();
        return;
    }
}

/** 背景画像やBGMを切り替える関数 */
export const changeBack = () => {
    if (storyData[sceneId].bgimg) {
        $('body').css('backgroundImage', storyData[sceneId].bgimg);
    }
    if (storyData[sceneId].bgm) {
        $('#bgm source').attr('src', storyData[sceneId].bgm);
        document.querySelector("#bgm").load();
        $('#bgm').get(0).play();
        if (storyData[sceneId].bgm === "stop") {
            $('#bgm').get(0).pause();
            $('#bgm').get(0).currentTime = 0;
        }
    }
}

/** 効果音を鳴らす関数 */
export const makeSound = (sound) => {
    if (sound === "forward") {
        $('#sound-effect source').attr('src', objectData.soundEffect.forward);
    }
    if (sound === "click") {
        $('#sound-effect source').attr('src', objectData.soundEffect.click);
    }
    document.querySelector("#sound-effect").load();
    $('#sound-effect').get(0).play();
}