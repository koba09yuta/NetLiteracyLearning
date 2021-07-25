/**
 * ローディング後に、オープニングのテキストや画像を表示
 */
 $(window).on('load', function () { // 全ての読み込みが完了したら実行
    $('#loading').delay(1000).fadeOut(1000);
    $('.pop').hide();
    $('.shop').hide();
    $('.ad').hide();
    $('.campaign').hide();
    $('.register').hide();
});
    
/**
 * 10秒たったら強制的にロード画面を非表示
 */
$(() => {
    setTimeout(() => {
        $('#loading').delay(1000).fadeOut(1000);
    }, 10000);
});

/**
 * テキストを進めるイベントハンドラ
 */
 $('.game-text-box').on("click", () => {
    $('.game-text-box').hide();
    $('.pop').show();
});

/**
 * 「再挑戦する」のイベントハンドラ
 */
 $('#retry').on("click", () => {
    $('.game-text-box').show();
    $('.pop').hide();
});

/**
 * 「武器を強化する」のイベントハンドラ
 */
 $('#reinforce, .campaign-exit').on("click", () => {
    $('.pc-display').css('backgroundImage', "url(../../img/game/town.jpg)")
    $('.game-text-box').hide();
    $('.enemy').hide();
    $('.pop').hide();
    $('.shop').show();
});

/**
 * 「店を出る」のイベントハンドラ
 */
 $('#shop-exit').on("click", () => {
    $('.pc-display').css('backgroundImage', "url(../../img/game/grass_field.png)")
    $('.game-text-box').hide();
    $('.enemy').show();
    $('.pop').show();
    $('.shop').hide();
    $('.ad').hide();
    $('.campaign').hide();
    $('.register').hide();
});

/**
 * 武器を買おうとしたときのイベントハンドラ
 */
$('.shop table, .current-jewel').on("click", () => {
    $('.ad').animate({'height': 'toggle'});
});

/**
 * 広告をクリックしたときのイベントハンドラ
 */
 $('.ad, #ad-click').on("click", () => {
    $('.pc-display').css('backgroundImage', 'none').css('background-color', 'rgb(181, 255, 250)');
    $('.game-text-box').hide();
    $('.enemy').hide();
    $('.pop').hide();
    $('.shop').hide();
    $('.ad').hide();
    $('.campaign').show();
});

/**
 * 送信をクリックしたときのイベントハンドラ
 */
$('#submit').on("click", () => {
    $('.pc-display').css('backgroundImage', 'none').css('background-color', 'rgb(192, 192, 192)');
    $('.game-text-box').hide();
    $('.enemy').hide();
    $('.pop').hide();
    $('.shop').hide();
    $('.ad').hide();
    $('.campaign').hide();
    $('.register').show();
});

$('.register-exit').on("click", () => {
    location.replace("../html/conversation2.html");
});
