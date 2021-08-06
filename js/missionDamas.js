/**
 * ローディング後に、オープニングのテキストや画像を表示
 */
 $(window).on('load', function () { // 全ての読み込みが完了したら実行
    $('#loading').delay(1000).fadeOut(1000);
});
    
/**
 * 10秒たったら強制的にロード画面を非表示
 */
$(() => {
    setTimeout(() => {
        $('#loading').delay(1000).fadeOut(1000);
    }, 10000);
});
