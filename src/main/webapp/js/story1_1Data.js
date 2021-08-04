import objectData from './story1ObjectData.js'

const story1_1Data = [
    {
        "mode": "opening",
        "bgm": "",
        "bgimg": objectData.bgimg.roadNoon,
        "chapterNumber": "ストーリー１",
        "chapterTitle": "ゲームにひそむワナ",
    },
    {
        "mode": "darkness",
    },
    // オープニング~ダマス戦1回目
    {
        "mode": "conversation",
        "bgm": objectData.bgm.roadNoon,
        "bgimg": objectData.bgimg.roadNoon,
        "title": "【通学路】",
        "text": "（学校帰りに友達のアキラ君とゲームの話中）",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": objectData.character.akira.pose2,
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "最近さあ、「ドラゴンハンター」ってゲームやってんだよ！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "へえー、どんなゲームなの？",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "explanation",
        "displayId": 5,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "パソコンでやるゲームなんだけど、モンスターを倒していくんだよ！",
        "nyateracy": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "おもしろそう！僕もやってみようかな！",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "おっ！やろうぜ！強くなったらフレンドになろうぜ！！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "わかった！帰ったらやってみるよ！",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": objectData.bgm.home,
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "ただいまー！！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "アキラに言われたゲーム、さっそくやってみよう！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "ドラゴンハンターだよな・・・、よしっ、インストールできた！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっそくやってみよう！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "explanation",
        "displayId": 2,
        "bgm": "",
        "bgimg": "",
        "title": "【操作の説明】",
        "text": "パソコンの画面の「ドラゴンハンター」をクリックし、起動してください",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 2,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "operation",
        "displayId": 5,
        "bgm": objectData.bgm.dhOpening,
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 6,
        "bgm": objectData.bgm.dhMenu,
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "「クエスト」をさっそくやってみよう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 6,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 8,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "今はフレンドいないなあ、「ひとりで」をやってみるか！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 8,
        "bgm": "",
        "bgimg": ""
    },




    // ダマス戦1回目~ダマス戦2回目
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": objectData.bgm.home,
        "bgimg": objectData.bgimg.roomNight,
        "title": objectData.character.anata.name,
        "text": "こんなの勝てないよ・・・、強すぎる・・・",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "明日アキラにフレンドを頼もうかな・・・",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": objectData.bgm.roadNoon,
        "bgimg": objectData.bgimg.roadNoon,
        "title": "",
        "text": "次の日",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": "【通学路】",
        "text": "（学校帰りに友達のアキラ君とゲームの話中）",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": objectData.character.akira.pose2,
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "えっ、お前ダマスに苦戦してんのか？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "そうなんだ！フレンドになってもらえないかな？",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "俺今フレンドがいっぱいなんだよ！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "お前がもっと強くなったらフレンドになってやるよ！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "そっかあ・・・、もう少し自力でがんばってみるよ！",
        "mostLeft": objectData.character.anata.pose1,
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": objectData.bgm.home,
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.anata.name,
        "text": "ただいまー！！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "今日もドラゴンハンターやるかあ。",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.anata.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "operation",
        "displayId": 2,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "operation",
        "displayId": 5,
        "bgm": objectData.bgm.dhOpening,
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "今日こそダマス倒したいんだけど、今の僕じゃ倒せないなあ",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "アキラは強くならないとフレンドになってくれないのかあ。",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "そうだ！誰かほかの強い人に手伝ってもらおう！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "このフレンドっていうのを押せばよさそうだ！",
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
        "displayId": 11,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "フレンドを募集してみよう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 11,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 13,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "さっそくフレンド募集に書き込もう！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 14,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "・・・「小学生です！チームを組んで戦える強い人を募集！」これでよし！",
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
        "bgm": objectData.bgm.home,
        "bgimg": objectData.bgimg.roomNoon,
        "title": "",
        "text": "次の日",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "今日もドラゴンハンターやるかあ",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "operation",
        "displayId": 2,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "operation",
        "displayId": 5,
        "bgm": objectData.bgm.dhOpening,
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": objectData.bgm.dhMenu,
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "昨日フレンド募集したけど、強い人来てるといいなあ",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっそく見てみよう！",
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
        "displayId": 11,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっそくフレンド募集を見てみよう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 11,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "やった！！フレンド申請来てる！レベルも高い！！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "しかも、僕と同じ小学生だ！",
        "nyateracy": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 6,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "さっそくショウと一緒にクエストに行こう！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 6,
        "bgm": "",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 9,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "「チームで」を押せばよさそうだ！",
        "nyateracy": ""
    },
    {
        "mode": "operation",
        "displayId": 9,
        "bgm": "",
        "bgimg": ""
    },


    // ダマス戦2回目~ニャテラシー登場
    {
        "mode": "explanation",
        "displayId": 7,
        "bgm": objectData.bgm.dhMenu,
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "やった、ダマスを倒せた！！！ショウ強すぎる！！！",
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
        "text": "「チャットルーム」を選択すれば聞けそうだ！",
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
        "bgm": objectData.bgm.home,
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
        "text": "さっそくゲームを起動してみよう！",
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
        "text": "<span style='color: yellow;'>警告！あなたのパソコンはロックされました。<span>",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 19,
        "bgm": "",
        "bgimg": "",
        "title": "",
        "text": "<span style='color: yellow;'>20万円払わなければ、データはすべて消去されます。</span>",
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
        "text": "<span style='font-size: 8vh;'>20万だってえええ！？！？</span>",
        "nyateracy": ""
    },

    // ニャテラシー登場~過去に戻る
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
        "bgm": objectData.bgm.nyateracy,
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
        "text": "僕はニャテラシー！時が戻せる不思議なネコちゃんさ♪",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "時を戻せるだって？？<br>ありえないよ！そんなの！",
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
        "text": "君はゲームで強くなることに一生懸命で気づかずにウイルスに感染しちゃったみたいだ。",
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
        "text": "時を戻す前に、トラブルの裏側を一緒に見てみよう！",
        "nyateracy": objectData.character.nyateracy.pose4
    },

    // 過去に戻る~クイズ
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 13,
        "bgm": objectData.bgm.truth,
        "bgimg": objectData.bgimg.roomNight,
        "title":  objectData.character.anata.name,
        "text": "さっそくフレンド募集に書き込もう！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 14,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "・・・「小学生です！チームを組んで戦える強い人を募集！」これでよし！",
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
        "text": "やった！！フレンド申請来てる！レベルも高い！！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "しかも、僕と同じ小学生だ！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 15,
        "bgm": "",
        "bgimg": "",
        "title":  objectData.character.anata.name,
        "text": "ショウは実は、大人だったんだ。小学生のふりをして君をだましていたんだよ。",
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
        "text": "強くなるわけないって。ウイルスでパソコンの情報を手に入れて、お金を払わせよう！",
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
        "text": "ショウは君をだましてお金を取ろうと、わざとウイルスの入ったソフトを入れさせたんだ。",
        "nyateracy": objectData.character.nyateracy.pose2
    },
    {
        "mode": "explanation",
        "displayId": 17,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "こういうチャットのURLは危険だから絶対に押してはいけないよ！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 18,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "押しただけで、ウイルスをパソコンに入れられてしまうこともあるので、気をつけよう！",
        "nyateracy": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "explanation",
        "displayId": 1,
        "bgm": objectData.bgm.nyateracy,
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
        "text": "さあ、じゃあ復習クイズをしてみよう！",
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
            "selection": "ゲームの敵を倒せなかった",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "フレンドを募集した",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "知らない人から送られてきたURLを押した",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！知らない人を信じてURLを押しちゃったのが原因だね。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    }
    */
]

export default story1_1Data;