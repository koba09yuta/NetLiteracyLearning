import objectData from './story1ObjectData.js'
import storyData from './story1_1Data.js'

/** シーン番号 */
let sceneId = 0;

/** ローディングを見せる関数 */
const loading = () => {
    $('#loading').delay(1000).fadeOut(1000);
    $('#darkness-wrapper').hide();
    sceneShow();
}

/** オープニングを見せる関数 */
const showOpening = () => {
    changeHide("opening");
    changeBack();
    $('#chapter-number').html(storyData[sceneId].chapterNumber);
    $('#chapter-title').html(storyData[sceneId].chapterTitle);
}

/** 会話を見せる関数 */
const showConversation = () => {
    changeHide("conversation");
    changeBack();
    $('#title').html(storyData[sceneId].title);
    $('#text').html(storyData[sceneId].text);
    $('#most-left').html(storyData[sceneId].mostLeft);
    $('#center-left').html(storyData[sceneId].centerLeft);
    $('#center-right').html(storyData[sceneId].centerRight);
    $('#most-right').html(storyData[sceneId].mostRight);
    $('#nyateracy').html(storyData[sceneId].nyateracy);
    $('#back-img').html(storyData[sceneId].img);
}

/** 暗転を見せる関数 */
const showDarkness = () => {
    // 暗転
    $('#darkness-wrapper').show().animate({'opacity': 1}, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        sceneId++;
        showConversation();
        // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
        });
    })
}

/** 選択肢を見せる関数 */
const showSelection = () => {
    changeHide("selection");
    changeBack();
    $('#title').html(storyData[sceneId].title);
    $('#text').html(storyData[sceneId].text);
    $('#selection1').html(storyData[sceneId].selection1.selection);
    $('#selection2').html(storyData[sceneId].selection2.selection);
    $('#selection3').html(storyData[sceneId].selection3.selection);
}

/** 選択肢の答えを見せる関数 */
const showAnswer = (selectionNumber) => {
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
    if (selectionData.nyateracy) {
        $('#nyateracy-wrapper').show();
        $('#nyateracy').html(selectionData.nyateracy);
    }
    $('#title').html(selectionData.title);
    $('#text').html(selectionData.text);
    if (!selectionData.answer) {
        $('#sound-effect source').attr('src', objectData.soundEffect.incorrect);
        document.querySelector("#sound-effect").load();
        $('#sound-effect').get(0).play();
        sceneId--;
    } else {
        $('#sound-effect source').attr('src', objectData.soundEffect.correct);
        document.querySelector("#sound-effect").load();
        $('#sound-effect').get(0).play();
    } 
    return;
}

/** パソコン操作を表示する関数 */
const showOperation = () => {
    changeHide("operation");
    changeBack();
    if (storyData[sceneId].operationId === 1) {
        $('#dragon-hunter').show();
        $('#ransomware').hide();
        $('#dragon-hunter').addClass("flush-icon");
    }
}

/** 隠し要素を切り替える関数 */
const changeHide = (scene) => {
    if (scene === "opening") {
        $('#opening-wrapper').show();
        $('#people-wrapper').hide();
        $('#nyateracy-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').hide();
        $('#pc-wrapper').hide();
        return;
    }
    if (scene === "conversation") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').show();
        $('#nyateracy-wrapper').show();
        $('#img-wrapper').show();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').show();
        $('.pointer').show();
        $('#pc-wrapper').hide();
        return;
    }
    if (scene === "selection") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').hide();
        $('#nyateracy-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').show();
        $('#conversation-wrapper').show();
        $('.pointer').hide();
        $('#pc-wrapper').hide();
        return;
    }
    if (scene === "operation") {
        $('#opening-wrapper').hide();
        $('#people-wrapper').hide();
        $('#nyateracy-wrapper').hide();
        $('#img-wrapper').hide();
        $('#selection-wrapper').hide();
        $('#conversation-wrapper').hide();
        $('.pointer').hide();
        $('#pc-wrapper').show();
        return;
    }
}

/** シーンが進む際の処理をする関数 */
const sceneShow = () => {
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
    if (storyData[sceneId].mode === "operation") {
        showOperation();
        return;
    }
}

/** 背景画像やBGMを切り替える関数 */
const changeBack = () => {
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
const makeSound = (sound) => {
    if (sound === "forward") {
        $('#sound-effect source').attr('src', objectData.soundEffect.forward);
    }
    if (sound === "click") {
        $('#sound-effect source').attr('src', objectData.soundEffect.click);
    }
    document.querySelector("#sound-effect").load();
    $('#sound-effect').get(0).play();
}

/** ページを読み込む */
$(window).on('load', loading());

/** オープニングを閉じる */
$('#opening-wrapper').on("click", () => {
    sceneId++;
    sceneShow();
});

/** 会話を進める */
$('#forward').on("click", () => {
    makeSound("forward");
    sceneId++;
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
    sceneId++;
    sceneShow();
    // location.replace("../html/mission.html");
});