/** ローディングを見せる関数 */
const loading = () => {
    
    $('#loading').delay(800).fadeOut(1000, () => {
    $('#huki-wrapper').show();
    $('#title-wrapper').show();
    $('#darkness-wrapper').hide(200);
    $('#bgm').get(0).play();
    });
    
}

/** ページを読み込む */
$(window).on('load', loading());

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

/** スタートボタンを押す */
$('#start-button').on("click", () => {
    $('#sound-effect').get(0).volume = 0.4;
    $('#sound-effect').get(0).play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 500, 'swing', () => {
        window.location.href = '../html/quiz.html';
    });
});

const music = document.getElementById('bgm');
music.volume = 0.5