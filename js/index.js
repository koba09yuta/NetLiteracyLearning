/** 音楽 */
let bgm = new Audio();
let soundEffect = new Audio();

/** 暗転を見せる関数 */
const showDarkness = () => {
    // 暗転
    $('#darkness-wrapper').delay(500).show().animate({'opacity': 1}, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        $('#title-wrapper').show();
        $('#ok-button').hide();
        $('#start-button').show();
        $('#nyateracy-wrapper').show();
        $('#caution-wrapper').hide();
        $('body').css('backgroundImage', "url(./img/background/top_title.png)");
        // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
            bgm.volume = 0.2;
            bgm.play();
        });
    })
}

const showCaution = () => {
    // 暗転
    $('#darkness-wrapper').delay(500).show().animate({'opacity': 1}, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        $('#caution-wrapper').show();
        $('#logo-wrapper').hide();
        $('#ok-button').show();
        // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
        });
    })
}

/** ローディングを見せる関数 */
const loading = () => {
    $('#title-wrapper').hide();
    $('#nyateracy-wrapper').hide();
    $('#logo-wrapper').show();
    $('#caution-wrapper').hide();
    $('#ok-button').hide();
    $('#start-button').hide();
    bgm.src = "./music/bgm/so_sweet.mp3";
    soundEffect.src = "./music/sound_effect/「ピロリ」決定のボタン音・アクセント音.mp3";
    $('#loading').delay(800).fadeOut(1000, () => {
        showCaution();
    });
}

/** ページを読み込む */
$(window).on('load', loading());

/** スタートボタンを押す */
$('#ok-button').on("click", () => {
    showDarkness();
});

/** スタートボタンを押す */
$('#start-button').on("click", () => {
    soundEffect.volume = 0.4;
    soundEffect.play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 1000, 'swing', () => {
        window.location.href = './html/conversation1_1.html';
    });
});

