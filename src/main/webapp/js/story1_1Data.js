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
    {
        "mode": "conversation",
        "bgm": objectData.bgm.roadNoon,
        "bgimg": objectData.bgimg.roadNoon,
        "title": "【通学路】",
        "text": "（友達のアキラ君とゲームの話中）",
        "mostLeft": objectData.character.you.pose1,
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
        "text": "なぁなぁ、おまえんちパソコンあるだろ？",
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
        "text": "おすすめだからこのゲーム入れてみなよ！フレンドになろうぜ！？",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.akira.pose1,
        "nyateracy": "",
        "img": objectData.img.dragonHunter
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.you.name,
        "text": "わかった！帰ったらやってみるよ！",
        "mostLeft": objectData.character.you.pose1,
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
        "title": objectData.character.you.name,
        "text": "アキラの言ってたゲーム、パソコンでやるんだよな",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.you.name,
        "text": "パソコンにインストールできたし、さっそくやってみるか！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "operation",
        "operationId": 1
    },
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "どうしてこんなことになったかわかる？",
        "selection1": {
            "selection": "ゲームの敵を倒せなかった",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "チャット機能を利用した",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "フレンドを信用した",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！知らない人を信用して言われるがままにソフトをインストールしてしまったんだ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "今回のような被害をランサムウェアというよ。ゲームのチートツールを装ってプレイヤーにダウンロードさせるんだ。",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": objectData.character.nyateracy.pose1,
        "img": ""
    },
    {
        "mode": "operation"
    },
    {
        "mode": "conversation",
        "bgm": objectData.bgm.sample1,
        "bgimg": objectData.bgimg.roomNight,
        "title": objectData.character.akira.name,
        "text": "こんなん一人じゃ勝てないって！！もっと強い人たちに手伝ってもらお！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "さっそくフレンドぼしゅうに書きこも！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "・・・えーと、「小学生です！チームを組んで戦える強い人ぼしゅう！」っと、これでよし！！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.you.name,
        "text": "明日には人来てくれるといいな！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "darkness",
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.you.name,
        "text": "アキラの言ってたゲーム、パソコンでやるんだよな",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": objectData.bgimg.roomEvening,
        "title": objectData.character.you.name,
        "text": "パソコンにインストールできたし、さっそくやってみるか！",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": objectData.character.you.pose1,
        "nyateracy": "",
        "img": ""
    },
    {
        "mode": "operation",
        "operationId": 1
    },
    {
        "mode": "selection",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "どうしてこんなことになったかわかる？",
        "selection1": {
            "selection": "ゲームの敵を倒せなかった",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection2": {
            "selection": "チャット機能を利用した",
            "answer": false,
            "title": objectData.character.nyateracy.name,
            "text": "うん、それもあるね。でももっと大事なところがあるよ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
        "selection3": {
            "selection": "フレンドを信用した",
            "answer": true,
            "title": objectData.character.nyateracy.name,
            "text": "その通り！知らない人を信用して言われるがままにソフトをインストールしてしまったんだ。",
            "nyateracy": objectData.character.nyateracy.pose1
        },
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.nyateracy.name,
        "text": "今回のような被害をランサムウェアというよ。ゲームのチートツールを装ってプレイヤーにダウンロードさせるんだ。",
        "mostLeft": "",
        "centerLeft": "",
        "centerRight": "",
        "mostRight": "",
        "nyateracy": objectData.character.nyateracy.pose1,
        "img": ""
    }
]

export default story1_1Data;