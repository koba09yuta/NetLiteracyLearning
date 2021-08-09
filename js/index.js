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
        $('body').css('backgroundImage', "url(./img/background/pc_room_noon.jpg)");
        // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
            $('#bgm_opening').get(0).volume = 0.2;
            $('#bgm_opening').get(0).play();
        });
    })
}

/** 警告を見せる関数 */
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
    // ロゴを表示
    $('#title-wrapper').hide();
    $('#nyateracy-wrapper').hide();
    $('#logo-wrapper').show();
    $('#caution-wrapper').hide();
    $('#ok-button').hide();
    $('#start-button').hide();
    
    // プリロード
    $("<img>").attr("src", "./img/background/pc_room_noon.jpg");
    
    // 警告を表示
    $('#loading').delay(800).fadeOut(1000, () => {
        showCaution();
    });
}

/** ページを読み込む */
$(window).on('load', loading());

/** OKボタンを押す */
$('#ok-button').on("click", () => {
    $('#se_start').get(0).volume = 0.4;
    $('#se_start').get(0).pause();
    $('#se_start').get(0).currentTime = 0;
    $('#se_start').get(0).play();
    showDarkness();
});

/** スタートボタンを押す */
$('#start-button').on("click", () => {
    $('#se_start').get(0).volume = 0.4;
    $('#se_start').get(0).pause();
    $('#se_start').get(0).currentTime = 0;
    $('#se_start').get(0).play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 1000, 'swing', () => {
        window.location.href = './html/menu.html';
    });
});

