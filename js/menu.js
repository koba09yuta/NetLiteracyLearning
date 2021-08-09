/** ローディングを見せる関数 */
const loading = () => {
    $('#title-wrapper').show();
    $('#nyateracy-wrapper').show();
    $('#darkness-wrapper').hide();    
    // メニューを表示
    $('#loading').delay(800).fadeOut(1000, () => {
        $('#bgm_menu').get(0).volume = 0.2;
        $('#bgm_menu').get(0).play();
    });
}

/** スタートボタンを押す */
$('#story1').on("click", () => {
    $('#se_start').get(0).volume = 0.4;
    $('#se_start').get(0).pause();
    $('#se_start').get(0).currentTime = 0;
    $('#se_start').get(0).play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 1000, 'swing', () => {
        window.location.href = './conversation1_1.html';
    });
});

/** ページを読み込む */
$(window).on('load', loading());