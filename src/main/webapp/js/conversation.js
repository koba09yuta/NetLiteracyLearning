import storyData from './sampleData.js'

/** シーン番号 */
let sceneId = 0;

/** 効果音 */
const soundEffect = document.getElementById("sound-effect");

/** ローディングを見せる関数*/
const loading = () => {
    $('#loading').delay(1000).fadeOut(1000);
    $('#darkness-wrapper').hide();
    showConversation();
}

/** 会話を見せる関数 */
const showConversation = () => {
    changeHide("conversation");
    if (storyData[sceneId].bgimg) {
        $('body').css('backgroundImage', storyData[sceneId].bgimg);
    }
    if (storyData[sceneId].bgm) {
        $('#bgm source').attr('src', storyData[sceneId].bgm);
        document.querySelector("#bgm").load();
        $('#bgm').get(0).play();
    }
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
    if (storyData[sceneId].bgimg) {
        $('body').css('backgroundImage', storyData[sceneId].bgimg);
    }
    if (storyData[sceneId].bgm) {
        $('#bgm source').attr('src', storyData[sceneId].bgm);
        document.querySelector("#bgm").load();
        $('#bgm').get(0).play();
    }
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
        sceneId--;
    } 
    return;
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
        return;
    }
}

/** シーンが進む際の処理をする関数 */
const sceneShow = () => {
    if (storyData[sceneId].mode == "conversation") {
        showConversation();
        return;
    }
    if (storyData[sceneId].mode == "darkness") {
        showDarkness();
        return;
    }
    if (storyData[sceneId].mode == "selection") {
        showSelection();
        return;
    }
}

/** 効果音を鳴らす関数 */
const makeSound = () => {
    soundEffect.pause();
    soundEffect.currentTime = 0;
    soundEffect.play();
}

/** ページを読み込む */
$(window).on('load', loading());

/** 会話を進める */
$('#forward').on("click", () => {
    makeSound();
    sceneId++;
    sceneShow();
});

/** 選択肢1に答える */
$('#selection1').on("click", () => {
    makeSound();
    showAnswer(1);
});

/** 選択肢2に答える */
$('#selection2').on("click", () => {
    makeSound();
    showAnswer(2);
});

/** 選択肢3に答える */
$('#selection3').on("click", () => {
    makeSound();
    showAnswer(3);
});