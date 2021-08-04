

/** ローディングを見せる関数 */
const loading = () => {
    $('#huki-wrapper').hide();
    $('#title-wrapper').hide();
    $('#button-wrapper').hide();
    $('#nyateracy-wrapper').hide();
    $('#logo-wrapper').show();
    $('#loading').delay(800).fadeOut(300, () => {
        $('#darkness-wrapper').hide();
        $('#huki-wrapper').show();
        $('#title-wrapper').show();
        $('#button-wrapper').show();
        $('#nyateracy-wrapper').show();
        $('body').css('backgroundImage', "url(../../img/background/blackboard.png)");
        $('#bgm').get(0).play();
    });
}

/** 効果音を鳴らす関数 */
const makeSound = (sound) => {
    if (sound === "") {
        $('#sound-effect source').attr('src', ObjectData.soundEffect.forward);
    }
    if (sound === "click") {
        $('#sound-effect source').attr('src', ObjectData.soundEffect.click);
    }
    document.querySelector("#sound-effect").load();
    $('#sound-effect').get(0).play();
}

/** ページを読み込む */
$(window).on('load', loading());

/** スタートボタンを押す */
$('#start-button').on("click", () => {
    $('#sound-effect').get(0).play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 700, 'swing', () => {
        window.location.href = '../html/quiz.html';
    });
});

