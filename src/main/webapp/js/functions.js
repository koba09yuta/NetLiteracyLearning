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

/** ローディングの関数 */
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
    if (displayId <= 4) {
        $('#pc-wrapper').css('background-color','rgb(0,181,252)');
        $('#pc-wrapper').css('background-image', 'none');
        $('#desktop').show();
        $('#dh-opening').hide();
        $('#dh-menu').hide();
        $('.line__container').hide();
        $('.download_container').hide();
        if (displayId === 1) {
            $('#dragon-hunter').show();
            $('#ransomware').hide();
            $('#dragon-hunter').removeClass("flush-icon");
            $('#ransomware').removeClass("flush-icon");
            return;
        }
        if (displayId === 2) {
            $('#dragon-hunter').show();
            $('#ransomware').hide();
            $('#dragon-hunter').addClass("flush-icon");
            return;
        }
        if (displayId === 3) {
            $('#dragon-hunter').show();
            $('#ransomware').show();
            $('#dragon-hunter').removeClass("flush-icon");
            $('#ransomware').removeClass("flush-icon");
            return;
        }
        if (displayId === 4) {
            $('#dragon-hunter').show();
            $('#ransomware').show();
            $('#dragon-hunter').removeClass("flush-icon");
            $('#ransomware').addClass("flush-icon");
            return;
        }
    }
    if (displayId === 5) {
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', objectData.bgimg.dhOpening);
        $('#desktop').hide();
        $('#dh-opening').show();
        $('#dh-menu').hide();
        $('.line__container').hide();
        $('.download_container').hide();
        return;
    }
    if (displayId === 6) {
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', objectData.bgimg.dhMenu);
        $('#desktop').hide();
        $('#dh-opening').hide();
        $('#dh-menu').show();
        $('.line__container').hide();
        $('.download_container').hide();
        return;
    }
    if (displayId === 10) {
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', objectData.bgimg.dhPortTown);
        $('#desktop').hide();
        $('#dh-opening').hide();
        $('#dh-menu').hide();
        $('.line__container').show();
        $('.download_container').hide();
        $('#transparent-wrapper').show();
        $('#text1').delay(1000).fadeIn(500);
        $('#text2').delay(3000).fadeIn(500);
        $('#text3').delay(5000).fadeIn(500);
        $('#text4').delay(7000).fadeIn(500);
        $('#text5').delay(9000).fadeIn(500);
        $('#text6').delay(11000).fadeIn(500);
        $('.scroll').delay(11500).animate({scrollTop: 1000}, 'fast');
        sceneAdvance();
        setTimeout(sceneShow, 14000);
        return;
    }
    if (displayId === 11) {
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', objectData.bgimg.dhPortTown);
        $('#desktop').hide();
        $('#dh-opening').hide();
        $('.line__container').show();
        $('.download_container').hide();
        return;
    }
    if (displayId === 12) {
        $('#pc-wrapper').css('background-color', '#4EF7D0');
        $('#pc-wrapper').css('background-image', 'none');
        $('#desktop').hide();
        $('#dh-opening').hide();
        $('.line__container').hide();
        $('.download_container').show();
        return;
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
