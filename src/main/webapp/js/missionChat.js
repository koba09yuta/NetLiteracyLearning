/** ローディングを見せる関数 */
const loading = () => {
    $('#loading').delay(1000).fadeOut(1000);
    $('#darkness-wrapper').hide();
    sceneShow();
}

/** ページを読み込む */
$(window).on('load', loading());