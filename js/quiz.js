const music = document.getElementById('bgm');
music.volume = 0.09;

/** ローディングを見せる関数 */
const loading = () => {
    
     // 明転
        $('#darkness-wrapper').animate({'opacity': 0}, 500, 'swing', () => {
        $('#darkness-wrapper').hide();
        
    });
    
}

/** ページを読み込む */
$(window).on('load', loading());


$(function(){
    let quizArea = $('.quiz_area'); //クイズを管理するDOMを指定
    let quiz_html = quizArea.html(); //もう一度　を押した時に元に戻すため初期HTMLを変数で保管
    let quiz_cnt = 0; //現在の問題数を管理
    let quiz_fin_cnt = 3; //何問で終了か設定
    let quiz_success_cnt = 0; //問題の正解数
    
    //クイズの配列を設定(正解は一番前に)
    let aryQuiz = [];
    aryQuiz.push(
        {
            question : 'ゲームでチャットをしていたら、ゲームの<ruby><rb>友達</rb><rp>（</rp><rt>ともだち</rt><rp>）</rp></ruby>がおすすめの強化ツールの<ruby><rb>URL</rb><rp>（</rp><rt>ユーアールエル</rt><rp>）</rp></ruby>を送ってきた。どうする？',
            answer : [

                '<ruby><rb>危</rb><rp>（</rp><rt>あぶ</rt><rp>）</rp></ruby>ないかもしれないので、<ruby><rb>URL</rb><rp>（</rp><rt>ユーアールエル</rt><rp>）</rp></ruby>をクリックしない。',
                '<ruby><rb>友達</rb><rp>（</rp><rt>ともだち</rt><rp>）</rp></ruby>のおすすめサイトなので、他の<ruby><rb>友達</rb><rp>（</rp><rt>ともだち</rt><rp>）</rp></ruby>に<ruby><rb>URL</rb><rp>（</rp><rt>ユーアールエル</rt><rp>）</rp></ruby>を教える。',
                '<ruby><rb>友達</rb><rp>（</rp><rt>ともだち</rt><rp>）</rp></ruby>が言っているので、<ruby><rb>URL</rb><rp>（</rp><rt>ユーアールエル</rt><rp>）</rp></ruby>をクリックする。']
                
        }
        ,{
            question : 'ショウとの<ruby><rb>初</rb><rp>（</rp><rt>はじ</rt><rp>）</rp></ruby>めてのチャット！あなたの発言で<ruby><rb>危険</rb><rp>（</rp><rt>きけん</rt><rp>）</rp></ruby>なところはどこだろう？',
            answer : ['ボクも東京！<ruby><rb>多摩</rb><rp>（</rp><rt>たま</rt><rp>）</rp></ruby>小わかる？5年だよ！', 'はじめまして！よろしくお<ruby><rb>願</rb><rp>（</rp><rt>ねが</rt><rp>）</rp></ruby>いします！', 'さっそくダマスをたおしに行こうよ！！']
        }
        ,{
            question : 'ゲームで遊んでいたらウイルスに<ruby><rb>感染</rb><rp>（</rp><rt>かんせん</rt><rp>）</rp></ruby>してしまった！そんな時はどうしたらいい？',
            answer : ['親に相談する', 'ダウンロードページに書いてあった電話番号に電話する', '<ruby><rb>無視</rb><rp>（</rp><rt>むし</rt><rp>）</rp></ruby>してページを<ruby><rb>閉</rb><rp>（</rp><rt>と</rt><rp>）</rp></ruby>じる']
        }
        
    );

   
    quizReset();
    
     //回答を選択した後の処理
     quizArea.on('click', '.quiz_ans_area ul li', function(){
        //画面を暗くするボックスを表示（上から重ねて、結果表示中は選択肢のクリックやタップを封じる
        quizArea.find('.quiz_area_bg').show();
        //選択した回答に色を付ける
        $(this).addClass('selected');
        if($(this).data('true')){
            //正解の処理 〇を表示
            quizArea.find('.quiz_area_icon').addClass('true');
            $('#sound-effect source').attr('src',"../music/sound_effect/正解音.mp3");
            document.querySelector("#sound-effect").load();
            $('#sound-effect').get(0).play();
            quizArea.find('.quiz_set').delay(1500).hide(1);
            quizArea.find('#comment_image').delay(1500).slideDown(600);
            quizArea.find('.back_button').delay(1500).slideDown(600);
            $("#nyateracy-wrapper").delay(1500).slideDown(1);
            //正解数をカウント
            quiz_success_cnt++;
　　　　　　 changeIMG();
           
        }else{
            //不正解の処理
            quizArea.find('.quiz_area_icon').addClass('false');
            $('#sound-effect source').attr('src',"../music/sound_effect/伸びる.mp3");
            document.querySelector("#sound-effect").load();
            $('#sound-effect').get(0).play();
            quiz_cnt--;
            quiz_success_cnt--;
        }
        setTimeout(function(){
            //表示を元に戻す
            quizArea.find('.quiz_ans_area ul li').removeClass('selected');
            quizArea.find('.quiz_area_icon').removeClass('true false');
            
           
            //問題のカウントを進める
            quiz_cnt++;
            if(quiz_fin_cnt > quiz_cnt){
                //次の問題を設定する
                quizShow();
            }else{
                //結果表示画面を表示
                quizResult();
            }
        }, 1500);
    });
    
    //次へボタンをクリックしたときの処理
    quizArea.on('click', '.back_button', function(){
        quizArea.find('.quiz_set').show();
        quizArea.find('#comment_image').hide();
        quizArea.find('.back_button').hide();
        $("#nyateracy-wrapper").hide();
        
    });

    //おわるボタンをクリックしたときの処理
    quizArea.on('click', '.last_button', function(){
        quizArea.find('#last_image').hide();
        quizArea.find('.last_button').hide();
        quizArea.find('#comment_image').hide();
        quizArea.find('.back_button').hide();
        
    });

    //もう一度挑戦するを押した時の処理
    quizArea.on('click', '.quiz_restart', function(){
        quizReset();
    });
    
    //リセットを行う関数
    function quizReset(){
        quizArea.html(quiz_html); //表示を元に戻す
        quiz_cnt = 0;
        quiz_success_cnt = 0;
        quizShow();
    }
    
    //問題を表示する関数
    function quizShow(){
        //何問目かを表示
        quizArea.find('.quiz_no').text((quiz_cnt + 1));
        //問題文を表示
        quizArea.find('.quiz_question').html(aryQuiz[quiz_cnt]['question']);
        //解説を表示
       // quizArea.find('.comment_image').image(aryComment[quiz_cnt]);
        //正解の回答を取得する
        var success = aryQuiz[quiz_cnt]['answer'][0];
        //現在の選択肢表示を削除する
        quizArea.find('.quiz_ans_area ul').empty();
        //問題文の選択肢をシャッフルさせる
        var aryHoge = arrShuffle(aryQuiz[quiz_cnt]['answer'].concat());
        //問題文の配列を繰り返し表示する
        $.each(aryHoge, function(key, value){
            var fuga = '<li>' + value + '</li>';
            //正解の場合はdata属性を付与する
            if(success === value){
                fuga = '<li data-true="1">' + value + '</li>';
            }
            quizArea.find('.quiz_ans_area ul').append(fuga);
        });
    }
    
    //結果を表示する関数
    function quizResult(){

        quizArea.find('.quiz_set').hide();
        var text = '<p class="clear">ストーリークリア！！</p>';
        if(quiz_success_cnt <= 1){
            text += '<br><p class="star">★☆☆</p>';
        }
        if(quiz_success_cnt === 2){
            text += '<br><p class="star">★★☆</p>';
        }
        if(quiz_success_cnt === 3){
            text += '<br><p class="star">★★★</p>';
        }

        text += '<p id="conclude1">☑ あやしい<ruby><rb>URL</rb><rp>（</rp><rt>ユーアールエル</rt><rp>）</rp></ruby>はクリックしない</p>';
        text += '<p id="conclude2">☑ <ruby><rb>個人情報</rb><rp>（</rp><rt>こじんじょうほう</rt><rp>）</rp></ruby>は公開しない</p>';
        text += '<p id="conclude3">☑ ネットトラブルは親に相談する</p>';
        text += '<br><a href="../html/menu.html" id="menu">メニューに戻る</a>';

        setTimeout(() => quizArea.find('.quiz_result').html(text), 600);
        quizArea.find('#last_image').slideDown(600);
        quizArea.find('.last_button').slideDown(600);
    }

    
    //配列をシャッフルする関数
    function arrShuffle(arr){
        for(i = arr.length - 1; i > 0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }

    //画像を配列に格納する
    var img = new Array();

    img[0] = new Image();
    img[0].src = "../img/quiz/quiz1.svg";
    img[1] = new Image();
    img[1].src = "../img/quiz/quiz1.svg";
    img[2] = new Image();
    img[2].src = "../img/quiz/quiz2.svg";

    //画像番号用のグローバル変数
    var cnt = 0;
    //画像切り替え関数
    function changeIMG() {

        //画像番号を進める
        if (cnt == 2) { cnt = 0; }
        else { cnt++; }
        //画像を切り替える
        document.getElementById("comment_image").src = img[cnt].src;
    }
});







