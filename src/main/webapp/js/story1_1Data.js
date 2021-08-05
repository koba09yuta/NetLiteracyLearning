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