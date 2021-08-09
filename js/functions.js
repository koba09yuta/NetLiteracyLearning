/** ローディングを見せる関数 */
import { preload } from './preload.js';
import objectData from './story1ObjectData.js';
import story1_1Data from './story1_1Data.js';
import story1_2Data from './story1_2Data.js';
import story1_3Data from './story1_3Data.js';

/** ストーリーデータ */
let storyData = {};

/** シーン番号 */
let sceneId = 0;

/** シーンの長さ */
let sceneLength = 0;

/** シーンを進める関数 */
export const sceneAdvance = () => {
    sceneId++;
    if (sceneId === sceneLength) {
        $('#darkness-wrapper').show().animate({ 'opacity': 1 }, 500, 'swing', () => {
            window.location.href = "./startquiz.html";
        }); 
        return;
    }
}

/** ローディングの関数 */
export const loading = () => {
    const fileName = window.location.href.split('/').pop();
    if (fileName === "conversation1_1.html") {
        storyData = story1_1Data;
    } else if (fileName === "conversation1_2.html") {
        storyData = story1_2Data;
    } else if (fileName === "conversation1_3.html") {
        storyData = story1_3Data;
    }
    sceneLength = storyData.length;
    preload(fileName, () => {
        $('#darkness-wrapper').hide();
        $('#whiteout-wrapper').hide();
        $('#loading').delay(1000).fadeOut(1000, function () {
            if (storyData[sceneId].mode === "opening") {
                $('#sound-effect source').attr('src', objectData.soundEffect.opening);
                document.querySelector("#sound-effect").load();
                $('#sound-effect').get(0).volume = 0.4;
                $('#sound-effect').get(0).play();
            }
        });
        sceneShow();
    });
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
    });
}

/** ホワイトアウトを見せる関数 */
export const showWhiteout = () => {
    // 暗転
    $('#whiteout').get(0).volume = 0.1;
    $('#whiteout').get(0).currentTime = 0;
    setTimeout(() => $('#whiteout').get(0).play(), 500);
    $('#whiteout-wrapper').show().animate({ 'opacity': 1 }, 1000, 'swing', () => {
        // 暗転中に場面を切り替える
        sceneId++;
        sceneShow();
        // 明転
        $('#whiteout-wrapper').delay(500).animate({ 'opacity': 0 }, 1000, 'swing', () => {
            $('#whiteout-wrapper').hide();
        });
    });
}

/** ゲームローディングを見せる関数 */
export const showGameLoading = () => {
    $('#black-wrapper').show().animate({opacity: 1}, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        sceneId++;
        sceneShow();
        $('#conversation-wrapper').hide();
        $('#black-wrapper').hide();
        $('#game-loading').show();
        // 明転
        $('#game-loading').delay(1000).animate({opacity: 0}, 500, 'swing', () => {
            $('#game-loading').hide();
            $('#game-loading').css({opacity: 1});
            $('#black-wrapper').css({opacity: 0});
            if (storyData[sceneId].mode === "explanation") {
                $('#conversation-wrapper').delay(500).fadeIn(200);
                $('.conversation-box').show();
                $('.pointer').show();
                $('#pc-wrapper').show();
                $('#nyateracy').show();
                $('#transparent-wrapper').show();
            }
        });
    });
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
    $('#black-wrapper').hide();
    $('#game-loading').hide();
    $('#desktop').hide();
    $('#dh-opening').hide();
    $('#dh-menu').hide();
    $('#dh-quest').hide();
    $('#dh-friend').hide();
    $('#board').hide();
    $('.line__container').hide();
    $('.download_container').hide();
    $('#ransomware-container').hide();
    // デスクトップ画面
    if (displayId <= 4) {
        $("#white-wrapper").css({opacity: 0}); 
        $('#pc-wrapper').css('background-color','rgb(0,181,252)');
        $('#pc-wrapper').css('background-image', 'none');
        $('#desktop').show();
        if (displayId === 0) {
            $('#dragon-hunter').show();
            $('#ransomware').hide();
            $('#dragon-hunter').removeClass("flush-icon");
            return;
        }
        if (displayId === 1) {
            $('#dragon-hunter').show();
            $('#ransomware').show();
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
            $('#dragon-hunter').addClass("flush-icon");
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
    // タイトル画面
    if (displayId === 5) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhOpening + ")");
        $('#dh-opening').show();
        return;
    }
    // メニュー画面
    if (displayId === 6 || displayId === 7) {
        $("#white-wrapper").css({opacity: 0.2});
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhMenu + ")");
        $('#dh-menu').show();
        $('#dh-quest-btn').removeClass("flush-button");
        $('#dh-friend-btn').removeClass("flush-button");
        if (displayId === 6 && storyData[sceneId].mode === "operation") {
            $('#dh-quest-btn').addClass("flush-button");
        }
        if (displayId === 7 && storyData[sceneId].mode === "operation") {
            $('#dh-friend-btn').addClass("flush-button");
        }
        return;
    }
    // クエスト画面
    if (displayId === 8 || displayId === 9) {
        $("#white-wrapper").css({opacity: 0.2});
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhQuest + ")");
        $('#dh-quest').show();
        $('#dh-quest-solo').removeClass("flush-button");
        $('#dh-quest-team').removeClass("flush-button");
        if (displayId === 8 && storyData[sceneId].mode === "operation") {
            $('#dh-quest-solo').addClass("flush-button");
        }
        if (displayId === 9 && storyData[sceneId].mode === "operation") {
            $('#dh-quest-team').addClass("flush-button");
        }
        return;
    }
    // フレンド画面
    if (displayId === 10 || displayId === 11) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhFriend + ")");
        $('#dh-friend').show();
        $('#dh-friend-chat').removeClass("flush-button");
        $('#dh-friend-recruit').removeClass("flush-button");
        if (displayId === 10 && storyData[sceneId].mode === "operation") {
            $('#dh-friend-chat').addClass("flush-button");
        }
        if (displayId === 11 && storyData[sceneId].mode === "operation") {
            $('#dh-friend-recruit').addClass("flush-button");
        }
        return;
    }
    // チャットルーム（フレンド一覧）画面
    if (displayId === 12) {
       return;
    }
    // フレンド募集画面
    if (displayId === 13 || displayId === 14 || displayId === 15) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhFriend + ")");
        $('#board').show();
        $('#anata-container').hide();
        $('#sho-container').hide();
        if (displayId === 14) {
            $('#anata-container').show();
        }
        if (displayId === 15) {
            $('#anata-container').show();
            $('#sho-container').show();
        }
        return;
    }
    // チャット画面1（自動遷移）
    if (displayId === 20) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhPortTown + ")");
        $('.line__container').show();
        $('#transparent-wrapper').show();
        $('#text1-1').delay(1000).fadeIn(500);
        $('#text1-2').delay(3000).fadeIn(500);
        $('#text1-3').delay(5000).fadeIn(500);
        $('#text1-4').delay(7000).fadeIn(500);
        $('#text1-5').delay(9000).fadeIn(500);
        $('#text1-6').delay(11000).fadeIn(500);
        $('.scroll').delay(11500).animate({scrollTop: 1000}, 'fast');
        setTimeout(() => {
            $('#transparent-wrapper').hide();
            $('#conversation-wrapper').show();
            $('.pointer').show()
        }, 12500);
        return;
    }
    // チャット画面2（自動遷移）
    if (displayId === 16) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhPortTown + ")");
        $('.line__container').show();
        $('#transparent-wrapper').show();
        $('#text1-1').hide();
        $('#text1-2').hide();
        $('#text1-3').hide();
        $('#text1-4').hide();
        $('#text1-5').hide();
        $('#text1-6').hide();
        $('#text2-1').delay(1000).fadeIn(500);
        $('#text2-2').delay(3000).fadeIn(500);
        $('#text2-3').delay(5000).fadeIn(500);
        $('#text2-4').delay(7000).fadeIn(500);
        $('#text2-5').delay(9000).fadeIn(500);
        $('#text2-6').delay(11000).fadeIn(500);
        $('.scroll').delay(11500).animate({scrollTop: 1000}, 'fast');
        setTimeout(() => {
            $('#conversation-wrapper').show();
            $('.pointer').show()
        }, 12500);
        return;
    }
    // チャット画面1（遷移なし）
    if (displayId === 21) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhPortTown + ")");
        $('.line__container').show();
        return;
    }
    // チャット画面2（遷移なし）
    if (displayId === 17) {
        $("#white-wrapper").css({opacity: 0.2}); 
        $('#pc-wrapper').css('background-color','transparent');
        $('#pc-wrapper').css('background-image', "url(" + objectData.bgimg.dhPortTown + ")");
        $('.line__container').show();
        return;
    }
    // ダウンロード画面
    if (displayId === 18) {
        $("#white-wrapper").css({opacity: 0}); 
        $('#pc-wrapper').css('background-color', '#4EF7D0');
        $('#pc-wrapper').css('background-image', 'none');
        $('.download_container').show();
        return;
    }
    // ランサムウェア疑似サイト画面
    if (displayId === 19) {
        $("#white-wrapper").css({opacity: 0}); 
        $('#pc-wrapper').css('background-color', 'darkred');
        $('#pc-wrapper').css('background-image', 'none');
        $('#ransomware-container').show();
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

/** 正しいボタンを選択する関数 */
export const activate = (name) => {
    if (storyData[sceneId].displayId === 2 && name === "dragonHunter") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 3 && name === "dragonHunter") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 4 && name === "ransomware") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 6 && name === "quest") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 7 && name === "friend") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 8 && name === "solo") {
        window.location.href = "./missionDamas1.html";
        return;
    }
    if (storyData[sceneId].displayId === 9 && name === "team") {
        window.location.href = "./missionDamas2.html";
        return;
    }
    if (storyData[sceneId].displayId === 10 && name === "chat") {
        sceneAdvance();
        sceneShow();
        return;
    }
    if (storyData[sceneId].displayId === 11 && name === "recruit") {
        sceneAdvance();
        sceneShow();
        return;
    }
    changeHide("explanation");
    $('#title').html(objectData.character.anata.name);
    $('#text').html("今はこの操作じゃないな");
    sceneId--;
}

/** 隠し要素を切り替える関数 */
export const changeHide = (scene) => {
    $('#opening-wrapper').hide();
    $('#people-wrapper').hide();
    $('#img-wrapper').hide();
    $('#selection-wrapper').hide();
    $('#conversation-wrapper').hide();
    $('.conversation-box').hide();
    $('.pointer').hide();
    $('#pc-wrapper').hide();
    $('#nyateracy').hide();
    $('#transparent-wrapper').hide();
    if (scene === "opening") {
        $('#opening-wrapper').show();
        return;
    }
    if (scene === "conversation") {
        $('#people-wrapper').show();
        $('#img-wrapper').show();
        $('#conversation-wrapper').show();
        $('.conversation-box').show();
        $('.pointer').show();
        return;
    }
    if (scene === "selection") {
        $('#selection-wrapper').show();
        $('#conversation-wrapper').show();
        $('#pc-wrapper').show();
        $('#transparent-wrapper').show();
        return;
    }
    if (scene === "explanation") {
        $('#conversation-wrapper').show();
        $('.conversation-box').show();
        $('.pointer').show();
        $('#pc-wrapper').show();
        $('#nyateracy').show();
        $('#transparent-wrapper').show();
        return;
    }
    if (scene === "operation") {
        $('#pc-wrapper').show();
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
    if (storyData[sceneId].mode === "whiteout") {
        showWhiteout();
        return;
    }
    if (storyData[sceneId].mode === "gameLoading") {
        showGameLoading();
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
        $('body').css('backgroundImage', "url(" + storyData[sceneId].bgimg + ")");
    }
    if (storyData[sceneId].bgm) {
        if (storyData[sceneId].bgm === "stop") {
            $('#bgm').get(0).pause();
            $('#bgm').get(0).currentTime = 0;
            return;
        }
        if (storyData[sceneId].bgm === "roadNoon") {
            $('#bgm source').attr('src', objectData.bgm.roadNoon);
            $('#bgm').get(0).volume = 0.2;
        }
        if (storyData[sceneId].bgm === "home") {
            $('#bgm source').attr('src', objectData.bgm.home);
            $('#bgm').get(0).volume = 0.2;
        }
        if (storyData[sceneId].bgm === "nyateracy") {
            $('#bgm source').attr('src', objectData.bgm.nyateracy);
            $('#bgm').get(0).volume = 0.2;
        }
        if (storyData[sceneId].bgm === "truth") {
            $('#bgm source').attr('src', objectData.bgm.truth);
            $('#bgm').get(0).volume = 0.2;
        }
        if (storyData[sceneId].bgm === "dhOpening") {
            $('#bgm source').attr('src', objectData.bgm.dhOpening);
            $('#bgm').get(0).volume = 0.2;
        }
        if (storyData[sceneId].bgm === "dhMenu") {
            $('#bgm source').attr('src', objectData.bgm.dhMenu);
            $('#bgm').get(0).volume = 0.1;
        }
        document.querySelector("#bgm").load();
        $('#bgm').get(0).play();
    }
}

/** 効果音を鳴らす関数 */
export const makeSound = (sound) => {
    if (sound === "forward") {
        $('#sound-effect source').attr('src', objectData.soundEffect.forward);
        $('#sound-effect').get(0).volume = 0.4;
    }
    if (sound === "click") {
        $('#sound-effect source').attr('src', objectData.soundEffect.click);
        $('#sound-effect').get(0).volume = 0.4;
    }
    if (sound === "slash") {
        $('#sound-effect source').attr('src', objectData.soundEffect.slash);
        $('#sound-effect').get(0).volume = 0.2;
    }
    document.querySelector("#sound-effect").load();
    $('#sound-effect').get(0).play();
}
