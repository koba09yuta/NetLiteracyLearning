const music = document.getElementById('bgm');
music.volume = 0.09;
$('body').css('backgroundImage', "url(../img/background/Board.png)");

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
            question : 'ゲームでチャットをしていたら、ゲームの友達がおすすめの攻略サイトのURLを送ってきた。どうする？',
            answer : [
                '危ないかもしれないので、URLをクリックしない',
                '友達のおすすめサイトなので、他の友達にURLを教える',
                '友達が言っているので、URLをクリックする']
        }
        ,{
            question : 'ショウとの初めてのチャット！あなたの発言でキケンなところはどこだろう？',
            answer : ['ボクも東京！多摩小わかる？5年だよ！', 'はじめまして！よろしくお願いします！', 'さっそくダマスたおしに行こうよ！！']
        }
        ,{
            question : 'ゲームで遊んでいたらウイルスに感染してしまった！どうしたらいい？',
            answer : ['親に相談する', 'ダウンロードページに書いてあった電話番号に電話する', '無視してページを閉じる']
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
            quizArea.find('#comment_image').delay(1500).slideDown(400);
            quizArea.find('.back_button').delay(1500).slideDown(400);
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
        quizArea.find('.quiz_question').text(aryQuiz[quiz_cnt]['question']);
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
        text += '<br><a href="../../index.html" id="menu">メニューに戻る</a>';
        quizArea.find('.quiz_result').html(text);
        
        quizArea.find('#last_image').slideDown(400);
        quizArea.find('.last_button').slideDown(400);
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
});







