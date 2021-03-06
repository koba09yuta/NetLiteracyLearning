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
        "bgm": "roadNoon",
        "bgimg": "",
        "title": "【通学路】",
        "text": "（学校帰りに<ruby><rb>友達</rb><rp>（</rp><rt>ともだち</rt><rp>）</rp></ruby>のアキラとゲームの<ruby><rb>話</rb><rp>（</rp><rt>はなし</rt><rp>）</rp></ruby>中）",
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
        "text": "<ruby><rb>最近</rb><rp>（</rp><rt>さいきん</rt><rp>）</rp></ruby>さあ、「ドラゴンハンター」ってゲームやってんだよ！",
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
        "text": "パソコンでやるゲームなんだけど、モンスターをたおしていくんだよ！",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 5,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "オンラインで全国の人とつながれるんだ。",
        "nyateracy": ""
    },
    {
        "mode": "explanation",
        "displayId": 5,
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.akira.name,
        "text": "チャットしながらいっしょにできて楽しいんだぜ！",
        "nyateracy": ""
    },
    {
        "mode": "conversation",
        "bgm": "",
        "bgimg": "",
        "title": objectData.character.anata.name,
        "text": "おもしろそう！ボクもやってみようかな！",
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
        "bgm": "home",
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
        "text": "アキラに教えてもらったゲーム、さっそくやってみよう！",
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
        "displayId": 0,
        "bgm": "",
        "bgimg": "",
        "title": "【<ruby><rb>操作</rb><rp>（</rp><rt>そうさ</rt><rp>）</rp></ruby>の<ruby><rb>説明</rb><rp>（</rp><rt>せつめい</rt><rp>）</rp></ruby>】",
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
        "bgm": "dhOpening",
        "bgimg": ""
    },
    {
        "mode": "gameLoading",
    },
    {
        "mode": "explanation",
        "displayId": 6,
        "bgm": "dhMenu",
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
    }
]

export default story1_1Data;