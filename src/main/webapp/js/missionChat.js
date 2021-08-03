/** ローディングを見せる関数 */
const loading = () => {
    $('#loading').delay(1000).fadeOut(1000);
    $('#text1').delay(3000).fadeIn(500);
    $('#text2').delay(5000).fadeIn(500);
    $('#text3').delay(7000).fadeIn(500);
    $('#text4').delay(9000).fadeIn(500);
    $('#text5').delay(11000).fadeIn(500);
    $('#text6').delay(13000).fadeIn(500);
    $('.scroll').delay(13500).animate({scrollTop: 1000}, 'fast');
}

/** ページを読み込む */
$(window).on('load', loading());

      
