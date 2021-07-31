/** ローディングを見せる関数 */
const loading = () => {
    $('#loading').delay(1000).fadeOut(1000);
    $('#text1').delay(3000);
    $('#text2').delay(6000);
    $('#text3').delay(9000);
    $('#text4').delay(11000);
    $('#text5').delay(14000);
    $('#text6').delay(16000);
    $('#text7').delay(24000);
    $('#text22').delay(7000);
    $('#text44').delay(12000);
    $('#text8').delay(19000);
    $('#text9').delay(19500);
}

/** ページを読み込む */
$(window).on('load', loading());

    $('#text1').fadeIn(500);
    $('#text2').fadeIn(500);
    $('#text3').fadeIn(500);
    $('#text4').fadeIn(500);
    $('#text5').fadeIn(500);
    $('#text6').fadeIn(500);
    $('#text7').fadeIn(500);
    $('#text22').fadeIn(500);
    $('#text44').fadeIn(500);
    $('#text8').fadeIn(500);
    $('#text9').fadeIn(500);
      
