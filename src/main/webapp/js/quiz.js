$('body').css('backgroundImage', "url(../../img/background/blackboard.png)");

$(function(){
    var quizArea = $('.quiz_area'); //クイズを管理するDOMを指定
    var commentArea = $('.comment_area'); //解説を管理するDOMを指定
    var quiz_html = quizArea.html(); //もう一度　を押した時に元に戻すため初期HTMLを変数で保管
    var quiz_cnt = 0; //現在の問題数を管理
    var quiz_fin_cnt = 3; //何問で終了か設定（クイズ数以下であること）
    var quiz_success_cnt = 0; //問題の正解数
    
    //クイズの配列を設定
    //answerの選択肢の数はいくつでもOK　ただし先頭を正解とすること(出題時に選択肢はシャッフルされる)
    var aryQuiz = [];
    aryQuiz.push(
        {
            question : '　　　　　　　大囿？　',
            answer : ['　　　あおい　　', '　　　やおい　　', '　　　やおい　　']
        }
        ,{
            question : '　　　　　　こばやし？　',
            answer : ['　　ゆうた　', '　　かんた　', '　　もんた　']
        }
        ,{
            question : '　発表は何日？　',
            answer : ['８・１２', '８・１３', '８．１８']
        }
        ,{
            question : '知らない人から送られたURLはどうしたらよい？',
            answer : ['選択肢１', '選択肢２', '選択肢3']
        }
        ,{
            question : '知らない人から送られたURLはどうしたらよい？',
            answer : ['選択肢１', '選択肢２', '選択肢3']
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
            $('#sound-effect source').attr('src',"../../music/sound_effect/正解音.mp3");
            document.querySelector("#sound-effect").load();
            $('#sound-effect').get(0).play();

            //正解数をカウント
            quiz_success_cnt++;
        }else{
            //不正解の処理
            quizArea.find('.quiz_area_icon').addClass('false');
            $('#sound-effect source').attr('src',"../../music/sound_effect/不正解のブザー音_3種.mp3");
            document.querySelector("#sound-effect").load();
            $('#sound-effect').get(0).play();
        }
        setTimeout(function(){
            //表示を元に戻す
            quizArea.find('.quiz_ans_area ul li').removeClass('selected');
            quizArea.find('.quiz_area_icon').removeClass('true false');
            quizArea.find('.quiz_area_bg').hide();
            commentArea.find('.comment_bg').show();
            commentArea.find('.comment_image').show();
            
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
    
    //解説をクリックしたときの処理
    commentArea.on('click', '.comment_image', function(){
        
        commentArea.find('.comment_bg').hide();
        commentArea.find('.comment_image').hide();
        commentArea.find('.btn btn-flat').hide();
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
        if(quiz_success_cnt == 2){
            text += '<br><p class="star">★★☆</p>';
        }else{
            text += '<br><p class="star">★★★</p>';
        }
        text += '<br><a href="../../index.html" id="menu">メニューに戻る</a>';
        quizArea.find('.quiz_result').html(text);
        quizArea.find('.quiz_result').show();
        quizArea.find('.quiz_result').show();
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







