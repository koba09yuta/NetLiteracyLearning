/** 暗転を見せる関数 */
const showDarkness = () => {
    // 暗転
    $('#darkness-wrapper').delay(500).show().animate({'opacity': 1}, 500, 'swing', () => {
        // 暗転中に場面を切り替える
        $('#title-wrapper').show();
        $('#button-wrapper').show();
        $('#nyateracy-wrapper').show();
        $('#logo-wrapper').hide();
        $('body').css('backgroundImage', "url(./img/background/top_title.png)");
        // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
            $('#darkness-wrapper').hide();
            $('#bgm').get(0).volume = 0.2;
            $('#bgm').get(0).play();
        });
    })
}

/** ローディングを見せる関数 */
const loading = () => {
    $('#title-wrapper').hide();
    $('#button-wrapper').hide();
    $('#nyateracy-wrapper').hide();
    $('#logo-wrapper').show();
    $('#loading').delay(800).fadeOut(1000, () => {
        showDarkness();
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
    $('#sound-effect').get(0).volume = 0.4;
    $('#sound-effect').get(0).play();
    $('#darkness-wrapper').show().animate({'opacity': 1}, 1000, 'swing', () => {
        window.location.href = './src/main/webapp/WEB-INF/html/conversation1_1.html';
    });
});

