import objectData from './story1ObjectData.js'

const story1_3Data = [
    // ダマス戦2回目~ニャテラシー登場
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "dhMenu",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "やった、ダマスをたおせた！！！ショウ強すぎる！！！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "うらやましいな、どうしたら強くなれるか聞いてみよう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 7,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 10,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "「チャットルーム」をおせば聞けそうだ！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 10,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "operation",
        "displayId": 16,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "あの強さのヒミツは強化ツールだったんだ・・・！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "みんなやってるなら、ボクもやってみよ！強くなりたいし！！！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 17,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "operation",
        "displayId": 18,
        "bgm": "",
        "bgimg": ""
    },

    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さて、これで強くなったかなー？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "explanation",
        "displayId": 3,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっそくドラゴンハンターを起動してみよう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 3,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "stop",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "あれ！ゲームに入れない・・・？",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 4,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっきダウンロードした強化ツールは？",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 4,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "explanation",
        "displayId": 19,
        "bgm": "",
        "bgimg": "",
        "title": "",
        "text": "<span style='color: yellow;'><ruby><rb>警告</rb><rp>（</rp><rt>けいこく</rt><rp>）</rp></ruby>！あなたのパソコンはロックされました。<span>",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 19,
        "bgm": "",
        "bgimg": "",
        "title": "",
        "text": "<span style='color: yellow;'>20万円はらわなければ、データはすべて消去されます。</span>",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 19,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "に・・・に・・・",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 19,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "<span style='font-size: 8vh;'>20万円だってえええ！？！？</span>",
        "nyateracy": ""
    },

    // ニャテラシー登場~過去にもどる
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "大変なことになっちゃった・・・。20万円なんて持っているわけないよ・・・。",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "nyateracy",
        "bgimg": "",
        "title": "？？？",
        "text": "あーあ・・・。大変なことになっちゃったね・・・。",
        "nyateracy": objectData.character.nyateracy.pose1
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "えっ、だれ！？パソコンの中に・・・黒いネコ！？",
        "nyateracy": objectData.character.nyateracy.pose1
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "ボクはニャテラシー！時がもどせる<ruby><rb>不思議</rb><rp>（</rp><rt>ふしぎ</rt><rp>）</rp></ruby>なネコちゃんさ♪",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "時をもどせるだって？？<br>ありえないよ！そんなの！",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "パソコンの中からしゃべってくる黒ネコの方がありえないと思うよ～",
        "nyateracy": objectData.character.nyateracy.pose3
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "たしかに・・・",
        "nyateracy": objectData.character.nyateracy.pose3
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "キミはゲームで強くなることに一生けん命で気づかずにウイルスに<ruby><rb>感染</rb><rp>（</rp><rt>かんせん</rt><rp>）</rp></ruby>しちゃったみたいだ。",
        "nyateracy": objectData.character.nyateracy.pose1
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "何がいけなかったのか考えてみて！",
        "nyateracy": objectData.character.nyateracy.pose4
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "時をもどす前に、トラブルの<ruby><rb>裏側</rb><rp>（</rp><rt>うらがわ</rt><rp>）</rp></ruby>をいっしょに見てみよう！",
        "nyateracy": objectData.character.nyateracy.pose4
    },

    // 過去にもどる~クイズ
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 13,
        "bgm": "truth",
        "bgimg": objectData.bgimg.roomNight,
        "title":  objectData.character.anata.name,
        "text": "さっそくフレンドぼしゅうに書きこもう！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 14,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "・・・「小学生です！チームを組んで<ruby><rb>戦</rb><rp>（</rp><rt>たたか</rt><rp>）</rp></ruby>える強い人をぼしゅう！」これでよし！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 14,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "明日には強い人来てくれるといいなあ！",
        "nyateracy": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.hackerRoom,
        "title": objectData.character.sho.name,
        "text": "この「あなた」って人、小学生か。小学生のふりをすればうまくだませそうだな。",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": objectData.character.sho.pose1,
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": objectData.bgimg.roomNoon,
        "title":  objectData.character.anata.name,
        "text": "やった！！フレンドしんせい来てる！レベルも高い！！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "しかも、ボクと同じ小学生だ！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "ショウは実は、大人だったんだ。小学生のふりをしてキミをだましていたんだよ。",
        "nyateracy": objectData.character.nyateracy.pose1
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "あの強さのヒミツは強化ツールだったんだ・・・！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "みんなやってるなら、ボクもやってみよ！強くなりたいし！！！",
        "nyateracy": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.hackerRoom,
        "title": objectData.character.sho.name,
        "text": "強くなるわけないって。ウイルスでパソコンの<ruby><rb>情報</rb><rp>（</rp><rt>じょうほう</rt><rp>）</rp></ruby>を手に入れて、お金をはらわせよう！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": objectData.character.sho.pose1,
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.nyateracy.name,
        "text": "ショウはキミをだましてお金を取ろうと、わざとウイルスの入ったソフトを入れさせたんだ。",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "こういうチャットのURLは危険だから<ruby><rb>絶対</rb><rp>（</rp><rt>ぜったい</rt><rp>）</rp></ruby>にクリックしてはいけないよ！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 18,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "クリックしただけで、ウイルスをパソコンに入れられてしまうこともあるので、気をつけよう！",
        "nyateracy": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "nyateracy",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.nyateracy.name,
        "text": "これが今回起こったことの真実だったんだ。",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "相手が小学生って言うから、そう思いこんじゃったよ。",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "そう、インターネットの世界では、顔が見えないからだまされないように気をつけて！",
        "nyateracy": objectData.character.nyateracy.pose3
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "さあ、じゃあ<ruby><rb>復習</rb><rp>（</rp><rt>ふくしゅう</rt><rp>）</rp></ruby>クイズをしてみよう！",
        "nyateracy": objectData.character.nyateracy.pose4
    },
    /*
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "displayId": 2,
        "title": objectData.character.nyateracy.name,
        "text": "今回のトラブルのおさらい！どうしてこんなことになったかわかる？",
        "selection1": {
            "selection": "ゲームの<ruby><rb>敵</rb><rp>（</rp><rt>てき</rt><rp>）</rp></ruby>をたおせなかった",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "フレンドをぼしゅうした",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "知らない人から送られてきたURLをクリックした",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！知らない人を<ruby><rb>信</rb><rp>（</rp><rt>しん</rt><rp>）</rp></ruby>じてURLをクリックしちゃったのが<ruby><rb>原因</rb><rp>（</rp><rt>げんいん</rt><rp>）</rp></ruby>だね。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    }
    */
]

export default story1_3Data;