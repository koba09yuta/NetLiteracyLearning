/**
 * 会話中のテキストや画像のオブジェクト    
 * 将来的に別ファイルに置き換え予定
 */
const storyData = [
    {
        "scene": "opening",
        "bgimg": "url(../../img/background/residential_area_noon.jpg)",
        "chapter-number": "ストーリー１",
        "chapter-title": "ゲームにひそむワナ",
    },
    {
        "scene": "conversation",
        "bgm": "../../music/bgm/なんでしょう？.mp3",
        "bgimg": "url(../../img/background/residential_area_noon.jpg)",
        "content": [
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
        ],
    },
    {
        "scene": "conversation",
        "bgm": "../../music/bgm/パステルハウス.mp3",
        "bgimg": "url(../../img/background/pc_room_evening.jpg)",
        "content": [
            {
                "title": "あなた",
                "text": "・・・いけ！そこだ！！",
                "main-person": "",
                "secondary-person": "",
                "tertiary-person": "",
                "back-img": "",
            },
            {
                "title": "あなた",
                "text": "くそ！どうやったらたおせるかな",
                "main-person": "",
                "secondary-person": "",
                "tertiary-person": "",
                "back-img": "",
            },
        ],
    }
]

/**
 * シーン番号
 * @type {Number}
 */
let sceneId = 0;

/**
 * 文の番号
 * @type {Number}
 */
let sentenceId = 0;

/**
 * 文の数
 * @type {Number}
 */
let sentenceLength = 0;

/**
 * 隠し要素の切り替えを行う関数
 * @param {string} scene 
 */
const changeHidden = (scene) => {
    if (scene == "opening") {
        $('#opening-wrapper').show();
        $('#conversation-wrapper').hide();
        $('#people-wrapper').hide();
        $('#back-wrapper').hide();
        $('#darkness-wrapper').hide();
    } else if (scene == "conversation") {
        $('#opening-wrapper').hide();
        $('#conversation-wrapper').show();
        $('#people-wrapper').show();
        $('#back-wrapper').show();
    }
}

/**
 * オープニングのテキストや画像を表示する関数
 * @returns {undefined}
 */
const showOpening = () => {
    $('body').css('backgroundImage', storyData[sceneId].bgimg)
    $('#chapter-number').html(storyData[sceneId]["chapter-number"]);
    $('#chapter-title').html(storyData[sceneId]["chapter-title"]);
}

/**
 * 会話中のテキストや画像を表示する関数
 * @returns {undefined}
 */
const showConversation = () => {
    $('#title').html(storyData[sceneId].content[sentenceId].title);
    $('#text').html(storyData[sceneId].content[sentenceId].text);
    $('#main-person').html(storyData[sceneId].content[sentenceId]["main-person"]);
    $('#secondary-person').html(storyData[sceneId].content[sentenceId]["secondary-person"]);
    $('#tertiary-person').html(storyData[sceneId].content[sentenceId]["tertiary-person"]);
    $('#back-img').html(storyData[sceneId].content[sentenceId]["back-img"]);
}

/**
 * ローディング後に、オープニングのテキストや画像を表示
 */
$(window).on('load', function () { // 全ての読み込みが完了したら実行
    $('#loading').delay(1000).fadeOut(1000);
    changeHidden("opening");
    showOpening();
});
    
//10秒たったら強制的にロード画面を非表示
$(() => {
    setTimeout('stopload()', 10000);
});
    
const stopload = () => {
    $('#loading').delay(1000).fadeOut(1000);
};

/**
 * シーンが進む際の処理をする関数
 */
const sceneAdvance = () => {
    sceneId++;
    if (storyData[sceneId].scene == "conversation") {
        
        // 暗転
        $('#darkness-wrapper').show().animate({'opacity': 1}, 500, 'swing', () => {
            sentenceLength = storyData[sceneId].content.length;
            sentenceId = 0;

            // 暗転中に場面を切り替える
            changeHidden("conversation");
            $('body').css('backgroundImage', storyData[sceneId].bgimg)
            $('#bgm source').attr('src', storyData[sceneId].bgm);
            document.querySelector("#bgm").load();
            $('#bgm').get(0).play();
            showConversation();

            // 明転
            $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
                $('#darkness-wrapper').hide();
            });
        })
    }
}

/**
 * オープニングラッパーを押したときに遷移するイベントハンドラ
 */
$('#opening-wrapper').on("click", () => {
    sceneAdvance();
});

/**
 * 進むボタンを押したときにテキストや画像を表示するイベントハンドラ
 */
$('#forward').on("click", () => {
    if (sentenceId < sentenceLength - 1) {
        makeSound();
        sentenceId++;
        showConversation();
    } else if (sentenceId == sentenceLength - 1) {
        makeSound();
        sceneAdvance();
    }
});

/**
 * 戻るボタンを押したときにテキストや画像を表示するイベントハンドラ
 */
$('#backward').on("click", () => {
    if (sentenceId > 0) {
        makeSound();
        sentenceId--;
        showConversation();
    }
});

/**
 * 効果音
 * @type {HTMLElement}
 */
const soundEffect = document.getElementById("sound-effect");

/**
 * 効果音を鳴らす関数
 * @returns {undefined}
 */
const makeSound = () => {
    soundEffect.pause();
    soundEffect.currentTime = 0;
    soundEffect.play();
}